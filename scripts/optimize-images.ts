/**
 * One-time image optimization: re-encode JPEGs (mozjpeg, max 1600w) in place,
 * emit .webp siblings, and generate apple-touch-icon.png from the favicon
 * colors. Run with: npm run optimize-images
 */
import { readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const imagesDir = resolve(import.meta.dirname, "../public/images");
const publicDir = resolve(import.meta.dirname, "../public");

for (const file of readdirSync(imagesDir)) {
  if (!file.endsWith(".jpg")) continue;
  const path = resolve(imagesDir, file);
  const before = statSync(path).size;

  const resized = sharp(path).rotate().resize({ width: 1600, withoutEnlargement: true });
  const jpgBuf = await resized.clone().jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  const webpBuf = await resized.clone().webp({ quality: 78 }).toBuffer();

  if (jpgBuf.length < before) {
    await sharp(jpgBuf).toFile(path + ".tmp");
    const { renameSync } = await import("node:fs");
    renameSync(path + ".tmp", path);
  }
  await sharp(webpBuf).toFile(path.replace(/\.jpg$/, ".webp"));

  const after = statSync(path).size;
  console.log(
    `${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (+ webp ${(webpBuf.length / 1024).toFixed(0)}KB)`,
  );
}

// apple-touch-icon: warm background with "WO" — rendered from an SVG string.
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#faf9f7"/>
  <text x="90" y="121" text-anchor="middle" font-family="Georgia, serif" font-weight="600" font-size="78" fill="#8b4513">WO</text>
</svg>`;
await sharp(Buffer.from(iconSvg)).png().toFile(resolve(publicDir, "apple-touch-icon.png"));
console.log("wrote apple-touch-icon.png");
