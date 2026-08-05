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

| Project | Directory |
| --- | --- |
| AI Content Studio | `public/images/ai-content-studio/` |
| Prospecting Command Center | `public/images/prospecting-command-center/` |
| Instagram DM Automation Funnel | `public/images/instagram-dm-automation/` |
| MilwauTea Marketing Case Study | `public/images/milwautea/` |

**Naming convention:** `<project-id>-<n>.<ext>`, numbered from 1 — for example
`milwautea-1.png`, `milwautea-2.png`, `milwautea-3.png`.

**To make screenshots appear**, add them to the `images` array for that project in
`src/data/projects.ts`:

```ts
images: [
  { src: '/images/milwautea/milwautea-1.png', alt: 'MilwauTea launch poster' },
  { src: '/images/milwautea/milwautea-2.png', alt: 'MilwauTea Instagram grid' },
],
```

Every image needs a descriptive `alt` — it is used both by screen readers and as the lightbox
label. While `images` is empty, the gallery renders placeholder tiles instead.

**Before adding images:** resize to display size and compress them. Thumbnails render at a 4:3
aspect ratio, and the lightbox caps at roughly 1024px wide, so images beyond ~1600px wide are
wasted bytes.

## Outcomes and evidence

Each project card has an "Outcome & Evidence" block that is intentionally a placeholder. Results
should be added only once they are real and verifiable — the portfolio deliberately contains no
invented metrics.
