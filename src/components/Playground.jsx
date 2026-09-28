import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

export default function Playground() {
  const ref = useReveal();
  const [view, setView] = useState('home');     // home | stats
  const [mode, setMode] = useState('developer'); // developer | designer
  const [miniTheme, setMiniTheme] = useState('light');

  const bars = [40, 62, 35, 78, 52, 88, 46];
  const tasks = [
    { label: 'Ship ConnectSphere v1', done: true },
    { label: 'Wire up auth API', done: true },
    { label: 'Refactor state layer', done: false },
    { label: 'Polish empty states', done: false },
  ];

  return (
    <section className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">06 — playground</span>
        <h2 className="section-title">
          A small <em>toy</em> to poke at.
        </h2>
      </div>

      <p className="section-sub">
        Toggle the mini app — the same interactions I think about when I build
        real ones.
      </p>

      <div className="playground">
        <div className="pg-controls">
          <div className="pg-group">
            <span className="pg-label">view</span>
            <div className="pg-toggle">
              {['home', 'stats'].map(v => (
                <button
                  key={v}
                  className={view === v ? 'on' : ''}
                  onClick={() => setView(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="pg-group">
            <span className="pg-label">mode</span>
            <div className="pg-toggle">
              {['developer', 'designer'].map(m => (
                <button
                  key={m}
                  className={mode === m ? 'on' : ''}
                  onClick={() => setMode(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="pg-group">
            <span className="pg-label">theme</span>
            <div className="pg-toggle">
              {['light', 'dark'].map(t => (
                <button
                  key={t}
                  className={miniTheme === t ? 'on' : ''}
                  onClick={() => setMiniTheme(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`mini phone-live mini-${miniTheme} mode-${mode}`}>
          <div className="mini-notch" />
          <div className="mini-screen">
            <div className="mini-header">
              <span className="mini-title">
                {view === 'home' ? 'today' : 'this week'}
              </span>
              <span className="mini-badge">
                {mode === 'developer' ? '</>' : '✦'}
              </span>
            </div>

            {view === 'home' ? (
              <ul className="mini-tasks">
                {tasks.map(t => (
                  <li key={t.label} className={t.done ? 'done' : ''}>
                    <span className="mini-check">{t.done ? '✓' : ''}</span>
                    <span className="mini-task-label">{t.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <div className="mini-stat-head">
                  <span className="mini-stat-value">24</span>
                  <span className="mini-stat-sub">tasks shipped</span>
                </div>
                <div className="mini-chart">
                  {bars.map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mini-legend">
                  <span className="legend-dot" /> momentum
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}