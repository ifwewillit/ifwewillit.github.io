import { site } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-tag">
          © Will O'Neil · Designed and built from scratch — like everything else on this site.
        </p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} rel="noopener">
            LinkedIn
          </a>
          <a href="/now.html">Now</a>
        </div>
      </div>
    </footer>
  );
}
