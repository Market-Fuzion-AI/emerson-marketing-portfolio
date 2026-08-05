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

Each project has a directory under `public/images/` matching its `id` in `src/data/projects.ts`:

| Project | Directory | File prefix |
| --- | --- | --- |
| MilwauTea Marketing Case Study | `public/images/milwautea/` | `milwautea-` |
| Instagram DM Automation Funnel | `public/images/instagram-dm-automation/` | `instagram-` |
| Prospecting Command Center | `public/images/prospecting-command-center/` | `prospecting-` |
| AI Content Studio | `public/images/ai-content-studio/` | `content-studio-` |

### Naming convention

`<prefix><NN>-<subject>.webp`

Two-digit numbers so files sort correctly past nine. Lowercase, hyphen-separated, one subject
word. The number sets display order; the subject makes the file findable a year from now.

```
milwautea-01-logo.webp                 instagram-01-trigger.webp
milwautea-02-mascot.webp               instagram-02-manychat.webp
milwautea-03-menu.webp                 instagram-03-make-scenario.webp
milwautea-04-social.webp               instagram-04-slack.webp
milwautea-05-promo.webp
milwautea-06-video.webp                prospecting-01-pipeline.webp
                                       prospecting-02-qualification.webp
content-studio-01-research.webp        prospecting-03-followup.webp
content-studio-02-script.webp
content-studio-03-output.webp
```

Use `.webp`. Fall back to `.png` for screenshots with sharp text if webp shows artifacts, and
`.jpg` only for photographs.

### Recommended count per project

| Project | Screenshots | Why |
| --- | ---: | --- |
| MilwauTea | 6 | The featured case study, and the only project with three distinct disciplines to evidence. Six fills two clean rows of three. |
| Instagram DM Funnel | 4 | One per stage of the lead journey. Fewer breaks the narrative; more repeats it. |
| Prospecting Command Center | 3 | One row. The pipeline is one screen viewed three ways. |
| AI Content Studio | 3 | One row. Enough to show input, middle, and output. |

Sixteen total. Resist adding more. Every extra screenshot dilutes the ones that matter, and the
count deliberately tapers to match the page hierarchy.

### Making them appear

Add them to the `images` array for that project in `src/data/projects.ts`:

```ts
images: [
  { src: '/images/milwautea/milwautea-01-logo.webp', alt: 'MilwauTea logo' },
  { src: '/images/milwautea/milwautea-02-menu.webp', alt: 'MilwauTea menu design' },
],
```

That is the only file to edit. No component changes are needed, at any count.

Every image needs a descriptive `alt`. It is read by screen readers and used as the lightbox
label. While `images` is empty, the gallery renders placeholder tiles.

**Before adding images:** resize and compress. Thumbnails render at a 4:3 aspect ratio and the
lightbox caps near 1024px wide, so anything beyond ~1600px wide is wasted bytes. Crop to the
content that matters rather than shipping a full desktop screenshot.

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

**AI Content Studio** (target 3)

- [ ] Topic research
- [ ] Idea and hook development
- [ ] Script draft
- [ ] Generated image
- [ ] Finished published post

Checklists list more candidates than the target count on purpose. Shoot wide, then pick the
strongest. Redact client names, emails, phone numbers and any real lead data before exporting.
