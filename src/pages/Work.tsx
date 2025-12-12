import { Timeline } from '../components/work/Timeline';
import { ProjectCard } from '../components/work/ProjectCard';
import { Publications } from '../components/work/Publications';
import { SkillsGrid } from '../components/work/SkillsGrid';
import './Work.css';

export function Work() {
  return (
    <div className="work page-transition">
      <header className="work-header">
        <h1>Work & Portfolio</h1>
        <p className="work-intro">
          A collection of my professional experience, projects, research, and technical skills.
        </p>
        <a
          href="/Antony_Ibrahim_Resume.pdf"
          className="button button-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </header>

      <section className="work-section">
        <h2 className="section-title">Experience</h2>
        <Timeline />
      </section>

      <section className="work-section">
        <h2 className="section-title">Projects</h2>
        <ProjectCard />
      </section>

      <section className="work-section">
        <h2 className="section-title">Publications</h2>
        <Publications />
      </section>

      <section className="work-section">
        <h2 className="section-title">Skills</h2>
        <SkillsGrid />
      </section>
    </div>
  );
}
