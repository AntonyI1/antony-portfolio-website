import { useState, useEffect } from 'react';
import { loadPageContent, type PageContent } from '../lib/content';
import './Now.css';

export function Now() {
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPageContent('now')
      .then(setContent)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="now page-transition">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="now page-transition">
        <p>Content not found.</p>
      </div>
    );
  }

  return (
    <div className="now page-transition">
      {content.lastUpdated && (
        <p className="now-meta text-muted">
          Last updated: {content.lastUpdated}
          {content.location && ` • ${content.location}`}
        </p>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
}
