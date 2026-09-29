import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { projects } from '../data/content.js';
import { createPortal } from 'react-dom';
/* ---------- Icons ---------- */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="14" height="14">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" aria-hidden="true" width="16" height="16">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/* ---------- Screenshot with error fallback ---------- */
function Screenshot({ name, index, projectName, tint, onOpen }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`case-shot case-shot-empty tone-${tint}`}>
        <span className="case-shot-tag">screenshot {index + 1}</span>
        <span className="case-shot-hint">
          add <code>{name}</code>
          <br />
          to <code>public/projects/</code>
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="case-shot"
      onClick={onOpen}
      aria-label={`Open ${projectName} screenshot ${index + 1}`}
    >
      <img
        src={`/projects/${name}`}
        alt={`${projectName} screenshot ${index + 1}`}
        loading="lazy"
        onError={() => setError(true)}
      />
      <span className="case-shot-zoom" aria-hidden="true">
        <ZoomIcon />
      </span>
    </button>
  );
}

/* ---------- A single case-study block ---------- */
function CaseBlock({ num, title, children, wide }) {
  return (
    <div className={`case-block ${wide ? 'case-block-wide' : ''}`}>
      <span className="case-block-num">{num}</span>
      <div className="case-block-inner">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

/* ---------- The whole section ---------- */
export default function Projects() {
  const ref = useReveal();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { project, index }

  const toggle = id => setOpenId(current => (current === id ? null : id));

  // Global Escape closes the lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = e => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox(lb => ({
          ...lb,
          index: (lb.index + 1) % lb.project.screenshots.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setLightbox(lb => ({
          ...lb,
          index:
            (lb.index - 1 + lb.project.screenshots.length) %
            lb.project.screenshots.length,
        }));
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // Prevent body scroll while the lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section id="projects" className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">03 — projects</span>
        <h2 className="section-title">
          Things I've <em>actually built.</em>
        </h2>
      </div>

      <p className="section-sub">
        Click any project to unfold the full case study.
      </p>

      <div className="case-list">
        {projects.map((p, i) => {
          const isOpen = openId === p.id;
          const shots = p.screenshots || [];
          const { detail } = p;

          return (
            <article
              key={p.id}
              className={`case-card tone-${p.tint} ${isOpen ? 'is-open' : ''}`}
            >
              {/* ---------- Summary (always visible) ---------- */}
              <button
                type="button"
                className="case-summary"
                onClick={() => toggle(p.id)}
                aria-expanded={isOpen}
                aria-controls={`case-reveal-${p.id}`}
              >
                <div className="case-visual">
                  <span className="case-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {shots.length > 0 ? (
                    <Screenshot
                      name={shots[0]}
                      index={0}
                      projectName={p.name}
                      tint={p.tint}
                      onOpen={e => {
                        e.stopPropagation();
                        setLightbox({ project: p, index: 0 });
                      }}
                    />
                  ) : (
                    <div className={`case-shot case-shot-empty tone-${p.tint}`}>
                      <span className="case-shot-tag">no preview yet</span>
                      <span className="case-shot-hint">
                        add <code>{p.id}-1.png</code>
                        <br />
                        to <code>public/projects/</code>
                      </span>
                    </div>
                  )}
                </div>

                <div className="case-info">
                  <span className="case-cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="case-tag">{p.tagline}</p>
                  <p className="case-desc">{p.description}</p>

                  <ul className="case-tech">
                    {p.tech.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <span className="case-cta">
                    <span className="case-cta-text">
                      {isOpen ? 'Hide case study' : 'View case study'}
                    </span>
                    <span className="case-cta-arrow" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="14"
                        height="14"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </span>
                </div>
              </button>

              {/* ---------- Inline case study (unfolds) ---------- */}
              <div
                id={`case-reveal-${p.id}`}
                className={`case-reveal ${isOpen ? 'is-open' : ''}`}
              >
                <div className="case-reveal-inner">
                  <div className="case-content">
                    {shots.length > 0 && (
                      <div className="case-shots-wrap">
                        <span className="case-subhead">Screenshots</span>
                        <div className="case-shots">
                          {shots.map((name, si) => (
                            <Screenshot
                              key={`${name}-${si}`}
                              name={name}
                              index={si}
                              projectName={p.name}
                              tint={p.tint}
                              onOpen={() =>
                                setLightbox({ project: p, index: si })
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="case-blocks">
                      <CaseBlock num="01" title="Problem">
                        <p>{detail.problem}</p>
                      </CaseBlock>

                      <CaseBlock num="02" title="Idea">
                        <p>{detail.idea}</p>
                      </CaseBlock>

                      <CaseBlock num="03" title="Technology">
                        <ul className="case-tech">
                          {p.tech.map(t => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </CaseBlock>

                      <CaseBlock num="04" title="Key features">
                        <ul className="case-list-items">
                          {detail.features.map(f => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </CaseBlock>

                      <CaseBlock num="05" title="What I learned">
                        <ul className="case-list-items">
                          {detail.learned.map(l => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </CaseBlock>
                    </div>

                    <div className="case-links">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="case-link"
                      >
                        <GithubIcon />
                        GitHub
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="case-link case-link-live"
                        >
                          <span className="case-link-dot" />
                          Live Demo <span className="case-link-arrow">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ---------- Fullscreen lightbox ---------- */}
          {/* ---------- Fullscreen lightbox (rendered via portal so it centers on the viewport) ---------- */}
      {lightbox &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="case-lb"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.project.name} screenshot`}
          >
            <button
              className="case-lb-close"
              onClick={e => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Close preview"
            >
              <CloseIcon />
            </button>

            {lightbox.project.screenshots.length > 1 && (
              <>
                <button
                  className="case-lb-nav case-lb-prev"
                  onClick={e => {
                    e.stopPropagation();
                    setLightbox(lb => ({
                      ...lb,
                      index:
                        (lb.index - 1 + lb.project.screenshots.length) %
                        lb.project.screenshots.length,
                    }));
                  }}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft />
                </button>

                <button
                  className="case-lb-nav case-lb-next"
                  onClick={e => {
                    e.stopPropagation();
                    setLightbox(lb => ({
                      ...lb,
                      index: (lb.index + 1) % lb.project.screenshots.length,
                    }));
                  }}
                  aria-label="Next screenshot"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <figure
              className="case-lb-stage"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={`/projects/${lightbox.project.screenshots[lightbox.index]}`}
                alt={`${lightbox.project.name} screenshot ${lightbox.index + 1}`}
                className="case-lb-img"
              />
              <figcaption className="case-lb-cap">
                {lightbox.project.name} · {lightbox.index + 1} /{' '}
                {lightbox.project.screenshots.length}
              </figcaption>
            </figure>
          </div>,
          document.body
        )}
    </section>
  );
}