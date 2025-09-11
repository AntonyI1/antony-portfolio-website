import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Smooth scrolling for navigation
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "PokeTrader Marketplace",
      description: "Full-stack Pokemon card trading platform built with React, Express.js, and MongoDB. Features user authentication, advanced filtering, personalized collections, and real-time updates with Google OAuth integration.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB", "Google OAuth", "TailwindCSS", "AWS"],
      link: "https://github.com/gavinnewin/pokeTrader",
      icon: "github"
    },
    {
      title: "TombVM - Virtual Machine Simulator",
      description: "Custom C++ virtual machine for binary analysis and malware inspection. Features 8-bit instruction set, register-based architecture, simulated memory, and comprehensive test harness for safe program execution.",
      technologies: ["C++", "CMake", "Binary Analysis", "Virtual Machine", "Assembly", "Python"],
      link: "https://github.com/AntonyI1/tombVM",
      icon: "github"
    },
    {
      title: "Genomic Data Pipeline Optimization",
      description: "Professional project at Genesis Healthcare: Optimized multi-database ETL pipeline processing over 21 million rows, reducing runtime from 2 hours to 15 minutes (88% faster). Automated cloud-database deployments and AWS S3 backups with Python.",
      technologies: ["Python", "AWS", "ETL", "MongoDB", "PostgreSQL", "CI/CD"],
      link: null,
      icon: null
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "Java", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "TailwindCSS", "Pandas", "NumPy"]
    },
    {
      title: "Cloud Services",
      skills: ["AWS", "EC2", "S3", "Lambda", "Bedrock", "IAM"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "CI/CD", "Git", "Linux", "Apache Airflow", "JupyterHub"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Amazon Aurora"]
    },
    {
      title: "Specializations",
      skills: ["Backend", "Data Analysis", "RESTful APIs", "Binary Analysis", "System Design", "Agile Development"]
    }
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
        <div className="container">
          <h1 className="hero-title">
            Hi, I am <span className="highlight">Antony Ibrahim</span>
          </h1>
          <h2 className="hero-subtitle">A Software Engineer.</h2>
          <p className="hero-description">
            I'm passionate about building scalable data pipelines and AI-powered solutions. 
            I've optimized data processing systems, reducing runtime by 88% and cutting 
            infrastructure costs by 85%. I love creating innovative software that makes a 
            meaningful impact across various industries and technologies.
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
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-company">Genesis Healthcare</span>
                  <span className="timeline-date">Sep 2024 - Present</span>
                </div>
                <p className="timeline-location">Irvine, CA</p>
                <ul className="timeline-achievements">
                  <li>Optimized ETL pipeline processing 21M+ rows, reducing runtime by <strong>88%</strong></li>
                  <li>Reduced infrastructure costs by <strong>85%</strong> through strategic AWS migration</li>
                  <li>Deployed enterprise chatbots powered by AWS Bedrock and Claude 3.5 Sonnet</li>
                  <li>Automated cloud deployments saving 2 hours per release</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer Intern</h3>
                  <span className="timeline-company">Genesis Healthcare</span>
                  <span className="timeline-date">June 2024 - Sep 2024</span>
                </div>
                <p className="timeline-location">Tokyo, Japan</p>
                <ul className="timeline-achievements">
                  <li>Refactored 5,000+ lines of Ruby to Python, improving performance by <strong>35%</strong></li>
                  <li>Co-authored published research paper on comparative genomic analysis</li>
                  <li>Provisioned secure JupyterHub environment for 3 enterprise partners</li>
                  <li>Enhanced security compliance with AWS IAM roles and MFA</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Student</h3>
                  <span className="timeline-company">UC Irvine</span>
                  <span className="timeline-date">Sep 2021 - June 2025</span>
                </div>
                <p className="timeline-location">Irvine, CA</p>
                <ul className="timeline-achievements">
                  <li>Bachelor of Science in Software Engineering</li>
                  <li>Relevant coursework: Data Structures, OS, Networks, Software Design</li>
                  <li>Programming languages: C++, Python, Java, JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
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
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>
          <div className="skills-container">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-category-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
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
