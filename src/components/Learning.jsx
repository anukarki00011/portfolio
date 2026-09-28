import useReveal from '../hooks/useReveal.js';

const topics = [
  { label: 'React.js', tone: 'a' },
  { label: 'Node.js', tone: 'b' },
  { label: 'Express', tone: 'c' },
  { label: 'PostgreSQL', tone: 'a' },
  { label: 'Prisma', tone: 'b' },
  { label: 'Backend Development', tone: 'c' },
];

export default function Learning() {
  const ref = useReveal();
  return (
    <section className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">04</span>
        <h2 className="section-title">
          Currently <em>learning</em>
        </h2>
      </div>

      <p className="section-sub">
        Things I'm actively getting better at — mostly by building stuff and
        breaking it first.
      </p>

      <ul className="learning-list">
        {topics.map(t => (
          <li key={t.label} className={`learning-pill tone-${t.tone}`}>
            <span className="pill-dot" />
            {t.label}
          </li>
        ))}
      </ul>
    </section>
  );
}