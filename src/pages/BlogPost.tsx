import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loadBlogPost, formatDate, estimateReadingTime, type BlogPost as BlogPostType } from '../lib/content';
import './BlogPost.css';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    loadBlogPost(slug)
      .then((loadedPost) => {
        if (loadedPost) {
          setPost(loadedPost);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post page-transition">
        <p className="text-muted">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post page-transition">
        <h1>Post Not Found</h1>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="blog-post page-transition">
      <article className="post-article">
        <header className="post-header">
          <Link to="/blog" className="back-link">
            ← Back to Blog
          </Link>

          <h1 className="post-title">{post.title}</h1>

          <div className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="separator">•</span>
            <span>{readingTime} min read</span>
          </div>

          {post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="post-content prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="post-footer">
          <Link to="/blog" className="back-link">
            ← Back to All Posts
          </Link>
        </footer>
      </article>
    </div>
  );
}
