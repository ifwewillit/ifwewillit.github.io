import { useState } from "react";
import type { BuildProject, BuildTheme } from "../content/types";
import { Tag } from "./Tag";

const THEMES: { key: BuildTheme | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI & LLM systems" },
  { key: "data", label: "Data pipelines" },
  { key: "platform", label: "Platforms" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
];

const THEME_LABEL: Record<BuildTheme, string> = {
  ai: "AI / LLM",
  data: "Data",
  platform: "Platform",
  mobile: "iOS",
  web: "Web",
};

/**
 * All cards are server-rendered (SEO); filtering only toggles visibility.
 */
export function ProjectExplorer({ projects }: { projects: BuildProject[] }) {
  const [filter, setFilter] = useState<BuildTheme | "all">("all");

  return (
    <div>
      <div className="explorer-filters" role="group" aria-label="Filter projects by theme">
        {THEMES.map((t) => (
          <Tag key={t.key} onClick={() => setFilter(t.key)} active={filter === t.key}>
            {t.label}
          </Tag>
        ))}
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="project-card"
            hidden={filter !== "all" && p.theme !== filter}
          >
            <div className="project-card-top">
              <h3>{p.title}</h3>
              <Tag>{THEME_LABEL[p.theme]}</Tag>
            </div>
            <p className="project-desc">
              <strong>{p.oneLiner}</strong> {p.description}
            </p>
            <div className="project-stack">
              {p.stack.map((s) => (
                <Tag key={s} tone="neutral">
                  {s}
                </Tag>
              ))}
            </div>
            {(p.caseStudyHref || p.externalHref) && (
              <div className="project-links">
                {p.caseStudyHref && <a href={p.caseStudyHref}>Case study →</a>}
                {p.externalHref && (
                  <a href={p.externalHref} rel="noopener">
                    {p.externalLabel ?? "Visit →"}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
