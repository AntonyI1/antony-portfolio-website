import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Now } from '../pages/Now';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';
import { Work } from '../pages/Work';
import { NotFound } from '../pages/NotFound';

// Import styles
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/globals.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/now" element={<Now />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
