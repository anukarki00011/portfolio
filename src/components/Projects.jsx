import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { projects } from '../data/content.js';
import ProjectModal from './ProjectModal.jsx';

function ProjectThumb({ project }) {
  const [error, setError] = useState(false);
  const [ext, setExt] = useState('png');

  if (error) {
    return (
      <div className={`thumb-placeholder tone-${project.tint}`}>
        <span className="thumb-tag">preview</span>
        <span className="thumb-name">{project.name}</span>
        <span className="thumb-hint">
          add <code>{project.id}.png</code> to <code>public/projects/</code>
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/projects/${project.id}.${ext}`}
      alt={`${project.name} preview`}
      loading="lazy"
      className="thumb-img"
      onError={() => {
        if (ext === 'png') setExt('jpg');
        else if (ext === 'jpg') setExt('jpeg');
        else setError(true);
      }}
    />
  );
}

export default function Projects() {
  const ref = useReveal();
  const [openId, setOpenId] = useState(null);
  const openProject = projects.find(p => p.id === openId) || null;

  return (
    <section id="projects" className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">03 — projects</span>
        <h2 className="section-title">
          Things I've <em>actually built.</em>
        </h2>
      </div>

      <div className="projects">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`proj proj-${p.layout} tone-${p.tint}`}
            onClick={() => setOpenId(p.id)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpenId(p.id);
              }
            }}
          >
            <div className="proj-visual">
              <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
              <ProjectThumb project={p} />
              <span className="proj-open">
                open case study <span>→</span>
              </span>
            </div>

            <div className="proj-info">
              <span className="proj-cat">{p.category}</span>
              <h3>{p.name}</h3>
              <p className="proj-tag">{p.tagline}</p>
              <p className="proj-desc">{p.description}</p>
              <ul className="proj-tech">
                {p.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="proj-links" onClick={e => e.stopPropagation()}>
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub <span>↗</span>
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  );
}