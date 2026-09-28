import useReveal from '../hooks/useReveal.js';
import { exploring } from '../data/content.js';

export default function Exploring() {
  const ref = useReveal();
  return (
    <section className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">05 — lately</span>
        <h2 className="section-title">
          Things I'm <em>figuring out.</em>
        </h2>
      </div>

      <ul className="explore-list">
        {exploring.map((item, i) => (
          <li key={item} className="explore-item">
            <span className="explore-marker">✦</span>
            <span className="explore-text">{item}</span>
            <span className="explore-num">
              {String(i + 1).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}