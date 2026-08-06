/**
 * A still image in a project gallery.
 * `src` is a path under /public (e.g. "/images/milwautea/milwautea-01-logo.webp").
 */
export type ProjectImage = {
  type: 'image';
  src: string;
  alt: string;
};

/**
 * A video in a project gallery.
 *
 * `poster` is required: it is the gallery thumbnail and the frame shown
 * before playback, so the grid never loads video data just to render.
 * `title` names the video for assistive technology and the lightbox label.
 */
export type ProjectVideo = {
  type: 'video';
  src: string;
  poster: string;
  title: string;
  alt: string;
};

/**
 * Anything that can appear in a project gallery.
 *
 * The `type` field is an explicit discriminant rather than something inferred
 * from the shape, so a video entry missing its poster fails to compile.
 */
export type ProjectMedia = ProjectImage | ProjectVideo;

/** A labelled block of supporting detail inside a project card. */
export type ProjectDetail = {
  label: string;
  body: string;
};

/**
 * One grouped discipline within a long-form case study, replacing the flat
 * workflow list used by the shorter project cards.
 */
export type CaseStudySection = {
  title: string;
  body: string;
  items: string[];
};

/** A portfolio project as presented on the Projects page. */
export type Project = {
  id: string;
  title: string;
  /**
   * Short eyebrow shown above the title, e.g. "Featured Case Study".
   * Omit for projects that carry no special billing.
   */
  label?: string;
  /** Gives the card a more prominent heading. Use sparingly. */
  featured?: boolean;
  positioning: string;
  objective?: string;
  /** Replaces the Objective block on case studies. */
  challenge?: string;
  role: string;
  skills: string[];
  tools: string[];
  /** Flat workflow list. Used by the shorter project cards. */
  approach?: string[];
  /** Grouped discipline sections. Used instead of `approach` by case studies. */
  caseStudy?: CaseStudySection[];
  /** Short closing paragraph, shown after the case study sections. */
  reflection?: string;
  /** One or two sentences introducing what the gallery shows. */
  galleryIntro: string;
  /** Gallery contents. Images and videos may be mixed. Empty until real evidence is added. */
  media: ProjectMedia[];
};
