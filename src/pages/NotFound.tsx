import { Link } from 'react-router-dom';
import { useMetaTags } from '../hooks/useMetaTags';
import './NotFound.css';

export function NotFound() {
  useMetaTags({
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <div className="not-found page-transition">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="button button-primary">
        Go Home
      </Link>
    </div>
  );
}
