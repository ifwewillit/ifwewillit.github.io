import type { ReactNode } from "react";
import { essays, getEssay } from "../content/essays";
import { Pager } from "./Pager";

export function ArticleLayout({ slug, children }: { slug: string; children: ReactNode }) {
  const essay = getEssay(slug);
  const index = essays.findIndex((e) => e.slug === slug);
  const prev = essays[index - 1];
  const next = essays[index + 1];

  return (
    <article>
      <header className="article-header">
        <div className="container-narrow">
          <span className="article-date">{essay.date}</span>
          <h1>{essay.title}</h1>
        </div>
      </header>

      <div className="container-narrow">
        <div className="prose" style={{ paddingTop: "var(--space-8)" }}>
          {children}
        </div>

        <Pager
          prev={
            prev
              ? { href: `/writing/${prev.slug}.html`, title: prev.title }
              : { href: "/writing/", title: "All Writing" }
          }
          next={
            next
              ? { href: `/writing/${next.slug}.html`, title: next.title }
              : { href: "/writing/", title: "All Writing" }
          }
        />
      </div>
    </article>
  );
}
