import { useEffect, useRef } from "react";

/**
 * SSR renders the final value (correct without JS, correct for crawlers).
 * After hydration the number counts up from zero on first intersection.
 * Non-numeric prefixes/suffixes ($, %, +, x) are preserved.
 */
export function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num.replace(/,/g, ""));
    if (!isFinite(target)) return;
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const useCommas = num.includes(",");

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      return prefix + (useCommas ? Number(fixed).toLocaleString("en-US") : fixed) + suffix;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = format(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{value}</span>;
}
