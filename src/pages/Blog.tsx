import './Blog.css';

export function Blog() {
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
