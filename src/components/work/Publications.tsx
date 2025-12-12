import { publications } from '../../data/portfolio';
import './Publications.css';

export function Publications() {
  return (
    <div className="publications-list">
      {publications.map((publication, index) => (
        <article key={index} className="publication-card">
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
            View Publication →
          </a>
        </article>
      ))}
    </div>
  );
}
