/**
 * Content processing utilities for markdown blog posts and pages
 */

import matter from 'gray-matter';
import { marked } from 'marked';
import { codeToHtml } from 'shiki';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft: boolean;
  content: string;
  html: string;
}

export interface PageContent {
  title: string;
  lastUpdated?: string;
  location?: string;
  html: string;
}

/**
 * Parse markdown content with frontmatter
 */
export function parseMarkdown(markdownContent: string): {
  frontmatter: Record<string, any>;
  content: string;
} {
  const { data, content } = matter(markdownContent);
  return {
    frontmatter: data,
    content: content.trim(),
  };
}

/**
 * Convert markdown to HTML with syntax highlighting
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  // Use marked's walkTokens hook to process code blocks with shiki
  marked.use({
    async: true,
    walkTokens: async (token) => {
      if (token.type === 'code' && token.lang) {
        try {
          // Use shiki to generate syntax-highlighted HTML
          const html = await codeToHtml(token.text, {
            lang: token.lang,
            theme: 'one-dark-pro', // Warm dark theme
          });
          // Store the highlighted HTML
          (token as any).highlightedCode = html;
        } catch (error) {
          console.error(`Error highlighting code with language ${token.lang}:`, error);
        }
      }
    },
  });

  // Configure renderer to use the pre-highlighted code
  const renderer = new marked.Renderer();
  renderer.code = ({ text, lang }: any) => {
    // If we have pre-highlighted code, use it
    if ((arguments[0] as any).highlightedCode) {
      return (arguments[0] as any).highlightedCode;
    }
    // Fallback to default rendering
    if (lang) {
      return `<pre><code class="language-${lang}">${text}</code></pre>`;
    }
    return `<pre><code>${text}</code></pre>`;
  };

  marked.use({ renderer });

  const html = await marked.parse(markdown);
  return html;
}

/**
 * Process a blog post from markdown
 */
export async function processBlogPost(
  slug: string,
  markdownContent: string
): Promise<BlogPost> {
  const { frontmatter, content } = parseMarkdown(markdownContent);
  const html = await markdownToHtml(content);

  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    description: frontmatter.description || '',
    tags: frontmatter.tags || [],
    draft: frontmatter.draft || false,
    content,
    html,
  };
}

/**
 * Process a page from markdown
 */
export async function processPage(markdownContent: string): Promise<PageContent> {
  const { frontmatter, content } = parseMarkdown(markdownContent);
  const html = await markdownToHtml(content);

  return {
    title: frontmatter.title || '',
    lastUpdated: frontmatter.lastUpdated,
    location: frontmatter.location,
    html,
  };
}

/**
 * Load blog posts using Vite's import.meta.glob
 * This will be used at build time to load all blog posts
 */
export async function loadBlogPosts(): Promise<BlogPost[]> {
  // Use Vite's import.meta.glob to load all markdown files in content/blog/
  const modules = import.meta.glob('/content/blog/*.md', {
    query: '?raw',
    import: 'default'
  });

  const posts: BlogPost[] = [];

  for (const path in modules) {
    // Extract slug from filename
    const filename = path.split('/').pop() || '';
    const slug = filename.replace('.md', '');

    try {
      const markdownContent = await modules[path]() as string;
      const post = await processBlogPost(slug, markdownContent);

      // Skip draft posts in production
      if (!post.draft || import.meta.env.DEV) {
        posts.push(post);
      }
    } catch (error) {
      console.error(`Error loading blog post ${slug}:`, error);
    }
  }

  // Sort by date, newest first
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

/**
 * Load a single blog post by slug
 */
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Dynamically import the markdown file
    const module = await import(`/content/blog/${slug}.md?raw`);
    const markdownContent = module.default;
    const post = await processBlogPost(slug, markdownContent);

    // Return null for draft posts in production (show 404)
    if (post.draft && !import.meta.env.DEV) {
      return null;
    }

    return post;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Load page content (about, now, etc.)
 */
export async function loadPageContent(pageName: string): Promise<PageContent | null> {
  try {
    const module = await import(`/content/${pageName}.md?raw`);
    const markdownContent = module.default;
    return await processPage(markdownContent);
  } catch (error) {
    console.error(`Error loading page ${pageName}:`, error);
    return null;
  }
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate estimated reading time
 */
export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
