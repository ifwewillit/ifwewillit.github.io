export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** category chip, e.g. "Infrastructure" */
  label: string;
  title: string;
  summary: string;
  results: Stat[];
  artifacts: string[];
}

export interface Essay {
  slug: string;
  title: string;
  date: string;
  blurb: string;
}

export interface ExternalArticle {
  title: string;
  date: string;
  readTime: string;
  url: string;
  blurb: string;
}

export type BuildTheme = "ai" | "data" | "platform" | "mobile" | "web";

export interface BuildProject {
  id: string;
  theme: BuildTheme;
  title: string;
  oneLiner: string;
  description: string;
  stack: string[];
  /** internal link to a deeper case study, when one exists */
  caseStudyHref?: string;
  /** external link — public projects only */
  externalHref?: string;
  externalLabel?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
}
