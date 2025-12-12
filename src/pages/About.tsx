import { useState, useEffect } from 'react';
import { loadPageContent, type PageContent } from '../lib/content';
import './About.css';

export function About() {
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPageContent('about')
      .then(setContent)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="about page-transition">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="about page-transition">
        <p>Content not found.</p>
      </div>
    );
  }

  return (
    <div className="about page-transition">
      <div className="prose" dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
}
