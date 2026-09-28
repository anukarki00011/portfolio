import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//  Replace with YOUR form ID from formspree.io
const FORMSPREE_ID = 'xoevpolp';
const ENDPOINT = `https://formspree.io/f/xoevpolp`;

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
              <span className="cl-label">Email</span>
              <span className="cl-value">anukarki00011@gmail.com</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="https://github.com/anukarki00011" target="_blank" rel="noreferrer">
              <span className="cl-label">GitHub</span>
              <span className="cl-value">@anukarki00011</span>
              <span className="cl-arrow">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anu-karki000011"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cl-label">LinkedIn</span>
              <span className="cl-value">in/anu-karki000011</span>
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
              Message sent — I'll get back to you soon...
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