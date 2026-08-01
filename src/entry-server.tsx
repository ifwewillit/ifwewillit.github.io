import { renderToString } from "react-dom/server";
import { SiteLayout } from "./layouts/SiteLayout";
import { matchRoute, routes } from "./routes";
import { site } from "./content/site";
import { themeInitScript } from "./theme/theme-init";

export { routes };

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Operations Executive & Systems Consultant",
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
});

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function render(path: string): { appHtml: string; headHtml: string } {
  const route = matchRoute(path);
  const Page = route.component;
  const appHtml = renderToString(
    <SiteLayout path={route.path}>
      <Page />
    </SiteLayout>,
  );

  const canonical = `${site.url}${route.path === "/" ? "/" : route.path}`;
  const title = escapeHtml(route.meta.title);
  const description = escapeHtml(route.meta.description);
  const ogImage = `${site.url}${route.meta.ogImage ?? "/images/headshot.jpg"}`;

  const headParts = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    route.meta.noindex ? `<meta name="robots" content="noindex">` : "",
    `<link rel="canonical" href="${canonical}">`,
    `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${ogImage}">`,
    route.path === "/"
      ? `<script type="application/ld+json">${personJsonLd}</script>`
      : "",
    `<script>${themeInitScript}</script>`,
  ];

  return { appHtml, headHtml: headParts.filter(Boolean).join("\n    ") };
}
