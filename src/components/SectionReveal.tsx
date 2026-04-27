import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mounts a single IntersectionObserver that fades in <section> elements
 * and any [data-reveal] node as they enter the viewport. Re-scans on
 * every route change so newly-mounted pages get observed.
 */
export const SectionReveal = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (el: Element) => el.classList.add("is-visible");

    if (reduce) {
      // Just show everything immediately
      document.querySelectorAll("section, [data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("section:not(.is-visible), [data-reveal]:not(.is-visible)")
        .forEach((el) => {
          // If already in view on mount (e.g. above the fold), reveal soon with a tiny stagger
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
            // small delay so the page paints first
            requestAnimationFrame(() => reveal(el));
          } else {
            io.observe(el);
          }
        });
    };

    // Initial scan after paint
    const raf = requestAnimationFrame(scan);

    // Re-scan when DOM changes (e.g. async content)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default SectionReveal;
