import type { Essay, ExternalArticle } from "./types";

/**
 * Published on LinkedIn — a yearly series on the HR + IT + AI leadership arc.
 * Newest first.
 */
export const linkedInArticles: ExternalArticle[] = [
  {
    title:
      "The Real Measure of an AI Leader Isn't What You Build. It's What Your Team Builds Without You.",
    date: "July 2026",
    readTime: "6 min read",
    url: "https://www.linkedin.com/pulse/real-measure-ai-leader-isnt-what-you-build-its-your-o-neil-shrm-cp-1xmoc/",
    blurb:
      "A year of receipts: the predictive systems shipped, 115,000 AI voice conversations, a CEO who ships code on weekends — and why the real proof of AI leadership is what your team builds when you're not in the room.",
  },
  {
    title: "The Evolution Continues: From HR-Tech Bridge to Human-AI Architect",
    date: "July 2025",
    readTime: "5 min read",
    url: "https://www.linkedin.com/pulse/evolution-continues-from-hr-tech-bridge-human-ai-will-o-neil-shrm-cp-tzh6c/",
    blurb:
      "Bridge-builder → systems architect → transformation orchestrator: why the emerging 'People and AI Operations' leader is a new category, not a fancy title.",
  },
  {
    title:
      "Bridging the Gap: When HR Expertise Meets IT Innovation — And Why Being a Jack-of-All-Trades Is a Strategic Advantage",
    date: "December 2024",
    readTime: "4 min read",
    url: "https://www.linkedin.com/pulse/bridging-gap-when-hr-expertise-meets-innovationand-o-neil-shrm-cp-dy4gc/",
    blurb:
      "The case for versatility: leaders who straddle HR and IT see the opportunities specialists miss — and keep technology serving people rather than replacing them.",
  },
];

/** Order defines prev/next navigation and listing order. */
export const essays: Essay[] = [
  {
    slug: "building-functions-from-zero",
    title: "How I Build Functions from Zero",
    date: "2025",
    blurb:
      "The pattern behind building IT, People Ops, and AI capability from nothing: find the pain, document the current state, solve one problem at a time.",
  },
  {
    slug: "vendor-sprawl",
    title: "Vendor Sprawl, Access Governance, and Why It Fails",
    date: "2025",
    blurb:
      "Companies guess they use 30 SaaS tools. The real number is usually 70+. Why quarterly access reviews fail and what actually works.",
  },
  {
    slug: "ai-governance",
    title: "AI in Ops: Governance That People Actually Follow",
    date: "2025",
    blurb:
      "Effective AI governance fits on one page and answers three questions. Everything longer gets ignored.",
  },
  {
    slug: "metrics-enablement",
    title: "Metrics That Matter for Enablement",
    date: "2025",
    blurb:
      "Ticket counts reward complexity. Response times reward being reactive. Measure what you're enabling instead.",
  },
];

export function getEssay(slug: string): Essay {
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) throw new Error(`Unknown essay: ${slug}`);
  return essay;
}
