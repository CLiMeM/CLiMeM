/**
 * CLiMeM 2026 — Single source of content. No hardcoded text in pages; all content comes from here.
 */

export type DateStatus = 'upcoming' | 'announced' | 'tbd';

export interface NavItem {
  label: string;
  href: string;
}

export interface ImportantDate {
  label: string;
  date: string;
  status: DateStatus;
}

export interface TopicCategory {
  category: string;
  items: string[];
}

export interface Organizer {
  name: string;
  title: string;
  affiliation: string;
  country: string;
  website?: string;
  /** Optional photo filename (e.g. photo-Nourhan.png); place in images/ folder */
  photo?: string;
}

export interface NewsItem {
  title: string;
  date: string;
  blurb: string;
  pinned: boolean;
}

export interface ScheduleRow {
  time: string;
  title: string;
  speaker?: string;
  duration?: string;
  type?: 'session' | 'invited' | 'break' | 'opening';
}

export interface SubmissionGuidelines {
  bullets: string[];
  formattingRulesPlaceholders: string[];
}

export interface SubmissionGuidelinesSection {
  title: string;
  paragraphs: string[];
}

export interface CameraReadyStep {
  title: string;
  items: string[];
}

export interface CameraReadyInstructions {
  pageTitle: string;
  lead: string;
  deadline: string;
  intro: string;
  checklistTitle: string;
  checklist: string[];
  steps: CameraReadyStep[];
  closing: string;
  contactEmail: string;
  licenseFormFile: string;
  openReviewGroupUrl: string;
}

export interface CallForPapersTopicGroup {
  title: string;
  items: string[];
}

export interface CallForPapers {
  title: string;
  intro: string[];
  topicsLead: string;
  topicGroups: CallForPapersTopicGroup[];
}

export interface Award {
  name: string;
  description: string;
}

export interface VenueInfo {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  /** Optional link to MICCAI satellite events schedule PDF */
  scheduleLinkLabel?: string;
  scheduleLinkHref?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactInfo {
  email: string;
  note: string;
}

export interface Workshop {
  workshopName: string;
  subtitle: string;
  year: string;
  edition: string;
  tagline: string;
  description: {
    short: string;
    long: string;
    theme?: string;
    motivation?: string;
    keywords?: string;
  };
  topics: TopicCategory[];
  organizers: Organizer[];
  /** Optional: organizers by section (e.g. Clinical Leadership) */
  organizerGroups?: { title: string; organizers: Organizer[] }[];
  importantDates: ImportantDate[];
  news: NewsItem[];
  tentativeSchedule: ScheduleRow[];
  programIntro: string;
  programTimezone: string;
  /** Optional: explicit list for Program page (else derived from tentativeSchedule invited rows) */
  invitedSpeakers?: { name: string; title?: string; affiliation: string; bio?: string; photo?: string }[];
  submissionGuidelines: SubmissionGuidelines;
  /** Full guidelines for Submission Guidelines page (sections with title + paragraphs) */
  submissionGuidelinesSections?: SubmissionGuidelinesSection[];
  /** Camera-ready instructions for accepted authors */
  cameraReadyInstructions?: CameraReadyInstructions;
  submissionIntro: string;
  reviewProcess: string;
  proceedings: string;
  callForPapers: CallForPapers;
  awards: Award[];
  /** Optional: sponsor thank-you for Awards page */
  sponsor?: { thankYouText: string; image: string; linkHref?: string };
  venue: VenueInfo;
  /** Intro text for the Proceedings page (first edition: no papers yet) */
  proceedingsPageIntro?: string;
  /** Gallery page: placeholder box label (no photos yet) */
  galleryPlaceholderLabel?: string;
  faq: FaqItem[];
  contact: ContactInfo;
  /** Nav and UI wiring — derived from workshop or explicit */
  nav: NavItem[];
  quickLinks: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export const workshop: Workshop = {
  workshopName: 'CLiMeM',
  subtitle: 'Continual Learning in Medical Multimodal-Vision',
  year: '2026',
  edition: 'First edition',
  tagline: 'Continual Learning in Medical Multimodal-Vision',
  description: {
    short: "CLiMeM's first edition workshop. Bridging continual learning and medical multimodal vision for robust, adaptable clinical AI.",
    long: 'Continual learning in medical multimodal-vision aims to develop AI systems that learn incrementally from evolving data and multiple modalities (imaging, text, signals) without forgetting, enabling sustainable deployment in clinical settings. Clinical environments produce non-stationary data streams and new modalities over time. Models that retrain from scratch are costly and risk forgetting; continual and multimodal learning are key to scalable, reliable medical AI.',
    theme: 'Continual learning in medical multimodal-vision aims to develop AI systems that learn incrementally from evolving data and multiple modalities (imaging, text, signals) without forgetting, enabling sustainable deployment in clinical settings.',
    motivation: 'Clinical environments produce non-stationary data streams and new modalities over time. Models that retrain from scratch are costly and risk forgetting; continual and multimodal learning are key to scalable, reliable medical AI.',
    keywords: 'Continual learning, lifelong learning, medical imaging, multimodal learning, catastrophic forgetting, domain adaptation, MICCAI, medical AI'
  },
  topics: [
    {
      category: 'Continual & lifelong learning',
      items: [
        'Continual / lifelong learning for medical imaging',
        'Catastrophic forgetting and stability–plasticity trade-offs',
        'Incremental learning with new modalities or tasks'
      ]
    },
    {
      category: 'Multimodal & deployment',
      items: [
        'Multimodal fusion (vision, text, EHR, signals)',
        'Benchmarks and evaluation for continual medical vision',
        'Federated and privacy-preserving continual learning',
        'Real-world deployment and regulatory considerations'
      ]
    },
    {
      category: 'Robustness & adaptation',
      items: [
        'Domain shift and distribution shift in clinical data'
      ]
    }
  ],
  organizers: [
    { name: 'Nourhan Bayasi, PhD', title: '', affiliation: 'Postdoctoral Research Fellow, UBC & BC Cancer (Canada)', country: 'Canada' },
    { name: 'Fereshteh Yousefirizi, PhD', title: '', affiliation: 'Staff Scientist, BC Cancer Research Institute (Canada)', country: 'Canada' },
    { name: 'Jamil Fayyad, PhD', title: '', affiliation: 'Senior Data Scientist, Kinsol (Canada)', country: 'Canada' },
    { name: 'Camila González, PhD', title: '', affiliation: 'Assistant Professor, Medical University of Vienna (Austria)', country: 'Austria' },
    { name: 'Numan Saeed, PhD', title: '', affiliation: 'Postdoctoral Research Fellow, MBZUAI (UAE)', country: 'UAE' },
    { name: 'Mohammad Yaqub, PhD', title: '', affiliation: 'Associate Professor of Computer Vision, MBZUAI (UAE)', country: 'UAE' },
    { name: 'Babak Saboury, MD, MPH, DABR, DABNM', title: '', affiliation: 'Diagnostic Radiologist, Chief Clinical Data Science Officer & Medical Director, United Theranostics (USA)', country: 'USA' },
    { name: 'Tyler Bradshaw, PhD', title: '', affiliation: 'Associate Professor & Director of Clinical Nuclear Medicine Physics, University of Wisconsin–Madison (USA)', country: 'USA' },
    { name: 'Isaac Shiri, PhD', title: '', affiliation: 'Head of Artificial Intelligence in Cardiovascular Medicine, Bern University Hospital (Switzerland)', country: 'Switzerland' },
    { name: 'Abhinav K. Jha, PhD', title: '', affiliation: 'Associate Professor of Biomedical Imaging and of Radiology, Washington University in St. Louis (USA)', country: 'USA' },
    { name: 'Arman Rahmim, PhD, DABSNM', title: '', affiliation: 'Professor of Radiology, Physics, and Biomedical Engineering, UBC & BC Cancer (Canada)', country: 'Canada' },
    { name: 'Monica Luo', title: '', affiliation: 'MD/PhD Candidate at UBC', country: 'Canada' },
    { name: 'Reza Hamidpour, MSc', title: '', affiliation: 'PhD Student at UBC', country: 'Canada' }
  ],
  organizerGroups: [
    {
      title: 'Technical Leadership',
      organizers: [
        { name: 'Nourhan Bayasi, PhD', title: '', affiliation: 'Postdoctoral Research Fellow, UBC & BC Cancer (Canada)', country: 'Canada', photo: 'nourhan_bayasi.jpg', website: 'https://www.linkedin.com/in/nourhan-bayasi-9a28836b/?originalSubdomain=ca' },
        { name: 'Fereshteh Yousefirizi, PhD', title: '', affiliation: 'Staff Scientist, BC Cancer Research Institute (Canada)', country: 'Canada', photo: 'Fereshteh_Yousefirizi.jpg', website: 'https://www.linkedin.com/in/fereshteh-yousefirizi-a9132b78/?originalSubdomain=ca' },
        { name: 'Jamil Fayyad, PhD', title: '', affiliation: 'Senior Data Scientist, Kinsol (Canada)', country: 'Canada', photo: 'Jamil_Fayyad.jpg', website: 'https://www.linkedin.com/in/jamilfayyad/?originalSubdomain=ca' },
        { name: 'Camila González, PhD', title: '', affiliation: 'Assistant Professor, Medical University of Vienna (Austria)', country: 'Austria', photo: 'Camila_González.png', website: 'https://www.linkedin.com/in/camila-gonz%C3%A1lez-618a5b188/' },
        { name: 'Numan Saeed, PhD', title: '', affiliation: 'Postdoctoral Research Fellow, MBZUAI (UAE)', country: 'UAE', photo: 'Numan_Saeed.jpg', website: 'https://www.linkedin.com/in/numansaeed-pk/?originalSubdomain=ae' },
        { name: 'Mohammad Yaqub, PhD', title: '', affiliation: 'Associate Professor of Computer Vision, MBZUAI (UAE)', country: 'UAE', photo: 'Mohammad_Yaqub.jpg', website: 'https://www.linkedin.com/in/mohammad-yaqub/?originalSubdomain=ae' }
      ]
    },
    {
      title: 'Translational Leadership',
      organizers: [
        { name: 'Babak Saboury, MD, MPH, DABR, DABNM', title: '', affiliation: 'Diagnostic Radiologist, Chief Clinical Data Science Officer & Medical Director, United Theranostics (USA)', country: 'USA', photo: 'Babak_Saboury.jpg', website: 'https://www.linkedin.com/in/babak-saboury-42637510/' },
        { name: 'Tyler Bradshaw, PhD', title: '', affiliation: 'Associate Professor & Director of Clinical Nuclear Medicine Physics, University of Wisconsin–Madison (USA)', country: 'USA', photo: 'Tyler_Bradshaw.jpg', website: 'https://www.linkedin.com/in/tyler-j-bradshaw-92387288/' },
        { name: 'Isaac Shiri, PhD', title: '', affiliation: 'Head of Artificial Intelligence in Cardiovascular Medicine, Bern University Hospital (Switzerland)', country: 'Switzerland', photo: 'Isaac_Shiri.jpg', website: 'https://www.linkedin.com/in/isaac-shiri-8267936a/?originalSubdomain=ch' },
        { name: 'Abhinav K. Jha, PhD', title: '', affiliation: 'Associate Professor of Biomedical Imaging and of Radiology, Washington University in St. Louis (USA)', country: 'USA', photo: 'Abhinav_K.png', website: 'https://www.linkedin.com/in/abhinav-jha-1a37b96/' },
        { name: 'Arman Rahmim, PhD, DABSNM', title: '', affiliation: 'Professor of Radiology, Physics, and Biomedical Engineering, UBC & BC Cancer (Canada)', country: 'Canada', photo: 'Arman_Rahmim.jpg', website: 'https://www.linkedin.com/in/rahmim/?originalSubdomain=ca' }
      ]
    },
    {
      title: 'Graduate Students',
      organizers: [
        { name: 'Monica Luo', title: '', affiliation: 'MD/PhD Candidate at UBC', country: 'Canada', photo: 'monica.png' },
        { name: 'Reza Hamidpour, MSc', title: '', affiliation: 'PhD Student at UBC', country: 'Canada', photo: 'reza.jpg' }
      ]
    }
  ],
  importantDates: [
    { label: 'Paper Submission Deadline', date: 'July 16th, 2026 (23:59 PDT)', status: 'announced' },
    { label: 'Author Notification', date: 'August 1st, 2026', status: 'announced' },
    { label: 'Camera-ready Submission Deadline', date: 'August 6th, 2026 (23:59 PDT)', status: 'announced' },
    { label: 'CLiMeM workshop day', date: 'Sunday, September 27, 2026 · 8:00 AM–12:30 PM · Bruxelles (G)', status: 'announced' },
    { label: 'MICCAI 2026 Conference (France)', date: 'Strasbourg Convention Center, Strasbourg, France - Sept. 27- Oct. 1, 2026', status: 'announced' }
  ],
  news: [
    {
      title: 'Workshop program published',
      date: '2026-08-14',
      blurb: 'The full CLiMeM program is now available: oral presentations and invited talks on Sunday, September 27, 2026 (8:00–12:30), room Bruxelles (G). See the <a href="workshop-program.html">Workshop Program</a> page.',
      pinned: true
    },
    {
      title: 'Decisions are out!',
      date: '2026-07-31',
      blurb: 'Thank you to all submitted papers and congratulations to all the accepted ones!',
      pinned: true
    },
    {
      title: 'Workshop schedule: Sept 27, Bruxelles (G)',
      date: '2026-07-15',
      blurb: 'CLiMeM is scheduled for Sunday, September 27, 2026, 8:00 AM–12:30 PM, room Bruxelles (G), Strasbourg Convention Center, Strasbourg, France. See the <a href="https://conferences.miccai.org/2026/files/downloads/MICCAI2026-Satellite-Events-Program.pdf" target="_blank" rel="noopener">MICCAI 2026 Satellite Events — Tentative Schedule (PDF)</a>.',
      pinned: true
    },
    {
      title: 'Submission deadline extended to July 16, 2026',
      date: '2026-07-09',
      blurb: 'The paper submission deadline has been extended to July 16th, 2026 (23:59 PDT). Submit via <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM#tab-active-submissions" target="_blank" rel="noopener">OpenReview</a>. See <a href="call-for-paper.html#cfp-dates-title">Important Dates</a>.',
      pinned: true
    },
    {
      title: 'Workshop date: Sunday, September 27, 2026',
      date: '2026-05-13',
      blurb: 'CLiMeM will take place on Sunday, September 27, 2026, the first day of MICCAI 2026 in Strasbourg, France (conference: Sept. 27–Oct. 1, 2026).',
      pinned: true
    },
    { title: 'Submission Portal Open', date: '2026-04-28', blurb: 'Paper submissions are now open via OpenReview. <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM#tab-active-submissions" target="_blank" rel="noopener">Submit your paper &rarr;</a>', pinned: true },
    { title: 'Invited Speakers Announced', date: '2026-04-23', blurb: 'Meet our invited speakers: Xiaoxiao Li (UBC) and Anirban Mukhopadhyay (TU Darmstadt). Visit the Workshop Program page for bios.', pinned: true },
    { title: 'MICCAI 2026 Date & Venue Updated', date: '2026-04-13', blurb: 'Strasbourg, France — MICCAI Sept. 27–Oct. 1, 2026. CLiMeM workshop: Sunday, September 27, 2026.', pinned: true },
    { title: 'Important Dates Updated', date: '2026-03-18', blurb: 'The CLiMeM Workshop Important Dates have been updated. See <a href="call-for-paper.html#cfp-dates-title" target="_blank" rel="noopener">Important Dates</a>.', pinned: false },
    { title: 'Website launched', date: '2026-03-03', blurb: 'Workshop website is live. Check back for program, submission guidelines, and speaker updates.', pinned: false },
    { title: 'Workshop accepted', date: '2026-02-07', blurb: 'CLiMeM workshop accepted at MICCAI 2026.', pinned: false }
  ],
  tentativeSchedule: [
    { time: '8:00 – 8:05', title: 'Opening', duration: '5 min', type: 'opening' },
    { time: '8:05 – 8:20', title: 'Oral 1: Investigating Test-Time Adaptation of Convolutional Neural Networks for Medical Image Analysis under Distribution Shifts', duration: '15 min', type: 'session' },
    { time: '8:20 – 8:35', title: 'Oral 2: Continual Merging with Test-Time Adaptation for Whole-Slide Image Analysis', duration: '15 min', type: 'session' },
    { time: '8:35 – 8:45', title: 'Short break', duration: '10 min', type: 'break' },
    { time: '8:45 – 9:30', title: 'Invited Talk 1 (incl. Q&A)', speaker: 'Xiaoxiao Li', duration: '45 min', type: 'invited' },
    { time: '9:30 – 9:45', title: 'Oral 3: Integrating Uncertainty and Latent Feature Diversity for Robust Memory Replay in Continual Medical Imaging Learning', duration: '15 min', type: 'session' },
    { time: '9:45 – 9:55', title: 'Short break', duration: '10 min', type: 'break' },
    { time: '9:55 – 10:10', title: 'Oral 4: An Empirical Analysis of Continual Learning for Heterogeneous Medical Visual Question Answering', duration: '15 min', type: 'session' },
    { time: '10:10 – 10:25', title: 'Oral 5: Multimodal Fusion for Domain-Incremental Continual Learning in 3D Medical Imaging', duration: '15 min', type: 'session' },
    { time: '10:25 – 10:40', title: 'Oral 6: How Resilient are Foundation Segmentation Models to Noisy Ultrasound Artifacts? A Multi-Dataset Benchmark Across Prompts, Noise Types, and Severity Levels', duration: '15 min', type: 'session' },
    { time: '10:40 – 11:30', title: 'Lunch break', duration: '50 min', type: 'break' },
    { time: '11:30 – 12:15', title: 'Invited Talk 2 (incl. Q&A)', speaker: 'Anirban Mukhopadhyay', duration: '45 min', type: 'invited' },
    { time: '12:15 – 12:30', title: 'Oral 7: Learning to Reason Over Physician Corrections: An Interactive Agentic Framework for 3D Tumor Segmentation', duration: '15 min', type: 'session' }
  ],
  programIntro: 'CLiMeM will be held on <strong>Sunday, September 27, 2026</strong>, <strong>8:00 AM–12:30 PM</strong> (local time), room <strong>Bruxelles (G)</strong>, Strasbourg Convention Center, Strasbourg, France. The full session schedule is below.',
  programTimezone: 'All times local (MICCAI 2026, Strasbourg).',
  invitedSpeakers: [
    {
      name: 'Xiaoxiao Li',
      title: 'Associate Professor, Electrical and Computer Engineering; Associate Member, Computer Science, University of British Columbia (UBC)',
      affiliation: 'University of British Columbia (UBC), Canada',
      bio: 'A faculty member at the Vector Institute and an adjunct Assistant Professor at the School of Medicine, Yale University. She is a Canada CIFAR AI Chair and a Canada Research Chair (Tier II) in Responsible AI.',
      photo: 'xiaoxiao.jpg'
    },
    {
      name: 'Anirban Mukhopadhyay',
      title: 'Leader of the research group Medical & Environmental Computing (MEC-Lab)',
      affiliation: 'TU Darmstadt, Germany',
      bio: 'Anirban Mukhopadhyay\u2019s vision is to Reverse Engineer the Doctor\u2019s Mind. He leads an independent research group at TU Darmstadt, Germany that develops assistive AI for image-guided diagnosis and surgery. He organizes premier international conferences, challenges and workshops. Dr. Mukhopadhyay is the AI-partner of RACOON, the radiology conglomerate of 38 German University hospitals to combat COVID-19. He hosts the popular podcast \u201cAI-Ready Healthcare\u201d.',
      photo: 'anirban.jpg'
    }
  ],
  submissionGuidelines: {
    bullets: [
      'Format: MICCAI LNCS style. Short papers: 4–6 pages; full papers: 8–12 pages (excluding references).',
      'Double-blind: anonymize author names and affiliations.',
      'Submit via <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM#tab-active-submissions" target="_blank" rel="noopener">OpenReview</a>.',
      'Accepted papers will be included in the workshop proceedings (publisher TBA).'
    ],
    formattingRulesPlaceholders: [
      'Use the official LNCS template.',
      'Do not include author names in the initial submission.'
    ]
  },
  submissionGuidelinesSections: [
    {
      title: 'Format',
      paragraphs: [
        'Papers will be submitted electronically following Lecture Notes in Computer Science (LNCS) style of up to 8 + 2 pages <a href="https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html#manuscriptpreparation" target="_blank" rel="noopener">(same as MICCAI 2026 format)</a>. Submissions exceeding page limit will be rejected without review. LaTeX style files can be found from Springer, which also contains Word instructions. The file format for submissions is Adobe Portable Document Format (PDF). Other formats will not be accepted.'
      ]
    },
    {
      title: 'Double Blind Review',
      paragraphs: [
        'CLiMeM reviewing is double blind. Please review the Anonymity guidelines of MICCAI main conference, and confirm that the author field does not break anonymity.'
      ]
    },
    {
      title: 'Paper Submission',
      paragraphs: [
        'CLiMeM will use the OpenReview system for online submission. <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM#tab-active-submissions" target="_blank" rel="noopener">Submit your paper via OpenReview &rarr;</a>'
      ]
    },
    {
      title: 'Supplemental Material',
      paragraphs: [
        'Following MICCAI 2026 main conference, supplementary materials are limited to multimedia content (e.g., videos) as warranted by the technical application (e.g., robotics, surgery, ...). These files should not display any proofs, analysis, additional results, or embedded slides, and should not show any identification markers either. Violation of this guideline will lead to desk rejection. PDF files may not be submitted as supplementary materials in 2026 unless authors are citing a paper that has not yet been published. In such a case, authors are required to submit an anonymized version of the cited paper. ACs will perform checks to ensure the integrity. <a href="https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html#supplementarymaterial" target="_blank" rel="noopener">(More details are in MICCAI 2026 main website)</a>.'
      ]
    },
    {
      title: 'Submission Originality',
      paragraphs: [
        'Submissions should be original; no paper of substantially similar content should be under peer review or has been accepted for a publication elsewhere (conference/journal, not including archived work).'
      ]
    },
    {
      title: 'Proceedings',
      paragraphs: [
        'The proceedings of CLiMeM 2026 will be published as part of the joint MICCAI Workshops proceedings with Springer (LNCS).'
      ]
    },
    {
      title: 'Publication Strategy',
      paragraphs: [
        'Springer LNCS — Papers will be published as part of the MICCAI Satellite Events joint LNCS proceedings.',
        'Workshop papers have been published in Bridging Regulatory Science and Medical Imaging Evaluation; and Distributed, Collaborative, and Federated Learning.'
      ]
    },
    {
      title: 'Open Access and Patent Notice',
      paragraphs: [
        'An open-access version of all accepted papers from the MICCAI 2026 Satellite Event (CLiMeM) will be made available on the MICCAI Society website no earlier than one week before the first day of the conference. <strong>Authors intending to file patents are responsible for ensuring that all necessary filings are completed prior to this public release.</strong>'
      ]
    },
    {
      title: 'Review Process',
      paragraphs: [
        'All papers will be reviewed following a double-blind review process with at least 2 reviewers per submission.',
        'We follow the MICCAI 2026 guideline regarding arXiv: Reviewers are strongly discouraged to search arXiv for submissions they are responsible to review. Even if they come across this information accidentally, they are discouraged to use the information in formulating their informed review of submissions. arXiv papers are not considered prior work since they have not been peer-reviewed. Therefore, citations to those papers are not required and reviewers are asked to not penalize a paper that fails to cite an arXiv submission.',
        'Each reviewer will be able to cast a score from 1 (lowest) to 5 (highest) and papers with average scores higher than 2.5 will be considered acceptable.',
        'The final decision about acceptance/rejection will be made by the PC member according to ranking, quality and the total number of submissions.',
        'Outstanding papers will be selected for an oral presentation.',
        'We will select reviewers from a pool of reputable researchers in the field who have repeatedly published at venues such as MICCAI, MIDL, CVPR, ICCV, IPMI, and ECCV. The review process will be implemented through the OpenReview platform. We will use the same system to match papers to the appropriate reviewers.'
      ]
    }
  ],
  cameraReadyInstructions: {
    pageTitle: 'Camera-Ready Instructions for Authors',
    lead: 'Steps to finalize your accepted CLiMeM 2026 paper for the proceedings.',
    deadline: 'August 6, 2026, 23:59 PDT',
    intro: 'Congratulations again on your acceptance to CLiMeM 2026! Please follow the steps below carefully to finalize your submission for the proceedings.',
    checklistTitle: 'Quick checklist',
    checklist: [
      '<span class="camera-ready-new">NEW</span> Prepare your camera-ready PDF (<code>CLiMeM_XXX.pdf</code>), source files, and supplementary PDF if applicable',
      '<span class="camera-ready-new">NEW</span> Complete, sign, and scan the License to Publish form (<code>CLiMeM_XXX_LTP.pdf</code>)',
      'Upload files on OpenReview (camera-ready)',
      'Ensure at least one author is registered for MICCAI 2026 and will present in Strasbourg',
      '<span class="camera-ready-new">NEW</span> Review the patent notice and Springer Code of Conduct below'
    ],
    steps: [
      {
        title: '1. Prepare your camera-ready PDF',
        items: [
          'Incorporate feedback from your reviewers where applicable.',
          'Your main body may now extend up to <strong>8.5 pages</strong> (previously 8), plus up to <strong>2 pages for references</strong> (unchanged).',
          'Keep the same MICCAI main conference paper format you used for your original submission.',
          '<span class="camera-ready-new">NEW</span> Save your final paper as: <code>CLiMeM_XXX.pdf</code> (where <code>XXX</code> is your paper ID, e.g., <code>CLiMeM_013.pdf</code>).',
          '<span class="camera-ready-new">NEW</span> If you have supplementary material, save it as a single PDF named <code>CLiMeM_XXX_supp.pdf</code>.',
          '<span class="camera-ready-new">NEW</span> Also prepare your manuscript source files:',
          '<strong>LaTeX:</strong> a zipped file with all .tex files, figures, .bib file, and any non-standard style files/fonts, named <code>CLiMeM_XXX_source.zip</code>',
          '<strong>Word:</strong> the source .docx file, named <code>CLiMeM_XXX_source.docx</code>'
        ]
      },
      {
        title: '2. Complete and sign the License to Publish form',
        items: [
          'Download the <a href="SNCS_ProceedingsPaper_LTP_ST_SN_Switzerland.docx">License to Publish form</a>.',
          'Fill in: paper title, full author list, and corresponding author. <strong>Do not edit any pre-filled fields.</strong>',
          'Print and sign the form by hand (wet-ink signature), then scan or photograph it and convert it to PDF.',
          '<span class="camera-ready-new">NEW</span> Save it as: <code>CLiMeM_XXX_LTP.pdf</code> (e.g., <code>CLiMeM_013_LTP.pdf</code>).'
        ]
      },
      {
        title: '3. Upload files on OpenReview',
        items: [
          'Log in to <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM" target="_blank" rel="noopener">OpenReview</a> and go to your paper\'s page.',
          'Click the blue <strong>Edit</strong> button in the top right corner.',
          'From the dropdown, select <strong>camera-ready</strong>.',
          'Upload your camera-ready PDF in the paper file field.',
          'Upload your signed License to Publish form (PDF) in the designated field.',
          'Click <strong>Submit</strong>.',
          '<span class="camera-ready-new">NEW</span> <strong>Note:</strong> your original submission plus the reviews and your responses to reviewers will remain publicly visible on OpenReview — only the camera-ready file itself stays hidden.'
        ]
      },
      {
        title: '4. Registration reminder',
        items: [
          'At least one author must register for MICCAI 2026 and present the work in person in Strasbourg. Papers without a registered, presenting author may not appear in the final proceedings.'
        ]
      },
      {
        title: '<span class="camera-ready-new">NEW</span> 5. Patent notice',
        items: [
          'An open-access version of all accepted CLiMeM papers will be made available on the MICCAI Society website no earlier than one week before the first day of the conference. If you intend to file a patent based on this work, please ensure all necessary filings are completed before that date.'
        ]
      },
      {
        title: '<span class="camera-ready-new">NEW</span> 6. Springer Code of Conduct',
        items: [
          'Please review <a href="https://www.springernature.com/gp/authors/book-authors-code-of-conduct" target="_blank" rel="noopener">Springer Nature\'s Code of Conduct for Book Authors</a>, particularly the sections on <strong>Figures and Illustrations</strong> and <strong>Ethical Approval and Informed Consent</strong>, given CLiMeM\'s subject matter.'
        ]
      }
    ],
    closing: 'Please complete all steps above by the deadline. If you have any questions, contact us at',
    contactEmail: 'nbayasi@bccrc.ca',
    licenseFormFile: 'SNCS_ProceedingsPaper_LTP_ST_SN_Switzerland.docx',
    openReviewGroupUrl: 'https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM'
  },
  submissionIntro: 'We invite short and full papers on continual learning, multimodal learning, and medical vision. Submissions will be peer-reviewed.',
  callForPapers: {
    title: 'Call for Papers',
    intro: [
      'The CLiMeM Workshop on Continual Learning in Medical Multimodal-Vision, held in conjunction with MICCAI 2026 on Sunday, September 27, 2026 at Strasbourg Convention Center, Strasbourg, France, aims to provide a dedicated forum for discussing methodological advances and practical challenges in developing adaptive medical AI systems capable of learning continuously from evolving clinical environments.',
      'Clinical practice is inherently dynamic. Patient populations shift, imaging protocols evolve, hardware systems change, and diagnostic workflows continuously adapt. In contrast, most medical AI models are trained under static assumptions and remain fixed after deployment, leading to performance degradation under distribution shifts and changing clinical conditions.',
      'CLiMeM focuses on continual, adaptive, and clinician-integrated learning paradigms that enable medical AI systems to evolve safely over time while maintaining robustness, reliability, and clinical relevance.',
      'We invite original research contributions addressing continual learning, multimodal medical AI, and adaptive clinical intelligence. Submissions may include methodological innovations, system designs, benchmark studies, or clinical deployment experiences.'
    ],
    topicsLead: 'Topics include, but are not limited to:',
    topicGroups: [
      {
        title: '1. Continual and Lifelong Learning',
        items: [
          'Lifelong, continual, incremental, and online learning methods',
          'Sequential and multitask learning in medical settings',
          'Benchmark datasets, evaluation protocols, and metrics',
          'Catastrophic forgetting mitigation strategies'
        ]
      },
      {
        title: '2. Clinician-in-the-Loop Learning',
        items: [
          'Human–AI collaboration and interactive supervision',
          'Reinforcement learning for clinical decision support',
          'Preference learning from clinician feedback',
          'Implicit feedback signals (e.g., gaze, interaction logs)',
          'Annotation efficiency and active learning',
          'Trustworthy and interpretable clinical AI systems'
        ]
      },
      {
        title: '3. Adaptive and Context-Aware Inference',
        items: [
          'Test-time adaptation and online domain generalization',
          'Memory- and retrieval-augmented models',
          'Context-aware and causal modeling',
          'Resource-constrained and real-time adaptation'
        ]
      },
      {
        title: '4. Clinical Workflow Integration and Deployment',
        items: [
          'Integration with PACS, EHR, RIS, and imaging workstations',
          'Deployment using platforms such as MONAI Label, OHIF, and 3D Slicer',
          'Continual learning infrastructure and model governance',
          'User-centred clinical system design'
        ]
      }
    ]
  },
  reviewProcess: 'Each submission will receive at least two reviews. Decisions are made by the organizing committee based on originality, relevance, and clarity. We aim for constructive feedback to support authors.',
  proceedings: 'Accepted papers are planned to be published in the MICCAI 2026 Workshop Proceedings (details to be confirmed with MICCAI).',
  awards: [
    { name: 'Best Paper Award', description: 'Recognizes the best contributed paper for novelty, impact, and clarity.' },
    { name: 'Best Presentation Award', description: 'Recognizes the best oral presentation at the workshop.' }
  ],
  sponsor: {
    thankYouText: 'We thank QURIT Lab at BC Cancer and UBC in Vancouver, Canada for sponsoring this workshop.',
    image: 'sponsers.png',
    linkHref: 'https://www.bccrc.ca/dept/io-programs/qurit/'
  },
  venue: {
    title: 'MICCAI 2026',
    description: 'CLiMeM will be held on Sunday, September 27, 2026, 8:00 AM–12:30 PM, at Strasbourg Convention Center, Strasbourg, France, during MICCAI 2026 (Sept. 27–Oct. 1, 2026). Room: Bruxelles (G). Registration follows the main conference program.',
    linkLabel: 'MICCAI 2026 website',
    linkHref: 'https://conferences.miccai.org/2026/en/default.asp',
    scheduleLinkLabel: 'MICCAI 2026 Satellite Events — Tentative Schedule (PDF)',
    scheduleLinkHref: 'https://conferences.miccai.org/2026/files/downloads/MICCAI2026-Satellite-Events-Program.pdf'
  },
  proceedingsPageIntro: 'All proceedings will be listed below. This is the first edition of CLiMeM; once the workshop has taken place, accepted papers will appear here.',
  galleryPlaceholderLabel: 'CLiMeM | MICCAI 2026',
  faq: [
    { q: 'What is the workshop format?', a: 'Half-day workshop on Sunday, September 27, 2026, 8:00 AM–12:30 PM, room Bruxelles (G), with invited talks and contributed paper sessions. See the MICCAI 2026 Satellite Events tentative schedule (PDF) on the Venue or Workshop Program page.' },
    { q: 'Do I need to register for MICCAI to attend?', a: 'Yes. Workshop attendance requires registration for MICCAI 2026. Please register through the main conference website.' },
    { q: 'Will workshop papers be published?', a: 'Yes. Accepted papers will be published as part of the joint MICCAI Workshops proceedings with Springer (LNCS), in the same series as other MICCAI satellite events.' },
    { q: 'Can I submit work also submitted elsewhere?', a: 'No. Submissions must be original. No paper of substantially similar content should be under peer review or have been accepted for publication elsewhere (conference or journal). Dual submission policies follow MICCAI guidelines.' },
      { q: 'What is the page limit and format for submissions?', a: 'Papers must follow LNCS style and be up to 8 + 2 pages (same as MICCAI 2026 format). Submissions exceeding the page limit will be rejected without review. Only PDF format is accepted. See the Submission Guidelines page for details.' },
      { q: 'Is supplemental material allowed?', a: 'Yes. Following MICCAI 2026 main conference, supplementary materials are limited to multimedia content (e.g., videos) as warranted by the technical application (e.g., robotics, surgery, ...). These files should not display any proofs, analysis, additional results, or embedded slides, and should not show any identification markers either. Violation of this guideline will lead to desk rejection. PDF files may not be submitted as supplementary materials in 2026 unless authors are citing a paper that has not yet been published. In such a case, authors are required to submit an anonymized version of the cited paper. ACs will perform checks to ensure the integrity. More details are in MICCAI 2026 main website: https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html#supplementarymaterial' }
  ],
  contact: {
    email: 'climemworkshop@gmail.com',
    note: 'For questions about the workshop, submission, or program, please contact the organizers.'
  },
  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'Call for Paper', href: 'call-for-paper.html' },
    { label: 'Submission Guidelines', href: 'submission-guidelines.html' },
    { label: 'Camera-ready Instructions', href: 'camera-ready-instructions.html' },
    { label: 'Workshop Program', href: 'workshop-program.html' },
    { label: 'Organizers', href: 'organizers.html' },
    { label: 'Awards', href: 'awards.html' },
    { label: 'Venue', href: 'venue.html' },
    { label: 'Proceedings', href: 'proceedings.html' },
    { label: 'Gallery', href: 'gallery.html' },
    { label: 'FAQ & Contact', href: 'faq-contact.html' }
  ],
  quickLinks: [
    { label: 'Submission guidelines', href: 'submission-guidelines.html' },
    { label: 'Camera-ready instructions', href: 'camera-ready-instructions.html' },
    { label: 'Program & schedule', href: 'workshop-program.html' },
    { label: 'Organizers', href: 'organizers.html' },
    { label: 'MICCAI 2026', href: 'venue.html' }
  ],
  hero: {
    title: 'CLiMeM | MICCAI 2026',
    subtitle: 'Continual Learning in Medical Multimodal-Vision',
    description:
        "CLiMeM is the inaugural workshop at MICCAI 2026 at Strasbourg Convention Center, Strasbourg, France on Sunday, September 27, 2026 (MICCAI: Sept. 27–Oct. 1, 2026). " +
        "It focuses on enabling medical AI systems to learn continuously and safely as clinical environments evolve. " +
        "CLiMeM aims to bridge continual learning and medical multimodal vision to develop robust, physician-in-the-loop, and adaptable clinical AI systems. ",
    ctaPrimary: { label: 'Submit a paper', href: 'https://openreview.net/group?id=MICCAI.org/2026/Workshop/CLiMeM#tab-active-submissions' },
    ctaSecondary: { label: 'View program', href: 'workshop-program.html' }
  }
};
