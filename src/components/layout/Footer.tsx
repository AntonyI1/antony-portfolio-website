import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/Antonyi1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/antonyibrahim" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:antonyibrahim0@gmail.com">
            Email
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} Antony Ibrahim
        </p>
      </div>
    </footer>
  );
}
