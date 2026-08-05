/**
 * A single screenshot or image belonging to a portfolio project.
 * `src` is a path under /public (e.g. "/images/milwautea/milwautea-1.png").
 */
export type ProjectImage = {
  src: string;
  alt: string;
};

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
  objective: string;
  role: string;
  skills: string[];
  tools: string[];
  /** Flat workflow list. Used by the shorter project cards. */
  approach?: string[];
  /** Grouped discipline sections. Used instead of `approach` by case studies. */
  caseStudy?: CaseStudySection[];
  /** Short closing paragraph, shown after the case study sections. */
  reflection?: string;
  /** Screenshots. Empty until real evidence is added. */
  images: ProjectImage[];
};
