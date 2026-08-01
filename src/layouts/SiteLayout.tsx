import type { ReactNode } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function SiteLayout({ path, children }: { path: string; children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav activePath={path} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
