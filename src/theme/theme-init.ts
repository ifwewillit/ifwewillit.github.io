/**
 * Inline <head> script, injected by the prerenderer before any stylesheet.
 * Sets the stored theme pre-paint (no flash) and marks JS as available so
 * scroll-reveal styles only hide content when hydration will run.
 */
export const themeInitScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")d.dataset.theme=t;}catch(e){}})();`;
