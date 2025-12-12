# Antony Ibrahim - Personal Website

A cozy digital home showcasing my work, thoughts, and journey as a software engineer. Built with modern web technologies and designed to be warm, personal, and easy to maintain.

**Live Site:** [antony-ibrahim.dev](https://antony-ibrahim.dev)

## ✨ Features

- **Markdown-Based Content** - Write blog posts and update pages without touching code
- **Cozy Design System** - Warm colors, generous spacing, comfortable reading experience
- **Dark/Light Themes** - Automatically switches with system preference, persists user choice
- **Blog with Syntax Highlighting** - Write technical posts with beautiful code blocks
- **Tag Filtering** - Organize posts by topics
- **Year-Based Archives** - Posts grouped by year for easy browsing
- **Mobile Responsive** - Looks great on all devices with hamburger menu
- **Fast & Performant** - Built with Vite, deployed on Cloudflare Workers
- **Accessible** - Semantic HTML, proper heading hierarchy, keyboard navigable

## 📁 Project Structure

```
antony-portfolio-website/
├── content/                    # Markdown content (blog posts, pages)
│   ├── about.md               # About Me page
│   ├── now.md                 # Now page (what I'm up to)
│   └── blog/                  # Blog posts
│       ├── 2025-01-15-hello-world.md
│       ├── 2025-02-10-building-ai-agents.md
│       └── ...
├── src/
│   ├── components/            # Reusable React components
│   │   ├── common/           # Button, Tag, Loading, etc.
│   │   ├── home/             # Hero, RecentPosts, CurrentStatus
│   │   ├── layout/           # Header, Footer
│   │   └── work/             # Timeline, ProjectCard, SkillsGrid
│   ├── pages/                # Page components (Home, About, Blog, etc.)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Content loading utilities
│   ├── data/                 # Portfolio data (experience, projects, skills)
│   └── styles/               # Global CSS variables and typography
├── public/                    # Static assets
│   └── Antony_Ibrahim_Resume.pdf
└── dist/                      # Build output (generated)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/AntonyI1/antony-portfolio-website.git
cd antony-portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## 📝 Content Management

### Adding a Blog Post

1. Create a new markdown file in `content/blog/`:
   ```bash
   # Naming convention: YYYY-MM-DD-slug.md
   content/blog/2025-12-15-my-new-post.md
   ```

2. Add frontmatter at the top of the file:
   ```yaml
   ---
   title: "My Awesome Blog Post"
   date: 2025-12-15
   description: "A brief description for previews and SEO"
   tags: ["typescript", "web-development"]
   draft: false
   ---
   ```

3. Write your content in markdown:
   ```markdown
   # My Awesome Blog Post

   This is the introduction...

   ## A Section

   Some more content with **bold** and *italic* text.

   ```typescript
   // Code blocks get syntax highlighting automatically
   const greeting = "Hello, world!";
   console.log(greeting);
   ```

4. Save the file - it will automatically appear on the blog page!

### Frontmatter Schema

**Blog Posts** (`content/blog/*.md`):
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `date` | YYYY-MM-DD | ✅ | Publication date |
| `description` | string | ✅ | Short summary (for previews and SEO) |
| `tags` | array | ✅ | Topics/categories (e.g., `["react", "typescript"]`) |
| `draft` | boolean | ❌ | If `true`, post won't appear in production |

**About/Now Pages** (`content/about.md`, `content/now.md`):
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Page title |
| `lastUpdated` | YYYY-MM-DD | ✅ | Last update date |
| `location` | string | ❌ | Your current location (for Now page) |

### Updating About or Now Pages

Simply edit the markdown files:
- `content/about.md` - Your personal story, background, interests
- `content/now.md` - What you're currently focused on

The pages will update automatically on the next build.

### Updating Work Experience, Projects, or Skills

Edit `src/data/portfolio.ts`:

```typescript
export const experiences = [
  {
    company: "Your Company",
    title: "Software Engineer",
    period: "Jan 2024 - Present",
    description: "Building awesome things...",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    current: true
  },
  // ... more experiences
];
```

## 🎨 Design System

### Color Palette

The site uses a warm, cozy color scheme that changes between light and dark themes:

**Dark Mode (Default):**
- Background: `#1a1814` (warm black)
- Text: `#f5f0e8` (warm off-white)
- Accent: `#e8a854` (warm amber)

**Light Mode:**
- Background: `#faf8f5` (warm cream)
- Text: `#2d2820` (warm dark)
- Accent: `#c9844a` (burnt orange)

### Typography

- **Headings**: Fraunces (serif) for a personal, warm feel
- **Body**: Inter (sans-serif) for comfortable reading
- **Code**: JetBrains Mono for code blocks

## 🛠 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

### Building for Production

```bash
npm run build
```

Output goes to `dist/` directory. The build process:
1. Compiles TypeScript
2. Processes markdown files
3. Bundles assets with Vite
4. Generates syntax highlighting for code blocks
5. Optimizes for Cloudflare Workers

### Deployment

The site is deployed to Cloudflare Workers:

```bash
# Deploy to production
wrangler deploy

# Deploy to a preview branch
wrangler deploy --branch preview-branch-name
```

**Prerequisites:**
- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)
- Authenticated with Cloudflare (`wrangler login`)

## 🧪 Testing

### Manual Testing Checklist

Before deploying:
- [ ] All pages load without errors
- [ ] Blog posts display correctly with syntax highlighting
- [ ] Tag filtering works on blog page
- [ ] Theme toggle switches between light/dark
- [ ] Theme preference persists across page refreshes
- [ ] Navigation works on all pages
- [ ] Mobile menu opens and closes
- [ ] Contact links in footer work
- [ ] Site is responsive on mobile, tablet, desktop

## 🎯 Performance

- **Bundle Size**: ~530 KB (160 KB gzipped)
- **Lighthouse Scores**: Target >90 in all categories
- **First Load**: Fast (< 2s on 3G)
- **Code Splitting**: Automatic via Vite

## ♿ Accessibility

- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3, no skips)
- Keyboard navigable
- Focus states on all interactive elements
- ARIA labels where appropriate
- Color contrast meets WCAG AA standards

## 📦 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Routing** | React Router v7 |
| **Content** | Markdown (gray-matter + marked) |
| **Syntax Highlighting** | Shiki |
| **Hosting** | Cloudflare Workers |
| **Styling** | Custom CSS (CSS Variables + Modules) |

## 🤝 Contributing

This is a personal website, but feel free to:
- Report bugs by opening an issue
- Suggest improvements
- Fork it for your own use (credit appreciated!)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Antony Ibrahim**
- Website: [antony-ibrahim.dev](https://antony-ibrahim.dev)
- GitHub: [@Antonyi1](https://github.com/Antonyi1)
- Email: antonyibrahim0@gmail.com

---

Built with ❤️ and lots of ☕
