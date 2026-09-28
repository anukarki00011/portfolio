import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const { detail } = project;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal tone-${project.tint}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
      >
        <header className="modal-head">
          <div>
            <span className="modal-cat">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="modal-tag">{project.tagline}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <div className="modal-block">
            <span className="modal-num">01</span>
            <h4>Problem</h4>
            <p>{detail.problem}</p>
          </div>

          <div className="modal-block">
            <span className="modal-num">02</span>
            <h4>Idea</h4>
            <p>{detail.idea}</p>
          </div>

          <div className="modal-block">
            <span className="modal-num">03</span>
            <h4>Technology</h4>
            <ul className="proj-tech">
              {project.tech.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="modal-block">
            <span className="modal-num">04</span>
            <h4>Key features</h4>
            <ul className="modal-list">
              {detail.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="modal-block">
            <span className="modal-num">05</span>
            <h4>What I learned</h4>
            <ul className="modal-list">
              {detail.learned.map(l => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="modal-block">
            <span className="modal-num">06</span>
            <h4>Links</h4>
            <div className="proj-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}