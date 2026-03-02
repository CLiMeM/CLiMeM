# CLiMeM 2026 — Workshop website

**CLiMeM: Continual Learning in Medical Multimodal-Vision**  
First edition workshop at MICCAI 2026.

## Overview

Minimal, fast, accessible static site. Purple/white theme. **All content comes from a single TypeScript module** — no hardcoded text in pages.

## Content source

- **`src/content/workshop.ts`** — Single source of truth. Exports a typed `workshop` object with:
  - `workshopName`, `subtitle`, `year`, `edition`, `tagline`
  - `description` (short, long, theme, motivation, keywords)
  - `topics` (grouped by category)
  - `organizers` (name, title, affiliation, country, website?)
  - `importantDates` (label, date, status: upcoming/announced/tbd)
  - `news` (title, date, blurb, pinned)
  - `tentativeSchedule` (time, title, speaker?, type?)
  - `submissionGuidelines` (bullets, formattingRulesPlaceholders), `submissionIntro`, `reviewProcess`, `proceedings`
  - `awards`, `venue`, `faq`, `contact`
  - `nav`, `quickLinks`, `hero` (for layout and home)

- **`data/workshop.js`** — Browser bundle. Generated from `workshop.ts` so static pages can load it via `<script src="data/workshop.js">`. Regenerate with:
  ```bash
  npm install && npm run build
  ```
  If you edit `src/content/workshop.ts` only, run `npm run build` to refresh `data/workshop.js`. The site also ships with a hand-maintained `data/workshop.js` so it works without Node.

## Structure

- **`js/layout.js`** — Renders header, nav, and footer from `window.workshop`.
- **`js/main.js`** — Mobile nav, FAQ accordion, accessibility.
- **`css/style.css`** — Purple/white theme, responsive layout, typography.

## Pages (all read from `window.workshop`)

| Page        | Path              | Content from workshop                    |
|-------------|-------------------|------------------------------------------|
| Home        | `index.html`      | hero, importantDates, quickLinks, news   |
| About       | `about.html`      | description, topics                      |
| Program     | `program.html`    | programIntro, programTimezone, tentativeSchedule, invitedSpeakers |
| Organizers  | `organizers.html` | organizers                               |
| Submission  | `submission.html` | submissionIntro, submissionGuidelines, reviewProcess, proceedings |
| Awards      | `awards.html`     | awards                                   |
| Venue       | `venue.html`      | venue                                    |
| News        | `news.html`       | news                                     |
| FAQ & Contact | `faq-contact.html` | faq, contact                           |

## Running locally

Open `index.html` in a browser, or serve the folder (e.g. `npx serve .` or `python -m http.server 8000`).

## Updating content

1. Edit **`src/content/workshop.ts`** (add/change any field in the `workshop` object).
2. Run **`npm run build`** to regenerate `data/workshop.js`. Or edit `data/workshop.js` directly if you prefer not to use the build step.

## License

Content and design for the CLiMeM 2026 workshop.
