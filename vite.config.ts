import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Dev-only middleware: production is prerendered to real `.html` files, but in
 * dev we serve the SPA shell for every page URL and let entry-client render
 * the matching page from location.pathname. /nina/** is real static content in
 * public/ and must never be rewritten.
 */
function htmlFallback(): Plugin {
  return {
    name: "html-fallback",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = (req.url ?? "/").split("?")[0];
        const isPage = url === "/" || url.endsWith("/") || url.endsWith(".html");
        if (isPage && !url.startsWith("/nina/")) {
          req.url = "/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlFallback()],
  base: "/",
  build: {
    assetsDir: "assets",
  },
});
