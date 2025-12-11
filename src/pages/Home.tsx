import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home page-transition">
      <section className="hero">
        <h1 className="hero-greeting">Hey, I'm Antony</h1>
        <p className="hero-tagline">
          I'm a software engineer building AI-powered tools and crafting
          delightful web experiences. Currently based in Orange County, California.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="button button-primary">
            About Me
          </Link>
          <Link to="/work" className="button button-secondary">
            See My Work
          </Link>
        </div>
      </section>

      <section className="home-highlights">
        <h2>What I'm Up To</h2>
        <p className="highlight-text">
          Currently building AI agent workflows at StartGuides, exploring the intersection
          of developer experience and artificial intelligence.
        </p>
        <Link to="/now" className="highlight-link">
          Read more on my Now page →
        </Link>
      </section>
    </div>
  );
}
