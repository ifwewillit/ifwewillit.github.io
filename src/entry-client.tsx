import { hydrateRoot, createRoot } from "react-dom/client";
import { SiteLayout } from "./layouts/SiteLayout";
import { matchRoute } from "./routes";

import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/utilities.css";
import "./styles/components.css";

const route = matchRoute(window.location.pathname);
const Page = route.component;
const app = (
  <SiteLayout path={route.path}>
    <Page />
  </SiteLayout>
);

const root = document.getElementById("root")!;
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  // Dev server: no prerendered HTML — replicate the inline theme script, then
  // client-render. (In production the script is injected into <head> by the
  // prerenderer and runs before paint.)
  const d = document.documentElement;
  d.classList.add("js");
  try {
    const t = localStorage.getItem("theme");
    if (t === "dark" || t === "light") d.dataset.theme = t;
  } catch {
    /* private mode */
  }
  createRoot(root).render(app);
}
