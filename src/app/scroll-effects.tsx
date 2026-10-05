"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("has-js");

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    let observer: IntersectionObserver | undefined;
    let lenis: Lenis | undefined;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.dataset.revealed = "true");
    } else {
      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        duration: 1.1,
        wheelMultiplier: 0.9,
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.revealed = "true";
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      items.forEach((item) => observer?.observe(item));
    }

    return () => {
      observer?.disconnect();
      lenis?.destroy();
      root.classList.remove("has-js");
    };
  }, []);

  return null;
}
