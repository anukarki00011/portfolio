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
    github: 'https://github.com/anukarki00011/connectsphere',
    live: null,
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
    github: 'https://github.com/anukarki00011/spendwise',
    live: null,
    layout: 'split',
    tint: 'blue',
    detail: {
      problem:
        'Most expense apps bury the useful insight under five taps and a chart you can\'t interpret.',
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
  // {
  //   id: 'travelrec',
  //   name: 'Travel Destination Recommender',
  //   category: 'Web · ML',
  //   tagline: 'Picks destinations based on vibe, budget, and season.',
  //   description:
  //     'A small recommendation engine wrapped in a clean web UI. Users pick constraints, the model suggests places and explains why.',
  //   tech: ['Python', 'Flask', 'React', 'scikit-learn'],
  //   github: 'https://github.com/anukarki',
  //   live: null,
  //   layout: 'row',
  //   tint: 'peach',
  //   detail: {
  //     problem:
  //       '"Where should I go?" is a hard question with too many variables and no good default answer.',
  //     idea:
  //       'Turn it into a short questionnaire, then explain each recommendation instead of just listing it.',
  //     features: [
  //       'Constraint-driven recommendations',
  //       'Explainable output ("why this place")',
  //       'Filterable results by season & budget',
  //     ],
  //     learned: [
  //       'Feature engineering from messy data',
  //       'Explaining ML output to non-technical users',
  //     ],
  //   },
  // },
  // {
  //   id: 'stockpred',
  //   name: 'Stock Price Prediction',
  //   category: 'ML · Experiment',
  //   tagline: 'A small, honest LSTM experiment on time-series data.',
  //   description:
  //     'Weekend project exploring how far simple sequence models get on stock data — and why they don\'t go further.',
  //   tech: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
  //   github: 'https://github.com/anukarki',
  //   live: null,
  //   layout: 'row',
  //   tint: 'green',
  //   detail: {
  //     problem:
  //       'Everyone says "predict the stock market." It is a good way to learn time-series, and a good way to learn humility.',
  //     idea: 'Train a simple LSTM, then write down honestly where it fails and why.',
  //     features: [
  //       'Data pipeline for OHLCV data',
  //       'LSTM model with walk-forward validation',
  //       'Baseline comparison (naive, moving average)',
  //     ],
  //     learned: [
  //       'Why time-series validation is different',
  //       'Overfitting, and how quickly it happens',
  //     ],
  //   },
  // },
  // {
  //   id: 'movietix',
  //   name: 'Movie Ticket Booking System',
  //   category: 'Web · Full-stack',
  //   tagline: 'Seat selection, bookings, and admin view — built end-to-end.',
  //   description:
  //     'Full-stack booking flow with an interactive seat map, session management, and an admin dashboard for showtimes.',
  //   tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  //   github: 'https://github.com/anukarki',
  //   live: null,
  //   layout: 'row',
  //   tint: 'lavender',
  //   detail: {
  //     problem: 'Seat booking is deceptively hard — concurrency, state, and UX all collide.',
  //     idea: 'Build the whole thing end-to-end, no shortcuts, and design the seat map like a real product.',
  //     features: [
  //       'Interactive seat selection',
  //       'Session & hold logic',
  //       'Admin panel for showtimes',
  //     ],
  //     learned: [
  //       'Preventing double-bookings at the DB level',
  //       'Modelling session/time state cleanly',
  //     ],
  //   },
  // },
];

export const experience = [
  // {
  //   role: 'Junior App Developer',
  //   company: 'Dwaar X Pvt. Ltd.',
  //   period: '2024 — Present',
  //   stack: ['Flutter', 'REST APIs', 'Dart'],
  //   summary: 'Shipping mobile features from design to release.',
  //   details: [
  //     'Built and maintained Flutter screens used in production.',
  //     'Integrated REST APIs and handled real-world error states.',
  //     'Worked with designers and backend to ship features end-to-end.',
  //     'Wrote small pieces of internal tooling to speed up releases.',
  //   ],
  // },
  {
    role: 'IT Intern',
    company: 'Dwaar X Pvt. Ltd.',
    period: 'Dec 2025 — Feb 2026',
    stack: ['Testing', 'Small features', 'Git' , 'Frontend Development'],
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
  'Backend integration that doesn\'t feel bolted on',
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