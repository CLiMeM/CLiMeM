/**
 * CLiMeM 2026 — Workshop content. Generated from src/content/workshop.ts (run: npm run build)
 */
(function () {
  'use strict';
  var workshop = {
    workshopName: 'CLiMeM',
    subtitle: 'Continual Learning in Medical Multimodal-Vision',
    year: '2026',
    edition: 'First edition',
    tagline: 'Continual Learning in Medical Multimodal-Vision',
    description: {
      short: 'First edition workshop at MICCAI 2026. Bridging continual learning and medical multimodal vision for robust, adaptable clinical AI.',
      long: 'Continual learning in medical multimodal-vision aims to develop AI systems that learn incrementally from evolving data and multiple modalities (imaging, text, signals) without forgetting, enabling sustainable deployment in clinical settings. Clinical environments produce non-stationary data streams and new modalities over time. Models that retrain from scratch are costly and risk forgetting; continual and multimodal learning are key to scalable, reliable medical AI.',
      theme: 'Continual learning in medical multimodal-vision aims to develop AI systems that learn incrementally from evolving data and multiple modalities (imaging, text, signals) without forgetting, enabling sustainable deployment in clinical settings.',
      motivation: 'Clinical environments produce non-stationary data streams and new modalities over time. Models that retrain from scratch are costly and risk forgetting; continual and multimodal learning are key to scalable, reliable medical AI.',
      keywords: 'Continual learning, lifelong learning, medical imaging, multimodal learning, catastrophic forgetting, domain adaptation, MICCAI, medical AI'
    },
    topics: [
      { category: 'Continual & lifelong learning', items: ['Continual / lifelong learning for medical imaging', 'Catastrophic forgetting and stability–plasticity trade-offs', 'Incremental learning with new modalities or tasks'] },
      { category: 'Multimodal & deployment', items: ['Multimodal fusion (vision, text, EHR, signals)', 'Benchmarks and evaluation for continual medical vision', 'Federated and privacy-preserving continual learning', 'Real-world deployment and regulatory considerations'] },
      { category: 'Robustness & adaptation', items: ['Domain shift and distribution shift in clinical data'] }
    ],
    organizers: [
      { name: 'Organizer 1', title: 'Organizer', affiliation: 'Institution', country: 'Country' },
      { name: 'Organizer 2', title: 'Organizer', affiliation: 'Institution', country: 'Country' },
      { name: 'Organizer 3', title: 'Organizer', affiliation: 'Institution', country: 'Country' }
    ],
    importantDates: [
      { label: 'Paper submission deadline', date: 'TBA', status: 'tbd' },
      { label: 'Author notification', date: 'TBA', status: 'tbd' },
      { label: 'Camera-ready deadline', date: 'TBA', status: 'tbd' },
      { label: 'Workshop date', date: 'TBA', status: 'tbd' }
    ],
    news: [
      { title: 'Workshop announced', date: '2026-01-15', blurb: 'First edition of CLiMeM will be held at MICCAI 2026. Call for papers and important dates to follow.', pinned: true },
      { title: 'Website launched', date: '2026-02-01', blurb: 'Workshop website is live. Check back for program, submission guidelines, and speaker updates.', pinned: false }
    ],
    tentativeSchedule: [
      { time: '09:00 – 09:15', title: 'Opening & welcome', type: 'session' },
      { time: '09:15 – 10:00', title: 'Invited talk 1', speaker: 'TBA', type: 'invited' },
      { time: '10:00 – 10:30', title: 'Coffee break', type: 'break' },
      { time: '10:30 – 11:15', title: 'Contributed papers session 1', type: 'session' },
      { time: '11:15 – 12:00', title: 'Invited talk 2', speaker: 'TBA', type: 'invited' },
      { time: '12:00 – 12:30', title: 'Contributed papers session 2', type: 'session' },
      { time: '12:30 – 13:00', title: 'Awards & closing', type: 'session' }
    ],
    programIntro: 'Tentative half-day schedule. Invited speakers and exact times will be confirmed closer to the workshop.',
    programTimezone: 'All times local (MICCAI 2026).',
    invitedSpeakers: [
      { name: 'Invited speaker 1', affiliation: 'TBA' },
      { name: 'Invited speaker 2', affiliation: 'TBA' }
    ],
    submissionGuidelines: {
      bullets: [
        'Format: MICCAI LNCS style. Short papers: 4–6 pages; full papers: 8–12 pages (excluding references).',
        'Double-blind: anonymize author names and affiliations.',
        'Submit via the workshop submission system (link TBA).',
        'Accepted papers will be included in the workshop proceedings (publisher TBA).'
      ],
      formattingRulesPlaceholders: [
        'Use the official LNCS template.',
        'Do not include author names in the initial submission.'
      ]
    },
    submissionIntro: 'We invite short and full papers on continual learning, multimodal learning, and medical vision. Submissions will be peer-reviewed.',
    callForPapers: {
      title: 'Call for Papers',
      intro: [
        'The CLiMeM Workshop on Continual Learning in Medical Multimodal-Vision, held in conjunction with MICCAI 2026, aims to provide a dedicated forum for discussing methodological advances and practical challenges in developing adaptive medical AI systems capable of learning continuously from evolving clinical environments.',
        'Clinical practice is inherently dynamic. Patient populations shift, imaging protocols evolve, hardware systems change, and diagnostic workflows continuously adapt. In contrast, most medical AI models are trained under static assumptions and remain fixed after deployment, leading to performance degradation under distribution shifts and changing clinical conditions.',
        'CLiMeM focuses on continual, adaptive, and clinician-integrated learning paradigms that enable medical AI systems to evolve safely over time while maintaining robustness, reliability, and clinical relevance.',
        'We invite original research contributions addressing continual learning, multimodal medical AI, and adaptive clinical intelligence. Submissions may include methodological innovations, system designs, benchmark studies, or clinical deployment experiences.'
      ],
      topicsLead: 'Topics include, but are not limited to:',
      topicGroups: [
        { title: '1. Continual and Lifelong Learning', items: ['Lifelong, continual, incremental, and online learning methods', 'Sequential and multitask learning in medical settings', 'Benchmark datasets, evaluation protocols, and metrics', 'Catastrophic forgetting mitigation strategies'] },
        { title: '2. Clinician-in-the-Loop Learning', items: ['Human–AI collaboration and interactive supervision', 'Reinforcement learning for clinical decision support', 'Preference learning from clinician feedback', 'Implicit feedback signals (e.g., gaze, interaction logs)', 'Annotation efficiency and active learning', 'Trustworthy and interpretable clinical AI systems'] },
        { title: '3. Adaptive and Context-Aware Inference', items: ['Test-time adaptation and online domain generalization', 'Memory- and retrieval-augmented models', 'Context-aware and causal modeling', 'Resource-constrained and real-time adaptation'] },
        { title: '4. Clinical Workflow Integration and Deployment', items: ['Integration with PACS, EHR, RIS, and imaging workstations', 'Deployment using platforms such as MONAI Label, OHIF, and 3D Slicer', 'Continual learning infrastructure and model governance', 'User-centred clinical system design'] }
      ]
    },
    reviewProcess: 'Each submission will receive at least two reviews. Decisions are made by the organizing committee based on originality, relevance, and clarity. We aim for constructive feedback to support authors.',
    proceedings: 'Accepted papers are planned to be published in the MICCAI 2026 Workshop Proceedings (details to be confirmed with MICCAI).',
    awards: [
      { name: 'Best Paper Award', description: 'Recognizes the best contributed paper for novelty, impact, and clarity.' },
      { name: 'Best Presentation Award', description: 'Recognizes the best oral presentation at the workshop.' }
    ],
    venue: {
      title: 'MICCAI 2026',
      description: 'CLiMeM will be held in conjunction with MICCAI 2026. Exact date, room, and registration details will be announced when the main conference program is finalized.',
      linkLabel: 'MICCAI 2026 website',
      linkHref: 'https://conferences.miccai.org/2026/en/default.asp'
    },
    faq: [
      { q: 'What is the workshop format?', a: 'Half-day workshop with invited talks and contributed oral/poster presentations. Exact format will follow MICCAI 2026 workshop guidelines.' },
      { q: 'Do I need to register for MICCAI to attend?', a: 'Yes. Workshop attendance requires registration for MICCAI 2026.' },
      { q: 'Will workshop papers be published?', a: 'We plan to include accepted papers in the MICCAI 2026 Workshop Proceedings. Final publication venue will be confirmed.' },
      { q: 'Can I submit work also submitted elsewhere?', a: 'Submissions must be original and not simultaneously under review at another venue. Dual submission policies follow MICCAI guidelines.' }
    ],
    contact: {
      email: 'climemworkshop@gmail.com',
      note: 'For questions about the workshop, submission, or program, please contact the organizers.'
    },
    nav: [
      { label: 'Home', href: 'index.html' },
      { label: 'Call for Paper', href: 'call-for-paper.html' },
      { label: 'Submission Guidelines', href: 'submission-guidelines.html' },
      { label: 'Workshop Program', href: 'workshop-program.html' },
      { label: 'Organizers', href: 'organizers.html' },
      { label: 'Awards', href: 'awards.html' },
      { label: 'Venue', href: 'venue.html' },
      { label: 'FAQ & Contact', href: 'faq-contact.html' }
    ],
    quickLinks: [
      { label: 'Submission guidelines', href: 'submission-guidelines.html' },
      { label: 'Program & schedule', href: 'workshop-program.html' },
      { label: 'Organizers', href: 'organizers.html' },
      { label: 'MICCAI 2026', href: 'venue.html' }
    ],
    hero: {
      title: 'CLiMeM',
      subtitle: 'Continual Learning in Medical Multimodal-Vision',
      description: 'First edition workshop at MICCAI 2026. Bridging continual learning and medical multimodal vision for robust, adaptable clinical AI.',
      ctaPrimary: { label: 'Submit a paper', href: 'call-for-paper.html' },
      ctaSecondary: { label: 'View program', href: 'workshop-program.html' }
    }
  };
  if (typeof window !== 'undefined') window.workshop = workshop;
})();
