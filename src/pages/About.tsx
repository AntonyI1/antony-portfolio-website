import './About.css';

export function About() {
  return (
    <div className="about page-transition">
      <div className="prose">
        <h1>About Me</h1>

        <section>
          <h2>The Short Version</h2>
          <p>
            I'm a software engineer based in Orange County, California, currently building
            AI-powered tools at StartGuides. I'm passionate about creating intuitive developer
            experiences and exploring the possibilities of artificial intelligence.
          </p>
        </section>

        <section>
          <h2>The Longer Story</h2>
          <p>
            My journey into technology started with curiosity about how things work. That curiosity
            led me to software engineering, where I found the perfect blend of problem-solving,
            creativity, and continuous learning.
          </p>
          <p>
            Today, I focus on building AI-powered applications that make complex tasks accessible
            and enjoyable. I'm particularly interested in how we can use AI to enhance human
            capabilities rather than replace them.
          </p>
        </section>

        <section>
          <h2>What I Do</h2>
          <p>
            As an AI Engineer at StartGuides, I work on agent workflows and tools that help
            developers build better software faster. My work combines full-stack development,
            AI integration, and a focus on creating delightful user experiences.
          </p>
        </section>

        <section>
          <h2>Outside of Work</h2>
          <p>
            When I'm not coding, you'll find me exploring new technologies, reading about
            software architecture and AI, or enjoying the Southern California weather.
          </p>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>
            I'm always happy to connect with fellow developers, discuss interesting projects,
            or chat about technology. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:antonyibrahim0@gmail.com">Email</a>
            <a href="https://github.com/Antonyi1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/antonyibrahim" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
