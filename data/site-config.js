/**
 * CLiMeM 2026 — Single source of content. Edit this file to update the site.
 */
const SITE_CONFIG = {
  siteName: 'CLiMeM',
  siteTagline: 'Continual Learning in Medical Multimodal-Vision',
  year: '2026',
  miccaiYear: '2026',

  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Program', href: 'program.html' },
    { label: 'Organizers', href: 'organizers.html' },
    { label: 'Submission', href: 'submission.html' },
    { label: 'Awards', href: 'awards.html' },
    { label: 'Venue', href: 'venue.html' },
    { label: 'News', href: 'news.html' },
    { label: 'FAQ & Contact', href: 'faq-contact.html' }
  ],

  hero: {
    title: 'CLiMeM',
    subtitle: 'Continual Learning in Medical Multimodal-Vision',
    description: 'First edition workshop at MICCAI 2026. Bridging continual learning and medical multimodal vision for robust, adaptable clinical AI.',
    ctaPrimary: { label: 'Submit a paper', href: 'submission.html' },
    ctaSecondary: { label: 'View program', href: 'program.html' }
  },

  importantDates: [
    { label: 'Paper submission deadline', date: 'TBA', tz: 'AOE' },
    { label: 'Author notification', date: 'TBA', tz: 'AOE' },
    { label: 'Camera-ready deadline', date: 'TBA', tz: 'AOE' },
    { label: 'Workshop date', date: 'TBA', tz: 'MICCAI 2026' }
  ],

  quickLinks: [
    { label: 'Submission guidelines', href: 'submission.html' },
    { label: 'Program & schedule', href: 'program.html' },
    { label: 'Organizers', href: 'organizers.html' },
    { label: 'MICCAI 2026', href: 'venue.html' }
  ],

  about: {
    theme: 'Continual learning in medical multimodal-vision aims to develop AI systems that learn incrementally from evolving data and multiple modalities (imaging, text, signals) without forgetting, enabling sustainable deployment in clinical settings.',
    motivation: 'Clinical environments produce non-stationary data streams and new modalities over time. Models that retrain from scratch are costly and risk forgetting; continual and multimodal learning are key to scalable, reliable medical AI.',
    topics: [
      'Continual / lifelong learning for medical imaging',
      'Multimodal fusion (vision, text, EHR, signals)',
      'Catastrophic forgetting and stability–plasticity trade-offs',
      'Domain shift and distribution shift in clinical data',
      'Incremental learning with new modalities or tasks',
      'Benchmarks and evaluation for continual medical vision',
      'Federated and privacy-preserving continual learning',
      'Real-world deployment and regulatory considerations'
    ],
    keywords: 'Continual learning, lifelong learning, medical imaging, multimodal learning, catastrophic forgetting, domain adaptation, MICCAI, medical AI'
  },

  program: {
    intro: 'Tentative half-day schedule. Invited speakers and exact times will be confirmed closer to the workshop.',
    timezone: 'All times local (MICCAI 2026).',
    schedule: [
      { time: '09:00 – 09:15', title: 'Opening & welcome', type: 'session' },
      { time: '09:15 – 10:00', title: 'Invited talk 1', speaker: 'TBA', type: 'invited' },
      { time: '10:00 – 10:30', title: 'Coffee break', type: 'break' },
      { time: '10:30 – 11:15', title: 'Contributed papers session 1', type: 'session' },
      { time: '11:15 – 12:00', title: 'Invited talk 2', speaker: 'TBA', type: 'invited' },
      { time: '12:00 – 12:30', title: 'Contributed papers session 2', type: 'session' },
      { time: '12:30 – 13:00', title: 'Awards & closing', type: 'session' }
    ],
    invitedSpeakers: [
      { name: 'Invited speaker 1', affiliation: 'TBA' },
      { name: 'Invited speaker 2', affiliation: 'TBA' }
    ]
  },

  organizers: [
    { name: 'Organizer 1', affiliation: 'Institution, Country', role: 'Organizer' },
    { name: 'Organizer 2', affiliation: 'Institution, Country', role: 'Organizer' },
    { name: 'Organizer 3', affiliation: 'Institution, Country', role: 'Organizer' }
  ],

  submission: {
    intro: 'We invite short and full papers on continual learning, multimodal learning, and medical vision. Submissions will be peer-reviewed.',
    guidelines: [
      'Format: MICCAI LNCS style. Short papers: 4–6 pages; full papers: 8–12 pages (excluding references).',
      'Double-blind: anonymize author names and affiliations.',
      'Submit via the workshop submission system (link TBA).',
      'Accepted papers will be included in the workshop proceedings (publisher TBA).'
    ],
    reviewProcess: 'Each submission will receive at least two reviews. Decisions are made by the organizing committee based on originality, relevance, and clarity. We aim for constructive feedback to support authors.',
    proceedings: 'Accepted papers are planned to be published in the MICCAI 2026 Workshop Proceedings (details to be confirmed with MICCAI).'
  },

  awards: [
    { name: 'Best Paper Award', description: 'Recognizes the best contributed paper for novelty, impact, and clarity.' },
    { name: 'Best Presentation Award', description: 'Recognizes the best oral presentation at the workshop.' }
  ],

  venue: {
    title: 'MICCAI 2026',
    description: 'CLiMeM will be held in conjunction with MICCAI 2026. Exact date, room, and registration details will be announced when the main conference program is finalized.',
    linkLabel: 'MICCAI 2026 website',
    linkHref: 'https://miccai2026.org/',
    placeholders: true
  },

  faq: [
    { q: 'What is the workshop format?', a: 'Half-day workshop with invited talks and contributed oral/poster presentations. Exact format will follow MICCAI 2026 workshop guidelines.' },
    { q: 'Do I need to register for MICCAI to attend?', a: 'Yes. Workshop attendance requires registration for MICCAI 2026.' },
    { q: 'Will workshop papers be published?', a: 'We plan to include accepted papers in the MICCAI 2026 Workshop Proceedings. Final publication venue will be confirmed.' },
    { q: 'Can I submit work also submitted elsewhere?', a: 'Submissions must be original and not simultaneously under review at another venue. Dual submission policies follow MICCAI guidelines.' }
  ],

  contact: {
    email: 'climem-workshop@example.org',
    note: 'For questions about the workshop, submission, or program, please contact the organizers.'
  },

  /** Preview of latest news for homepage (full list in data/news.json) */
  newsPreview: [
    { date: '2026-02-01', title: 'Website launched', body: 'Workshop website is live. Check back for program, submission guidelines, and speaker updates.' },
    { date: '2026-01-15', title: 'Workshop announced', body: 'First edition of CLiMeM will be held at MICCAI 2026. Call for papers and important dates to follow.' }
  ]
};
