export const skills = [
  {
    id: 'mobile',
    label: 'Mobile',
    tone: 'lavender',
    items: [
      { name: 'Flutter', hint: 'Cross-platform UI toolkit — my daily driver.' },
      { name: 'Dart', hint: 'The language that makes Flutter feel good.' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    tone: 'peach',
    items: [
      { name: 'React.js', hint: 'Component thinking, hooks, and small state.' },
      { name: 'JavaScript', hint: 'ES6+, async patterns, the browser.' },
      { name: 'HTML', hint: 'Semantics matter more than people think.' },
      { name: 'CSS', hint: 'Layout, motion, and type as craft.' },
      { name: 'Tailwind', hint: 'Fast iteration when styling gets heavy.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    tone: 'blue',
    items: [
      { name: 'Node.js', hint: 'JS on the server — my current learning focus.' },
      { name: 'Express.js', hint: 'Small, honest HTTP framework.' },
      { name: 'REST APIs', hint: 'Designing endpoints people actually enjoy using.' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    tone: 'green',
    items: [
      { name: 'PostgreSQL', hint: 'Relational data with real constraints.' },
      { name: 'Prisma', hint: 'Type-safe queries that read like English.' },
      { name: 'Firebase', hint: 'Realtime sync and auth without the ops.' },
    ],
  },
];

export const projects = [
  {
    id: 'connectsphere',
    name: 'ConnectSphere',
    category: 'Mobile · Social',
    tagline: 'A friend-making app that matches on personality, not photos.',
    description:
      'Real-time chat, personality-based matching, and a small onboarding flow that actually feels human. Built the Flutter client, the Node/Express backend, and the Socket.IO layer.',
    tech: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO'],
    github: 'https://github.com/anukarki00011/ConnectSphere',
    live: null,
    screenshots: [
      'connectsphere.jpeg',
      'connectsphere-2.png',
      'connectsphere-3.png',
    ],
    layout: 'feature',
    tint: 'lavender',
    detail: {
      problem:
        'Friend-making apps reward looks over personality, and conversations die on the first screen.',
      idea:
        'Match on traits and interests first. Show personality prompts instead of just photos, and give people something concrete to talk about.',
      features: [
        'Personality quiz that shapes matching',
        'Real-time chat with typing indicators',
        'Interest-based discovery feed',
        'Auth, profiles, and reporting',
      ],
      learned: [
        'Designing DB schemas around real relationships',
        'Making Socket.IO scale past a single room',
        'Small UX decisions that changed retention',
      ],
    },
  },
  {
    id: 'spendwise',
    name: 'SpendWise',
    category: 'Mobile · Productivity',
    tagline: 'A quiet expense tracker that shows you where money actually goes.',
    description:
      'Offline-first Flutter app with Firebase sync, monthly insights, and a category breakdown you can actually read at a glance.',
    tech: ['Flutter', 'Firebase', 'Firestore', 'Provider'],
    github: 'https://github.com/anukarki00011/SpendWise',
    live: null,
    screenshots: ['spendwise.png', 'spendwise-2.png'],
    layout: 'split',
    tint: 'blue',
    detail: {
      problem:
        "Most expense apps bury the useful insight under five taps and a chart you can't interpret.",
      idea:
        'One screen. What you spent, on what, and how it compares to last month. Everything else is secondary.',
      features: [
        'Offline-first with Firestore sync',
        'Category insights & monthly view',
        'Quick-add with a custom numpad',
        'Provider-driven state',
      ],
      learned: [
        'Handling offline/online state cleanly',
        'Charting without making it a chart-app',
        'Designing for one-handed use',
      ],
    },
  },
];

export const experience = [
  {
    role: 'IT Intern',
    company: 'Dwaar X Pvt. Ltd.',
    period: 'Dec 2025 — Feb 2026',
    stack: ['Testing', 'Small features', 'Git', 'Frontend Development'],
    summary: 'Learned how production workflows actually work.',
    details: [
      'Assisted with QA and manual testing on mobile releases.',
      'Shipped small feature work under code review.',
      'Learned Git workflow and how teams actually collaborate.',
    ],
  },
];

export const exploring = [
  'Better Flutter architecture — state, layers, and clean boundaries',
  "Backend integration that doesn't feel bolted on",
  'Building products instead of just projects',
  'Learning how good UX actually works',
  'Preparing for the next chapter',
];

export const journey = [
  { label: 'BCA', year: '2022 — 2026' },
  { label: 'Internship', year: '2025' },
  { label: 'First projects', year: '2023 — 2024' },
  { label: 'Mobile development', year: '2025 — now' },
  { label: "What's next?", year: '···' },
];