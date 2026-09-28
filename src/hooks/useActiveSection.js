import { useEffect, useState } from 'react';

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}