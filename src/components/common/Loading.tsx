import './Loading.css';

interface LoadingProps {
  text?: string;
  variant?: 'spinner' | 'skeleton';
}

export function Loading({ text = 'Loading...', variant = 'spinner' }: LoadingProps) {
  if (variant === 'skeleton') {
    return (
      <div className="loading-skeleton">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-text"></div>
        <div className="skeleton-line skeleton-text"></div>
        <div className="skeleton-line skeleton-text short"></div>
      </div>
    );
  }

  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{text}</p>
    </div>
  );
}
