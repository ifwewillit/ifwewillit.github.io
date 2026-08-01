import { navItems } from "../content/site";
import { ThemeToggle } from "../theme/ThemeToggle";

export function Nav({ activePath }: { activePath: string }) {
  return (
    <nav className="site-nav" aria-label="Main">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Will O'Neil — home">
          WO
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activePath.startsWith(item.match) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
