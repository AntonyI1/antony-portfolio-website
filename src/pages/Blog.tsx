import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadBlogPosts, formatDate, type BlogPost } from '../lib/content';
import { useMetaTags } from '../hooks/useMetaTags';
import './Blog.css';

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useMetaTags({
    title: 'Blog',
    description: 'Thoughts on software engineering, AI, web development, and technology.',
    url: 'https://antony-ibrahim.dev/blog',
    type: 'website'
  });

  useEffect(() => {
    loadBlogPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Extract unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  if (loading) {
    return (
      <div className="blog page-transition">
        <h1>Blog</h1>
        <p className="text-muted">Loading posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="blog page-transition">
        <h1>Blog</h1>
        <div className="blog-empty-state">
          <p>Welcome to my blog! I'll be sharing thoughts on software engineering, AI, and technology here.</p>
          <p className="text-muted">Posts coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog page-transition">
      <header className="blog-header">
        <h1>Blog</h1>
        <p className="blog-subtitle">
          Thoughts on software engineering, AI, and building products
        </p>
      </header>

      {allTags.length > 0 && (
        <div className="tag-filter">
          <button
            className={`filter-tag ${selectedTag === null ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="blog-list">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="blog-post-card">
            <Link to={`/blog/${post.slug}`} className="blog-post-link">
              <h2>{post.title}</h2>
              <div className="blog-post-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.tags.length > 0 && (
                  <div className="blog-post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {post.description && (
                <p className="blog-post-description">{post.description}</p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
