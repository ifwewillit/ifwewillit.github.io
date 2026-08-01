import type { ReactNode } from "react";
import { caseStudies, getCaseStudy } from "../content/case-studies";
import { StatBlock } from "../components/StatBlock";
import { Tag } from "../components/Tag";
import { Pager } from "./Pager";

/**
 * Shared case-study shell: header from metadata, body sections as children,
 * then results, artifacts, and prev/next derived from the case-study order.
 */
export function CaseStudyLayout({ slug, children }: { slug: string; children: ReactNode }) {
  const study = getCaseStudy(slug);
  const index = caseStudies.findIndex((s) => s.slug === slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <article>
      <header className="case-header">
        <div className="container-narrow">
          <Tag>{study.label}</Tag>
          <h1 style={{ marginTop: "var(--space-4)" }}>{study.title}</h1>
          <p className="lede">{study.summary}</p>
        </div>
      </header>

      <div className="container-narrow">
        {children}

        <section className="case-section">
          <h2>Results</h2>
          <StatBlock stats={study.results} animate />
        </section>

        <section className="case-section">
          <h2>Artifacts</h2>
          <ul>
            {study.artifacts.map((artifact) => (
              <li key={artifact}>{artifact}</li>
            ))}
          </ul>
        </section>

        <Pager
          prev={
            prev
              ? { href: `/work/${prev.slug}.html`, title: prev.title }
              : { href: "/work/", title: "All Case Studies" }
          }
          next={
            next
              ? { href: `/work/${next.slug}.html`, title: next.title }
              : { href: "/work/", title: "All Case Studies" }
          }
        />
      </div>
    </article>
  );
}
