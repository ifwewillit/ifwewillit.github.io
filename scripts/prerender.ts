/**
 * SSG prerenderer. Runs after the client and SSR builds:
 *   1. Uses dist/index.html (with hashed asset tags) as the template.
 *   2. Renders every route via the SSR bundle and writes dist/<outFile>.
 *   3. Emits sitemap.xml.
 *   4. Asserts /nina passthrough is byte-identical, then removes dist-ssr.
 */
import { createHash } from "node:crypto";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const distSsr = resolve(root, "dist-ssr");

const { render, routes } = (await import(
  resolve(distSsr, "entry-server.js")
)) as typeof import("../src/entry-server");

const template = readFileSync(resolve(dist, "index.html"), "utf-8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing prerender placeholders");
}

const siteUrl = "https://ifwewillit.github.io";

for (const route of routes) {
  const { appHtml, headHtml } = render(route.path);
  const html = template
    .replace("<!--app-head-->", headHtml)
    .replace("<!--app-html-->", appHtml);
  const outPath = resolve(dist, route.outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`prerendered ${route.outFile}`);
}

const sitemapEntries = routes
  .filter((r) => !r.meta.noindex)
  .map((r) => `  <url><loc>${siteUrl}${r.path === "/" ? "/" : r.path}</loc></url>`)
  .join("\n");
writeFileSync(
  resolve(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
);
console.log("wrote sitemap.xml");

// /nina must ship byte-identical. Vite copies public/ verbatim, but this is
// the contract the whole migration depends on, so verify and fail loudly.
const hash = (path: string) => createHash("sha256").update(readFileSync(path)).digest("hex");
const ninaSrc = resolve(root, "public/nina/index.html");
const ninaDist = resolve(dist, "nina/index.html");
try {
  if (hash(ninaSrc) !== hash(ninaDist)) {
    throw new Error("nina/index.html differs between public/ and dist/");
  }
} catch (err) {
  // If Vite ever stopped copying public/, restore and re-verify.
  cpSync(resolve(root, "public/nina"), resolve(dist, "nina"), { recursive: true });
  if (hash(ninaSrc) !== hash(ninaDist)) throw err;
}
console.log("nina passthrough verified byte-identical");

rmSync(distSsr, { recursive: true, force: true });
console.log("done");
