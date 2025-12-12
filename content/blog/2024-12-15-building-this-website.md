---
title: "Building This Website: A Modern Portfolio Redesign"
date: 2024-12-15
description: "How I redesigned my personal website with React 19, TypeScript, and a cozy aesthetic. A deep dive into the technical decisions and design philosophy."
tags: ["projects", "react", "web-development", "design"]
draft: false
---

# Building This Website: A Modern Portfolio Redesign

I recently completed a ground-up redesign of my personal website, and I want to share the journey - from concept to implementation.

## The Problem

My old portfolio site was... functional. But it felt cold and corporate. It was a static resume page with cyan accents and purple gradients. The kind of site that screams "I made this to get a job" rather than "This is who I am."

I wanted something different.

## The Vision

**Goal:** Create a cozy digital home, not just a professional portfolio.

Specific requirements:
- Warm, inviting design (think coffee shop, not conference room)
- Easy content updates (markdown, not React components)
- Blog for sharing thoughts and learnings
- Fast, accessible, and delightful to use

## Tech Stack

### Framework: React 19 + TypeScript

I went all-in on React 19 to explore the latest features:

```typescript
// Type-safe routing with React Router
const routes = [
  { path: '/', element: <Home /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  // ...
]
```

TypeScript gives me confidence that everything's wired correctly.

### Build Tool: Vite

Vite's dev server is lightning fast. Hot module replacement makes development a joy:

```bash
npm run dev
# Server ready in ~700ms
```

### Deployment: Cloudflare Workers

Edge deployment for global performance:

```json
{
  "compatibility_date": "2024-12-01",
  "assets": { "directory": "./dist" },
  "not_found_handling": "single-page-application"
}
```

Free, fast, and handles SPA routing perfectly.

### Content: Markdown + Gray Matter

Blog posts are just markdown files:

```markdown
---
title: "My Post"
date: 2025-01-15
tags: ["web-dev"]
---

Content here...
```

Processed at build time using `gray-matter` and `marked`. No runtime markdown parsing.

## Design System

### Color Palette

Moved from cold blues to warm ambers:

```css
/* Dark mode */
--bg-primary: #1a1814;      /* Warm black */
--text-primary: #f5f0e8;    /* Warm off-white */
--accent-primary: #e8a854;  /* Amber */

/* Light mode */
--bg-primary: #faf8f5;      /* Warm cream */
--accent-primary: #c9844a;  /* Burnt orange */
```

The difference is subtle but transformative. Everything feels warmer.

### Typography

```css
--font-heading: 'Fraunces', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--text-base: 1.125rem;      /* 18px for comfortable reading */
--line-height-body: 1.7;    /* Generous spacing */
```

Serif headings add personality. Larger body text and generous line-height make blog posts comfortable to read.

### Components

Built a component library from scratch:

```
components/
├── layout/
│   ├── Header.tsx       # Navigation
│   └── Footer.tsx       # Social links
├── common/
│   ├── Button.tsx       # Consistent CTAs
│   ├── Card.tsx         # Soft shadows, rounded corners
│   └── Tag.tsx          # Blog post tags
├── home/
│   ├── Hero.tsx         # Landing section
│   └── RecentPosts.tsx  # Latest blog posts
└── blog/
    └── ...
```

Every component follows the cozy design system.

## Content Management

### File Structure

```
content/
├── about.md
├── now.md
└── blog/
    ├── 2025-01-15-hello-world.md
    ├── 2025-02-10-building-ai-agents.md
    └── ...
```

### Build-Time Processing

Using Vite's `import.meta.glob`:

```typescript
const posts = import.meta.glob('/content/blog/*.md', {
  eager: true,
  as: 'raw'
});

// Parse frontmatter
const parsed = matter(content);

// Convert to HTML
const html = marked(parsed.content);
```

All processing happens at build time. The browser just receives HTML.

## Features

### Theme Toggle

Persistent dark/light mode with `localStorage`:

```typescript
const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'dark';
});
```

### Syntax Highlighting

Code blocks use Shiki with a warm dark theme:

```typescript
const highlighter = await getHighlighter({
  theme: 'nord',
  langs: ['javascript', 'typescript', 'bash']
});
```

### Reading Time

Calculated from word count:

```typescript
const estimateReadingTime = (text: string): number => {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 WPM average
};
```

### Tag Filtering

Click a tag to filter posts:

```typescript
const filteredPosts = selectedTag
  ? posts.filter(p => p.tags.includes(selectedTag))
  : posts;
```

## Performance

### Bundle Size

```
dist/
├── index.js          106 kB (gzipped)
├── blog posts        Lazy loaded
└── Total            ~350 kB
```

### Lighthouse Scores

- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Lessons Learned

### 1. Design Systems Are Worth It

Setting up CSS variables and component primitives upfront paid dividends. Every new feature felt cohesive.

### 2. Markdown is Perfect for Blogs

Not having to write React components for blog posts is liberating. I can write in any text editor.

### 3. Build-Time Processing > Runtime

Processing markdown at build time means zero JavaScript overhead for blog posts. Fast page loads, better SEO.

### 4. Warm Colors Matter

The switch from cold blues to warm ambers fundamentally changed the feel of the site. Never underestimate color psychology.

### 5. Write for Yourself First

This site is designed for me to enjoy updating. If I'm excited to write blog posts, I'll actually write them.

## What's Next

Future enhancements:
- RSS feed for blog
- Newsletter integration
- More blog posts!
- Performance optimizations
- Accessibility improvements

## Conclusion

This redesign taught me that **personal websites should be personal**.

Not every site needs to look like a SaaS landing page. It's okay to be warm, quirky, and human.

If you're thinking about redesigning your site, I encourage you to:
1. Think about the feeling you want to convey
2. Choose technologies that make you excited to build
3. Design a content system you'll actually use
4. Optimize for your own joy

Check out the [source code on GitHub](#) if you want to see how it all works!

## Tech Stack Summary

**Frontend:**
- React 19
- TypeScript
- React Router
- Vite

**Content:**
- Markdown files
- Gray Matter (frontmatter)
- Marked (markdown parsing)
- Shiki (syntax highlighting)

**Styling:**
- CSS Modules
- Custom design system
- Responsive design

**Deployment:**
- Cloudflare Workers
- Edge deployment
- SPA routing

---

*Have questions about the implementation? Want to chat about web development? Feel free to reach out!*
