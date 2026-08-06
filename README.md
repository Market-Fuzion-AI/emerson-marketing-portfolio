# emerson-marketing-portfolio

Digital marketing portfolio for Emerson Alvarenga — content marketing, social media, campaign
execution, CRM and lead management, and AI-assisted marketing workflows.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** (build)
- **Tailwind CSS v4** — theme tokens live in `src/index.css` under `@theme`
- **React Router v7** — client-side routing
- **motion** — scroll and entrance animations
- **lucide-react** — icons

## Getting started

```bash
npm ci        # install exact dependency versions
npm run dev   # local dev server on http://localhost:3000
npm run lint  # TypeScript check (tsc --noEmit)
npm run build # production build to dist/
npm run preview # serve the production build locally
```

## Deployment

The site deploys to **Vercel**, connected to this GitHub repository.

- **Production branch:** `main`. Merging to `main` triggers a production deploy.
- Pull requests get automatic preview deployments.
- Vercel auto-detects the Vite framework preset — no `vercel.json` is required.
- Build command `npm run build`, output directory `dist/`.

There is no separate deploy step to run by hand. Push to `main` and Vercel builds it.

## Project structure

```
src/
├── main.tsx                React root
├── App.tsx                 Router, page shell, scroll reset, 404 route
├── index.css               Design tokens (@theme) + base styles
├── types/project.ts        ProjectImage / Project types
├── data/projects.ts        The four portfolio projects (content lives here)
├── pages/                  Home · Projects · About · NotFound
└── components/
    ├── ui/                 Shared Lightbox + ScreenshotGallery
    ├── Navbar · Footer · ScrollToTop
    ├── Hero · Skills · About · MarketingToolkit
    └── ProjectCard         Renders one project from data/projects.ts
```

### Editing project content

All four projects are defined in **`src/data/projects.ts`**. Editing copy, skills, tools, or
workflow steps means editing that one file — no component changes needed.

## Adding project screenshots

Everything below is the complete process. Screenshots are added by editing **one file**,
`src/data/projects.ts`. No component ever needs changing.

### 1. Where files go

| Project | Directory | File prefix |
| --- | --- | --- |
| MilwauTea Marketing Case Study | `public/images/milwautea/` | `milwautea-` |
| Instagram DM Automation Funnel | `public/images/instagram-dm-automation/` | `instagram-` |
| Prospecting Command Center | `public/images/prospecting-command-center/` | `prospecting-` |
| AI Content Studio | `public/images/ai-content-studio/` | `content-studio-` |

Paths in `projects.ts` are absolute from the site root and omit `public`, so a file at
`public/images/milwautea/milwautea-01-logo.webp` is referenced as
`/images/milwautea/milwautea-01-logo.webp`.

### 2. Naming convention

`<prefix><NN>-<subject>.webp`

Two-digit numbers so files sort correctly past nine. Lowercase, hyphen-separated, one subject
word. The number records intended order; the subject makes the file findable a year from now.

```
milwautea-01-logo.webp              instagram-01-trigger.webp
milwautea-02-mascot.webp            instagram-02-manychat.webp
milwautea-03-menu.webp              instagram-03-make-scenario.webp
milwautea-04-social.webp            instagram-04-slack.webp
milwautea-05-promo.webp
milwautea-06-video.webp             prospecting-01-pipeline.webp
                                    prospecting-02-qualification.webp
content-studio-01-research.webp     prospecting-03-followup.webp
content-studio-02-ideas.webp
content-studio-03-hooks.webp
content-studio-04-script.webp
content-studio-05-images.webp
```

### 3. Format and dimensions

| | |
| --- | --- |
| **Format** | `.webp`. Use `.png` if webp shows artifacts on sharp text, `.jpg` only for photographs. |
| **Width** | 1200 to 1600px. The lightbox caps near 1024px, so anything wider is wasted bytes. |
| **Aspect** | Keep the source aspect ratio. Thumbnails crop to 4:3 automatically; the lightbox shows the full image. |
| **File size** | Aim under 250KB each. |
| **Cropping** | Crop to the content that matters. A full desktop screenshot loses its subject at thumbnail size. |

Because thumbnails crop to 4:3 from the centre, put the important part of the image near the
middle or crop it there yourself before exporting.

### 4. Ordering

Display order is the order of the `images` array in `projects.ts`, not the filename. The numeric
prefix is a convention for humans; reordering the array is what actually moves an image.

### 5. Adding or replacing

Add entries to the `images` array for that project:

```ts
images: [
  { src: '/images/milwautea/milwautea-01-logo.webp', alt: 'MilwauTea logo' },
  { src: '/images/milwautea/milwautea-02-menu.webp', alt: 'MilwauTea menu design' },
],
```

- **To add**, drop the file in the project directory and append an entry.
- **To replace**, overwrite the file and update the `alt` if the subject changed. If the filename
  changes, update the `src` too.
- **To remove**, delete the array entry and the file. An empty array is valid and renders neutral
  empty frames.

Every image needs a descriptive `alt`. It is read by screen readers and used as the lightbox
label, so describe the subject rather than writing "screenshot".

### 6. Recommended count per project

| Project | Screenshots | Why |
| --- | ---: | --- |
| MilwauTea | 6 | The featured case study, and the only project with three distinct disciplines to evidence. Six fills two clean rows of three. |
| AI Content Studio | 5 | The workflow is a sequence, and each step is a different artefact. Fewer than five breaks the story. |
| Instagram DM Funnel | 4 | One per stage of the lead journey. Fewer breaks the narrative; more repeats it. |
| Prospecting Command Center | 3 | One row. The pipeline is one screen viewed three ways. |

Eighteen total. Resist adding more. Every extra screenshot dilutes the ones that matter.

## Asset collection checklist

Working notes for gathering screenshots. Not rendered anywhere on the site.

**MilwauTea** (target 6)

- [ ] Logo
- [ ] Mascot
- [ ] Menu design
- [ ] Social graphics
- [ ] Promotional / giveaway design
- [ ] Video still or CapCut timeline
- [ ] Instagram or Facebook profile grid

**AI Content Studio** (target 5, in this order)

- [ ] 1. Topic research
- [ ] 2. Content ideas
- [ ] 3. Hook selection
- [ ] 4. Script creation
- [ ] 5. Image generation

**Instagram DM Funnel** (target 4)

- [ ] Instagram post with the triggering comment
- [ ] ManyChat conversation flow
- [ ] Make.com scenario canvas
- [ ] Slack notification
- [ ] Follow-up message sequence

**Prospecting Command Center** (target 3)

- [ ] Pipeline / board view
- [ ] Lead qualification or scoring view
- [ ] Follow-up or outreach tracking
- [ ] Archive view

Except for AI Content Studio, whose five are a fixed sequence, the checklists list more
candidates than the target count on purpose. Shoot wide, then pick the strongest.

**Before exporting:** redact client names, emails, phone numbers and any real lead data.
