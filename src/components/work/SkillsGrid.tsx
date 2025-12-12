import { useState } from 'react';
import { featuredSkills, allSkills } from '../../data/portfolio';
import './SkillsGrid.css';

export function SkillsGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? allSkills : featuredSkills;

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {displayedSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <button
        className="skills-toggle"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show featured skills' : 'Show all skills'}
      </button>
    </div>
  );
}
