import { useEffect, useState } from 'react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [note, setNote] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setNote(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="hero-label">
          <span className="pulse" />
          currently building things with Flutter
        </div>

        <h1 className="hero-title">
          I turn ideas
          <br />
          into things you can <em>tap</em>.
        </h1>

        <p className="hero-intro">
          I'm Anu Karki — a BCA graduate from Pokhara University, focused on mobile
          application development, thoughtful interfaces, and building products
          that are actually useful.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View my work <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's talk
          </a>
        </div>

        <ul className="hero-chips">
          <li>
            <span className="chip-key">building</span>
            <span className="chip-val">mobile_apps</span>
          </li>
          <li>
            <span className="chip-key">location</span>
            <span className="chip-val">Nepal</span>
          </li>
          <li>
            <span className="chip-key">status</span>
            <span className="chip-val chip-live">available_for_opportunities</span>
          </li>
        </ul>
      </div>

      <div className="hero-device-wrap">
        <div className="hero-device" aria-hidden="true">
          <div className="hero-device-notch" />

          <div className="hero-device-screen">
            <div className="hero-device-status">
              <span>9:41</span>
              <span className="hero-device-status-icons">
                <span className="bar" />
                <span className="bar" />
                <span className="battery" />
              </span>
            </div>

            <div className="hero-device-photo-ring">
              <div className="hero-device-photo-inner">
                {!imgError ? (
                  <img
                    src="/anu.jpeg"
                    alt="Anu Karki"
                    className="hero-device-photo"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero-device-fallback">
                    <span className="hero-device-initials">AK</span>
                    <span className="hero-device-hint">
                      drop photo at
                      <br />
                      <code>public/anu.jpg</code>
                    </span>
                  </div>
                )}
              </div>
              <span className="hero-device-story" />
            </div>

            <div className="hero-device-name">
              <span className="hero-device-name-text">anu karki</span>
              <span className="hero-device-verified">✦</span>
            </div>

            <div className="hero-device-role">
              <span className="hero-device-dot" />
              mobile app developer
            </div>

            <ul className="hero-device-tags">
              <li>Flutter</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>

            <div className={`hero-device-note ${note ? 'show' : ''}`}>
              <span className="hero-device-note-dot" />
              <span>hi 👋 let's build something</span>
            </div>

            <div className="hero-device-nav">
              <span className="active" />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <span className="hero-chip hero-chip-flutter">Flutter</span>
        <span className="hero-chip hero-chip-react">React</span>
        <span className="hero-chip hero-chip-node">Node.js</span>
        <span className="hero-chip hero-chip-pg">PostgreSQL</span>
      </div>
    </section>
  );
}
