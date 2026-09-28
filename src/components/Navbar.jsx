import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection.js';

const links = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map(l => l.id));

  return (
    <header className="nav-wrap">
      <div className="nav container">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          anu<span> karki</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a
              key={l.id}
              href={l.href}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
              {active === l.id && <span className="nav-dot" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
          <button
            className="menu-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}