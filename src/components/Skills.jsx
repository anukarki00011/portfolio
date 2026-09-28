import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { skills } from '../data/content.js';

export default function Skills() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">02 — skills</span>
        <h2 className="section-title">
          Tools on <em>the desk.</em>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map(group => (
          <div key={group.id} className={`skill-group tone-${group.tone}`}>
            <div className="skill-head">
              <span className="skill-dot" />
              <h3>{group.label}</h3>
            </div>
            <ul className="skill-list">
              {group.items.map(item => (
                <li
                  key={item.name}
                  className="skill-item"
                  onMouseEnter={() => setActive(item.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(item.name)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                >
                  <span className="skill-name">{item.name}</span>
                  <span
                    className={`skill-hint ${active === item.name ? 'show' : ''}`}
                  >
                    {item.hint}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}