import { useState, useEffect } from 'react';
import { loadPageContent, type PageContent } from '../lib/content';
import { useMetaTags } from '../hooks/useMetaTags';
import { Loading } from '../components/common/Loading';
import './About.css';

export function About() {
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'About',
    description: 'Learn more about Antony Ibrahim - software engineer, AI enthusiast, and builder of delightful web experiences.',
    url: 'https://antony-ibrahim.dev/about',
    type: 'website'
  });

  useEffect(() => {
    loadPageContent('about')
      .then(setContent)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="about page-transition">
        <Loading variant="skeleton" />
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
