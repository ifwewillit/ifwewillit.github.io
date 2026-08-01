import type { Essay } from "./types";

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
