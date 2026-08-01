import type { ReactNode } from "react";

export function ProseLayout({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <article>
      <header className="page-header">
        <div className="container-narrow">
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
      </header>
      <div className="container-narrow">{children}</div>
    </article>
  );
}
