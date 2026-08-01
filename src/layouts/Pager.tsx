interface PagerLink {
  href: string;
  title: string;
}

export function Pager({ prev, next }: { prev?: PagerLink; next?: PagerLink }) {
  return (
    <nav className="pager" aria-label="Adjacent pages">
      {prev && (
        <a href={prev.href}>
          ← Previous
          <strong>{prev.title}</strong>
        </a>
      )}
      {next && (
        <a href={next.href} className="pager-next">
          Next →
          <strong>{next.title}</strong>
        </a>
      )}
    </nav>
  );
}
