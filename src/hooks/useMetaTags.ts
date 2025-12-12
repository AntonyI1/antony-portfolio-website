import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function useMetaTags({
  title,
  description,
  image,
  url,
  type = 'website'
}: MetaTagsProps) {
  useEffect(() => {
    // Set document title
    document.title = title ? `${title} | Antony Ibrahim` : 'Antony Ibrahim';

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string) => {
      if (!content) return;

      // Check for property attribute (Open Graph)
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        // Check for name attribute (standard meta)
        element = document.querySelector(`meta[name="${property}"]`);
      }

      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Standard meta tags
    if (description) {
      setMetaTag('description', description);
    }

    // Open Graph tags
    setMetaTag('og:title', title);
    if (description) {
      setMetaTag('og:description', description);
    }
    setMetaTag('og:type', type);
    if (url) {
      setMetaTag('og:url', url);
    }
    if (image) {
      setMetaTag('og:image', image);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    if (description) {
      setMetaTag('twitter:description', description);
    }
    if (image) {
      setMetaTag('twitter:image', image);
    }
  }, [title, description, image, url, type]);
}
