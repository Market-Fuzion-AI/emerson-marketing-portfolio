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
milwautea-06-mockup.webp            prospecting-01-pipeline.webp
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

| Project | Images | Videos | Why |
| --- | ---: | ---: | --- |
| MilwauTea | 6 | 2 | The featured case study, and the only project with three distinct disciplines to evidence. The two videos are the only proof of the Video Production skill claimed on the card. |
| AI Content Studio | 5 | 0 | The workflow is a sequence and each step is a different artefact. Fewer than five breaks the story. |
| Instagram DM Funnel | 4 | 0 | One per stage of the lead journey. Fewer breaks the narrative; more repeats it. |
| Prospecting Command Center | 3 | 0 | One row. The pipeline is one screen viewed three ways. |

Eighteen images plus two videos. Resist adding more.

**MilwauTea order**

| # | Slot | File |
| ---: | --- | --- |
| 1 | Logo | `milwautea-01-logo.webp` |
| 2 | Mascot / branding | `milwautea-02-mascot.webp` |
| 3 | Menu design | `milwautea-03-menu.webp` |
| 4 | Social media graphic | `milwautea-04-social.webp` |
| 5 | Promotional graphic / flyer | `milwautea-05-promo.webp` |
| 6 | Store or brand mockup | `milwautea-06-mockup.webp` |
| 7 | Instagram Reel | `milwautea-07-reel.mp4` (video, see below) |
| 8 | Promotional video | `milwautea-08-promo-video.mp4` (video, see below) |

## Video support

**Not implemented. Do not add video files yet.**

The gallery renders images only. `ProjectImage` is `{ src, alt }`, the
thumbnail is an `<img>`, and the lightbox is an `<img>`. Putting an `.mp4` in
an `images` array produces a broken image icon, not a player.

Slots 7 and 8 above are reserved for when support is added. Until then,
MilwauTea ships six images and the Video Production claim on its card has no
visual evidence behind it.

### What adding support would take

Three files, roughly 40 lines:

1. **`src/types/project.ts`** — add an optional `poster?: string` to
   `ProjectImage`. Its presence marks the entry as a video, so no separate
   type or discriminated union is needed.
2. **`src/components/ui/ScreenshotGallery.tsx`** — when `poster` is set,
   render the poster as the thumbnail with a small play badge over it. Using
   a poster image rather than a `<video>` element keeps the grid cheap to
   load.
3. **`src/components/ui/Lightbox.tsx`** — when `poster` is set, render
   `<video controls playsInline>` instead of `<img>`.

The one subtlety is in the lightbox. Its focus trap currently keeps Tab on
the close button, because that is the only focusable element inside. Video
controls are focusable, so that trap has to be relaxed to cycle between the
video and the close button instead of pinning focus.

Every video also needs a poster image, or the thumbnail will be blank until
the file loads.

### Whether it is worth doing

Probably yes, but only for one or two short clips.

The case for it: MilwauTea's card claims Video Production as a skill and
short-form video as a deliverable. Without playable video that claim rests on
the copy alone, and it is the only skill on the page with no way to show it.

The case against: video files are far heavier than anything else on the site.
A thirty second reel is commonly 5 to 20MB, against 38KB for the profile
photo and roughly 40KB for a screenshot. Two clips could outweigh the entire
rest of the site several times over.

If it goes ahead: cap it at two clips, keep each under 5MB, export at 720p
rather than 1080p, and generate a poster for each.

The cheaper alternative, needing no code at all, is to use slot 6 for a video
still and link out to the Reel on Instagram. That evidences the work at zero
cost but sends the visitor away from the portfolio, which is why it is the
fallback rather than the recommendation.

## Asset collection checklist

Working notes for gathering screenshots. Not rendered anywhere on the site.

**MilwauTea** (target 6 images + 2 videos)

- [ ] 1. Logo
- [ ] 2. Mascot / branding
- [ ] 3. Menu design
- [ ] 4. Social media graphic
- [ ] 5. Promotional graphic / flyer
- [ ] 6. Store or brand mockup
- [ ] 7. Instagram Reel *(video, blocked on support)*
- [ ] 8. Promotional video *(video, blocked on support)*

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
