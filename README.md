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

## Adding project media

Everything below is the complete process. Images and videos are added by editing
**one file**, `src/data/projects.ts`. No component ever needs changing.

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

### 4. Adding an image

Gallery contents live in the `media` array for that project in
`src/data/projects.ts`. Every entry carries an explicit `type`.

```ts
media: [
  { type: 'image', src: '/images/milwautea/milwautea-01-logo.webp', alt: 'MilwauTea logo in its final form' },
],
```

| Field | Required | Notes |
| --- | --- | --- |
| `type` | yes | Must be `'image'` |
| `src` | yes | Path under `/public`, without `public` |
| `alt` | yes | Describes the subject. Read by screen readers and used as the lightbox label |

### 5. Adding a video

**Never put an `.mp4` in an image entry.** It will render as a broken image,
not a player. Videos need `type: 'video'` and their own fields.

```ts
media: [
  {
    type: 'video',
    src: '/images/milwautea/milwautea-07-reel.mp4',
    poster: '/images/milwautea/milwautea-07-reel-poster.webp',
    title: 'MilwauTea Instagram Reel',
    alt: 'Short-form Instagram Reel promoting the MilwauTea launch',
  },
],
```

| Field | Required | Notes |
| --- | --- | --- |
| `type` | yes | Must be `'video'` |
| `src` | yes | The `.mp4` |
| `poster` | yes | A `.webp` still. It is the grid thumbnail and the frame shown before playback |
| `title` | yes | Names the video. Becomes the thumbnail label ("Play video: …") and the lightbox label |
| `alt` | yes | Describes the poster image |

The type system enforces this. A video entry missing its `poster` or `title`
fails the type check rather than shipping broken.

**Poster images are not optional.** Without one the thumbnail is blank, and
the grid would have to download video data just to draw a frame.

#### Video encoding

| | |
| --- | --- |
| **Container / codecs** | MP4 with H.264 video and AAC audio |
| **Resolution** | 720p preferred. 1080p is rarely worth the extra weight at gallery size |
| **File size** | 5 MB maximum per video |
| **Count** | Two videos maximum for MilwauTea. No other project has video slots |
| **Poster** | One `.webp` per video, same naming plus `-poster` |

For scale: the profile photo is 38 KB and a screenshot is roughly 40 KB. A
single careless video can outweigh the rest of the site many times over, so
the 5 MB ceiling matters.

#### Playback behaviour

- `preload="none"`, so the file is only fetched once the lightbox opens.
  Browsing the page costs nothing.
- No autoplay, no loop, no muted background playback.
- Native `controls`, so playback works with the visitor's own accessibility
  settings rather than a custom player.
- `playsInline`, so iOS plays in place instead of going fullscreen.

#### Accessibility

- Thumbnails are buttons. Enter and Space both activate them.
- A video thumbnail announces as "Play video: {title}", so it is clear that
  activating it starts a video rather than opening an image.
- The poster `<img>` inside a video thumbnail has an empty `alt`, so screen
  readers announce the button label once rather than twice.
- Inside the lightbox, Tab and Shift+Tab cycle between the video controls and
  the Close button. Escape closes and returns focus to the thumbnail.
- The focus trap queries focusable elements at runtime, so it adapts to the
  extra control a video adds. Do not replace it with a fixed list.

### 6. Ordering and replacing

Display order is the order of the `media` array, not the filename. The
numeric prefix is a convention for humans; reordering the array is what moves
an item.

- **To add**, drop the file in the project directory and append an entry.
- **To replace**, overwrite the file and update `alt` or `title` if the
  subject changed. If the filename changes, update `src` (and `poster`).
- **To remove**, delete the entry and the file. An empty array is valid and
  renders neutral empty frames.

### 7. Recommended count per project

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

## Asset collection checklist

Working notes for gathering screenshots. Not rendered anywhere on the site.

**MilwauTea** (target 6 images + 2 videos)

- [ ] 1. Logo
- [ ] 2. Mascot / branding
- [ ] 3. Menu design
- [ ] 4. Social media graphic
- [ ] 5. Promotional graphic / flyer
- [ ] 6. Store or brand mockup
- [ ] 7. Instagram Reel *(video + poster)*
- [ ] 8. Promotional video *(video + poster)*

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
