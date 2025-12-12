import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { Layout } from '../components/layout/Layout';
import { Loading } from '../components/common/Loading';

// Lazy load route components for better code splitting
const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('../pages/About').then(m => ({ default: m.About })));
const Now = lazy(() => import('../pages/Now').then(m => ({ default: m.Now })));
const Blog = lazy(() => import('../pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('../pages/BlogPost').then(m => ({ default: m.BlogPost })));
const Work = lazy(() => import('../pages/Work').then(m => ({ default: m.Work })));
const NotFound = lazy(() => import('../pages/NotFound').then(m => ({ default: m.NotFound })));

// Import styles
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/globals.css';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading text="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/now" element={<Now />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/work" element={<Work />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
