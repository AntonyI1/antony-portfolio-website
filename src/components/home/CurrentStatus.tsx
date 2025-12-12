import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadPageContent, type PageContent } from '../../lib/content';
import './CurrentStatus.css';

export function CurrentStatus() {
  const [nowPage, setNowPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNowPage() {
      try {
        const content = await loadPageContent('now');
        setNowPage(content);
      } catch (error) {
        console.error('Error loading now page:', error);
      } finally {
        setLoading(false);
      }
    }

    loadNowPage();
  }, []);

  if (loading) {
    return (
      <section className="home-highlights">
        <h2>What I'm Up To</h2>
        <p className="highlight-text loading">Loading current status...</p>
      </section>
    );
  }

  // Extract first paragraph from the Work section as a preview
  const extractWorkPreview = (html: string): string => {
    // Find the Work section
    const workMatch = html.match(/<h2[^>]*>Work<\/h2>\s*<p[^>]*><strong>([^<]+)<\/strong><\/p>/i);
    if (workMatch) {
      return workMatch[1];
    }
    // Fallback to default message
    return 'Building AI agent workflows at StartGuides';
  };

  const workPreview = nowPage ? extractWorkPreview(nowPage.html) : 'Building AI agent workflows at StartGuides';
  const location = nowPage?.location || 'Orange County, CA';
  const lastUpdated = nowPage?.lastUpdated || '';

  return (
    <section className="home-highlights">
      <h2>What I'm Up To</h2>
      <div className="current-status">
        <div className="status-item">
          <span className="status-label">Currently:</span>
          <span className="status-value">{workPreview}</span>
        </div>
        <div className="status-item">
          <span className="status-label">Location:</span>
          <span className="status-value">{location}</span>
        </div>
        {lastUpdated && (
          <div className="status-meta">
            Last updated {new Date(lastUpdated).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </div>
        )}
      </div>
      <Link to="/now" className="highlight-link">
        Read more on my Now page →
      </Link>
    </section>
  );
}
