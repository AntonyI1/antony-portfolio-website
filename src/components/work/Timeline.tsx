import { experiences } from '../../data/portfolio';
import './Timeline.css';

export function Timeline() {
  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-marker ${exp.isCurrent ? 'current' : ''}`}></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-date">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="timeline-location">{exp.location}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="timeline-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: achievement }} />
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
