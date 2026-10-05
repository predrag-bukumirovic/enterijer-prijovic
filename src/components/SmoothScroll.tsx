"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/**
 * Glatki skrol (Lenis), otkrivanje sadržaja pri skrolu ([data-reveal] dobija
 * klasu .is-in) i merenje visine zakačenih sekcija ([data-pin] → --pin-h).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.09 });
    }

    // Element se otkriva kad pređe donjih 22% ekrana ili kad je ceo vidljiv
    // (bitno za donje ivice zakačenih sekcija, koje nikad ne pređu tu liniju).
    const show = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      for (const entry of entries) {
        const ready = observer === full ? entry.intersectionRatio >= 0.99 : entry.isIntersecting;
        if (!ready) continue;
        entry.target.classList.add("is-in");
        early.unobserve(entry.target);
        full.unobserve(entry.target);
      }
    };
    const early = new IntersectionObserver(show, { rootMargin: "0px 0px -22% 0px" });
    const full = new IntersectionObserver(show, { threshold: 0.99 });
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      early.observe(el);
      full.observe(el);
    });

    const pins = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        el.style.setProperty("--pin-h", `${el.offsetHeight}px`);
      }
    });
    document.querySelectorAll("[data-pin]").forEach((el) => pins.observe(el));

    return () => {
      early.disconnect();
      full.disconnect();
      pins.disconnect();
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
