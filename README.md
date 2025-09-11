# Antony Ibrahim - Portfolio Website

A modern, responsive portfolio website showcasing software engineering expertise and professional projects.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional dark theme with purple-blue accents
- 📱 **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with React, TypeScript, and Vite
- 🌐 **Cloudflare Deployment** - Hosted on Cloudflare Workers for global performance
- 📊 **Interactive Timeline** - Professional experience showcase
- 🛠️ **Skills Organization** - Categorized technical skills display
- 📄 **Resume Integration** - Direct PDF download functionality

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Custom CSS with modern animations
- **Deployment**: Cloudflare Workers
- **Hosting**: Cloudflare (Free tier)

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/AntonyI1/antony-portfolio-website.git
cd antony-portfolio-website
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Your portfolio will be available at [http://localhost:5173](http://localhost:5173).

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── react-app/
│   ├── App.tsx          # Main portfolio component
│   ├── App.css          # Styling and animations
│   ├── index.css        # Global styles
│   └── main.tsx         # React entry point
├── worker/
│   └── index.ts         # Cloudflare Worker
public/
└── resume.pdf           # Resume PDF file
```

## 🎨 Customization

- Update personal information in `src/react-app/App.tsx`
- Modify styling in `src/react-app/App.css`
- Replace `public/resume.pdf` with your resume
- Update social media links and contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
