import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { experience } from '../data/content.js';

export default function Experience() {
  const ref = useReveal();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="experience" className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">04 — experience</span>
        <h2 className="section-title">
          Places I've <em>worked.</em>
        </h2>
      </div>

      <div className="exp">
        {experience.map((e, i) => {
          const isOpen = openIdx === i;
          return (
            <article
              key={e.role}
              className={`exp-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="exp-head"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="exp-idx">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="exp-meta">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-company">
                    {e.company} · {e.period}
                  </span>
                </span>
                <span className="exp-toggle" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div className="exp-body">
                <p className="exp-summary">{e.summary}</p>
                <ul className="exp-list">
                  {e.details.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <ul className="exp-stack">
                  {e.stack.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}