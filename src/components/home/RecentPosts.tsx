import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadBlogPosts, formatDate } from '../../lib/content';
import type { BlogPost } from '../../lib/content';
import { Tag } from '../common/Tag';
import './RecentPosts.css';

export function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const posts = await loadBlogPosts();
        // Get 3 most recent posts
        const recent = posts.slice(0, 3);
        setRecentPosts(recent);
      } catch (error) {
        console.error('Error loading recent posts:', error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) {
    return (
      <section className="recent-posts">
        <h2>Recent Writing</h2>
        <p className="loading-text">Loading posts...</p>
      </section>
    );
  }

  if (recentPosts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <section className="recent-posts">
      <h2>Recent Writing</h2>
      <div className="recent-posts-list">
        {recentPosts.map((post) => (
          <article key={post.slug} className="recent-post-card">
            <Link to={`/blog/${post.slug}`} className="recent-post-link">
              <h3 className="recent-post-title">{post.title}</h3>
              <time className="recent-post-date">{formatDate(post.date)}</time>
              <p className="recent-post-description">{post.description}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="recent-post-tags">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
      <Link to="/blog" className="see-all-link">
        See all posts →
      </Link>
    </section>
  );
}
