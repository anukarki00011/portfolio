import useReveal from '../hooks/useReveal.js';
import { journey } from '../data/content.js';

const blocks = [
  {
    num: '01',
    label: 'Who I am',
    body: 'BCA graduate focused on software and mobile application development.',
  },
  {
    num: '02',
    label: 'What I enjoy',
    body: 'Building interfaces, solving problems, learning new technologies, and turning ideas into usable products.',
  },
  {
    num: '03',
    label: 'Currently learning',
    body: 'Flutter architecture, backend development, APIs, databases, and modern product development.',
  },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">01 — about</span>
        <h2 className="section-title">
          A short look <em>inside the desk.</em>
        </h2>
      </div>

      <div className="about-dash">
        {blocks.map(b => (
          <article key={b.num} className="about-card">
            <span className="about-num">{b.num}</span>
            <h3 className="about-label">{b.label}</h3>
            <p className="about-body">{b.body}</p>
          </article>
        ))}
      </div>

      <div className="journey">
        <span className="journey-title">the path so far</span>
        <ol className="journey-list">
          {journey.map((j, i) => (
            <li key={j.label} className={i === journey.length - 1 ? 'is-future' : ''}>
              <span className="journey-dot" />
              <span className="journey-label">{j.label}</span>
              <span className="journey-year">{j.year}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}