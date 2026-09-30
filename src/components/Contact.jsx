

import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 🔻 Replace with YOUR form ID from formspree.io
const FORMSPREE_ID = 'xoevpolp';
const ENDPOINT = `https://formspree.io/f/xoevpolp`;

/* ---------- Icons (16px, currentColor) ---------- */
const MailIcon = () => (
  <svg
    className="cl-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7.5 9 5.5 9-5.5" />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="cl-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="cl-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

export default function Contact() {
  const ref = useReveal();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = field => e => {
    setValues(v => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: null }));
    if (status !== 'idle') setStatus('idle');
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';

    if (!values.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(values.email.trim()))
      next.email = 'That email doesn\u2019t look right.';

    if (!values.message.trim()) next.message = 'Please write a message.';
    else if (values.message.trim().length < 5)
      next.message = 'A little more detail, please.';

    return next;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = Object.keys(found)[0];
      const el = e.currentTarget.elements[first];
      if (el) el.focus();
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _replyto: values.email.trim(),
          _subject: `Portfolio — message from ${values.name.trim()}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setValues({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section container reveal" ref={ref}>
      <div className="section-head">
        <span className="section-num">07 — contact</span>
        <h2 className="section-title">
          Have an idea <em>worth building?</em>
        </h2>
      </div>

      <p className="section-sub">
        I'm always interested in learning, building, and meeting people working
        on interesting things.
      </p>

      <div className="contact-grid">
        <div className="contact-left">
          <div className="avail">
            <span className="avail-dot" />
            <span>Open to opportunities</span>
          </div>

          <div className="contact-links">
            <a href="mailto:anukarki00011@gmail.com">
              <span className="cl-icon-wrap">
                <MailIcon />
              </span>
              <span className="cl-value">anukarki00011@gmail.com</span>
              <span className="cl-arrow">↗</span>
            </a>

            <a
              href="https://github.com/anukarki00011"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cl-icon-wrap">
                <GithubIcon />
              </span>
              <span className="cl-value">@anukarki00011</span>
              <span className="cl-arrow">↗</span>
            </a>

            <a
              href="www.linkedin.com/in/anu-karki000011"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cl-icon-wrap">
                <LinkedinIcon />
              </span>
              <span className="cl-value">in/anukarki</span>
              <span className="cl-arrow">↗</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className={`form-field ${errors.name ? 'has-error' : ''}`}>
            Name
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={update('name')}
              placeholder="Your name"
              autoComplete="name"
              disabled={status === 'sending'}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </label>

          <label className={`form-field ${errors.email ? 'has-error' : ''}`}>
            Email
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={update('email')}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={status === 'sending'}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </label>

          <label className={`form-field ${errors.message ? 'has-error' : ''}`}>
            Message
            <textarea
              name="message"
              rows="4"
              value={values.message}
              onChange={update('message')}
              placeholder="What's on your mind?"
              disabled={status === 'sending'}
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                Sending<span className="dots" />
              </>
            ) : (
              <>
                Email me <span className="arrow">→</span>
              </>
            )}
          </button>

          {status === 'success' && (
            <span className="form-success">
              Message sent — I'll get back to you soon ✦
            </span>
          )}

          {status === 'error' && (
            <span className="form-error form-error-block">
              Something went wrong. Try again, or email me at
              anukarki00011@gmail.com.
            </span>
          )}
        </form>
      </div>
    </section>
  );
}