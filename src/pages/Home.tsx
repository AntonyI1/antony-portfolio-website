import { RecentPosts } from '../components/home/RecentPosts';
import { CurrentStatus } from '../components/home/CurrentStatus';
import { Button } from '../components/common/Button';
import { useMetaTags } from '../hooks/useMetaTags';
import './Home.css';

export function Home() {
  useMetaTags({
    title: 'Home',
    description: 'Software engineer building AI-powered tools and crafting delightful web experiences. Based in Orange County, California.',
    url: 'https://antony-ibrahim.dev',
    type: 'website'
  });

  return (
    <div className="home page-transition">
      <section className="hero">
        <h1 className="hero-greeting">Hey, I'm Antony</h1>
        <p className="hero-tagline">
          I'm a software engineer building AI-powered tools and crafting
          delightful web experiences. Currently based in Orange County, California.
        </p>
        <div className="hero-actions">
          <Button to="/about" variant="primary">
            About Me
          </Button>
          <Button to="/work" variant="secondary">
            See My Work
          </Button>
        </div>
      </section>

      <RecentPosts />

      <CurrentStatus />
    </div>
  );
}
