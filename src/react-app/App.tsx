import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllSkills, setShowAllSkills] = useState(false);

  const texts = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Backend Engineer"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typeText = () => {
      const current = texts[currentTextIndex];
      
      if (isDeleting) {
        setTypedText(current.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setTypedText(current.substring(0, typedText.length + 1));
        if (typedText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, texts]);

  useEffect(() => {
    // Smooth scrolling for navigation
    const handleScroll = () => {
      const sections = ['home', 'experience', 'publications', 'projects', 'skills', 'contact'];
      const viewportCenter = window.innerHeight / 2;

      // Find the section closest to the center of the viewport
      let closestSection = 'home';
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      setActiveSection(closestSection);

      // Scroll reveal animations
      const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'contact' || sectionId === 'home') {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }
    }
  };

  const projects = [
    {
      title: "PokeTrader Marketplace",
      description: "Full-stack Pokemon card trading platform built with React, Express.js, and MongoDB. Features user authentication, advanced filtering, personalized collections, and real-time updates with Google OAuth integration.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB", "Google OAuth", "TailwindCSS", "AWS"],
      link: "https://github.com/gavinnewin/pokeTrader",
      icon: "github",
      featured: false
    },
    {
      title: "VisionBox — AI Security Camera System",
      description: "Open-source AI surveillance system that detects people, vehicles, and animals on any IP camera. Trained a custom YOLOv8 model end-to-end. Features a motion-first pipeline that idles 90%+ of the time. Implements SORT multi-object tracking with Kalman filter and Hungarian algorithm. Built with a Flask REST API, SQLite for event storage, and a live-streaming web dashboard. Deployed on real hardware with automatic retention management.",
      technologies: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Flask", "SQLite", "FFmpeg"],
      link: "https://github.com/AntonyI1/VisionBox",
      icon: "github",
      featured: true
    },
    {
      title: "TombVM - Virtual Machine Simulator",
      description: "Custom C++ virtual machine for binary analysis and malware inspection. Features 8-bit instruction set, register-based architecture, simulated memory, and comprehensive test harness for safe program execution.",
      technologies: ["C++", "CMake", "Binary Analysis", "Virtual Machine", "Assembly", "Python"],
      link: "https://github.com/AntonyI1/tombVM",
      icon: "github",
      featured: false
    }
  ];

  const publications = [
    {
      title: "An Exploratory Genomic and Transcriptomic Analysis Between Choloepus didactylus and Homo sapiens",
      authors: "Ariella Baran, Antony Ibrahim, Yuka Nakano, Hideyuki Aoshima, Takeshi Ozeki, Iri Sato-Baran, David D. Ordinario",
      journal: "Genes 2025, 16(3), 272",
      doi: "https://doi.org/10.3390/genes16030272",
      published: "February 25, 2025",
      description: "Co-authored research paper on comparative genomic analysis between sloths and humans, investigating genetic basis of unique traits like slow movement, low metabolism, and longevity."
    }
  ];

  const featuredSkills = [
    "Python", "TypeScript", "React", "AWS", "FastAPI", "PostgreSQL", "Docker", "PyTorch", "Go"
  ];

  const allSkills = [
    "Python", "Go", "JavaScript", "TypeScript", "SQL", "C++", "C#", "Java",
    "FastAPI", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQLite", "REST APIs",
    "React", "Next.js", "TailwindCSS", "HTML", "CSS",
    "AWS", "Azure", "Docker", "GitHub Actions", "CI/CD", "Git", "Linux",
    "PyTorch", "OpenCV", "OpenVINO", "RAG", "FAISS",
    "TensorFlow", "Pandas", "NumPy", "n8n"
  ];

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">AI.</span>
      </div>
          <nav className="nav">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              home
            </button>
            <button 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              experience
            </button>
            <button 
              className={`nav-link ${activeSection === 'publications' ? 'active' : ''}`}
              onClick={() => scrollToSection('publications')}
            >
              publications
            </button>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              projects
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              skills
            </button>
        <button
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
        >
              contact
        </button>
          </nav>
        <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
        ></div>
        <div className="container">
          <h1 className="hero-title">
            Hi, I am <span className="highlight">Antony Ibrahim</span>
          </h1>
          <h2 className="hero-subtitle">
            A <span className="typing-text">{typedText}</span><span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I build full-stack applications and AI-powered systems. I've led development of a CRM
            serving 40+ daily users at a defense contractor, built enterprise chatbots with RAG,
            and reduced ETL runtime by 88% and infrastructure costs by 85%.
          </p>
          <div className="hero-actions">
            <a href="/Antony_Ibrahim_Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              resume
            </a>
            <a href="https://github.com/AntonyI1" className="btn btn-icon" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/antony-ibrahim" className="btn btn-icon" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="experience fade-in">
        <div className="container">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-company">Startguides — Defense Contractor</span>
                  <span className="timeline-date">Dec 2025 - Present</span>
                </div>
                <p className="timeline-location">Remote — California, USA</p>
                <ul className="timeline-achievements">
                  <li>Led development of Meridian, a full-stack CRM (React, TypeScript, FastAPI, PostgreSQL) serving <strong>40+</strong> daily users</li>
                  <li>Architected a modular plugin system with RBAC, replacing 3+ external tools with 6 in-house services</li>
                  <li>Drove product roadmap with executives across sales, operations, and management, shipping weekly</li>
                  <li>Built a bulk importer with fuzzy matching and duplicate detection for <strong>150K+</strong> legacy records across tables</li>
                  <li>Reduced page load times from 8s to under <strong>2s</strong> by parallelizing API calls and optimizing PostgreSQL indexes</li>
                  <li>Automated executive reporting via n8n, scheduling data aggregation and email delivery</li>
                  <li>Managed containerized deployments on Azure with Docker, maintaining GCC High compliance</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-company">Genesis Healthcare</span>
                  <span className="timeline-date">Jun 2024 - Dec 2025</span>
                </div>
                <p className="timeline-location">Remote — California, USA & Japan</p>
                <ul className="timeline-achievements">
                  <li>Built enterprise chatbots on AWS Bedrock with RAG and FAISS vector search over internal knowledge bases</li>
                  <li>Developed embedding pipelines and knowledge bases to improve AI context matching and retrieval accuracy</li>
                  <li>Reduced ETL runtime by <strong>88%</strong> (2 hrs to 15 min) by refactoring batch processing over <strong>21M+</strong> rows</li>
                  <li>Automated deployment pipelines with Apache Airflow, AWS Lambda, and Python, saving <strong>2+ hrs/release</strong></li>
                  <li>Cut monthly infrastructure costs by <strong>85%</strong> by optimizing cloud resources and migrating to AWS EC2</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Student</h3>
                  <span className="timeline-company">UC Irvine</span>
                  <span className="timeline-date">Sep 2021 - Jun 2025</span>
                </div>
                <p className="timeline-location">Irvine, CA</p>
                <ul className="timeline-achievements">
                  <li>Bachelor of Science in Software Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="publications slide-in-left">
        <div className="container">
          <h2 className="section-title">PUBLICATIONS</h2>
          <div className="publications-list">
            {publications.map((publication, index) => (
              <div key={index} className="publication-card">
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
                <p className="publication-journal">{publication.journal}</p>
                <p className="publication-date">Published: {publication.published}</p>
                <p className="publication-description">{publication.description}</p>
                <a 
                  href={publication.doi} 
                  className="publication-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Publication
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects slide-in-right">
        <div className="container">
          <h2 className="section-title">PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'project-featured' : ''}`}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && project.icon && (
                  <a 
                    href={project.link} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {project.icon === 'github' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills scale-in">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>
          <div className="skills-grid">
            {(showAllSkills ? allSkills : featuredSkills).map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
          <button
            className="skills-toggle"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills ? 'Show less' : 'Show all'}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact fade-in">
        <div className="container">
          <h2 className="section-title">CONTACT</h2>
          <a href="mailto:antonyibrahim0@gmail.com" className="btn btn-primary btn-large">
            email me
          </a>
        </div>
      </section>
      </div>
  );
}

export default App;
