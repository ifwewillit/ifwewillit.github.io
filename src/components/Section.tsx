import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  eyebrow?: string;
  intro?: string;
  width?: "default" | "narrow";
  children: ReactNode;
}

export function Section({ title, eyebrow, intro, width = "default", children }: SectionProps) {
  return (
    <section className="section">
      <div className={width === "narrow" ? "container-narrow" : "container"}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
