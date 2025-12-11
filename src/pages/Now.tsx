import './Now.css';

export function Now() {
  return (
    <div className="now page-transition">
      <div className="prose">
        <h1>What I'm Up To Now</h1>

        <p className="now-meta">
          <em>Last updated: December 11, 2024</em><br />
          <em>Location: Orange County, CA</em>
        </p>

        <p>
          This is my <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a> -
          a snapshot of what I'm focused on at this point in my life.
        </p>

        <section>
          <h2>Work</h2>
          <p>
            Building AI agent workflows and developer tools at StartGuides. Currently focused on
            creating intuitive experiences for developers working with AI-powered code generation
            and autonomous agents.
          </p>
        </section>

        <section>
          <h2>Learning</h2>
          <p>
            Diving deeper into:
          </p>
          <ul>
            <li>Advanced AI agent architectures and prompt engineering</li>
            <li>System design patterns for scalable applications</li>
            <li>Modern frontend frameworks and performance optimization</li>
          </ul>
        </section>

        <section>
          <h2>Reading</h2>
          <ul>
            <li>Technical blogs on AI and software architecture</li>
            <li>Documentation for emerging AI frameworks</li>
            <li>Papers on LLM capabilities and limitations</li>
          </ul>
        </section>

        <section>
          <h2>Building</h2>
          <p>
            Working on this personal website redesign - transforming it from a traditional portfolio
            into a cozy digital home where I can share thoughts, projects, and learnings.
          </p>
        </section>

        <section>
          <h2>Life</h2>
          <p>
            Enjoying the beautiful weather in Southern California and finding balance between
            coding, learning, and exploring new places.
          </p>
        </section>
      </div>
    </div>
  );
}
