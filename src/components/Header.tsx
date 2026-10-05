"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { sr } from "@/content/sr";
import Logo from "./Logo";
import { getLenis } from "./SmoothScroll";
import styles from "./Header.module.scss";

const { nav } = sr;
const noop = () => () => {};
const subscribeScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

export default function Header() {
  const [open, setOpen] = useState(false);
  // Meni se renderuje u <body>: heroj je zakačen (sticky), pa bi ga inače
  // sledeće sekcije prekrile. Portal postoji tek posle hidratacije.
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  // Posle malo skrola meni dobija belu podlogu i ostaje vidljiv na vrhu.
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 24, () => false);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (open) getLenis()?.stop();
    else getLenis()?.start();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lenis mora biti pokrenut pre nego što obradi klik na sidro.
  const closeAndGo = () => {
    getLenis()?.start();
    setOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ""}`}>
      <div className={styles.bar}>
        <a href="#" className={styles.logo} aria-label="Enterijer Prijović — početak">
          <Logo />
        </a>
        <nav className={styles.nav} aria-label="Glavni meni">
          {nav.links.map((link, i) => (
            <a key={link.href} href={link.href} style={{ animationDelay: `${0.9 + i * 0.08}s` }}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={nav.contact.href} className={styles.contact}>
          {nav.contact.label}
        </a>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobilni-meni"
          onClick={() => setOpen(true)}
        >
          {nav.menu}
        </button>
      </div>

      {mounted &&
        createPortal(
          <div id="mobilni-meni" className={`${styles.overlay} ${open ? styles.open : ""}`} aria-hidden={!open}>
            <div className={styles.overlayBar}>
              <Logo />
              <button type="button" className={styles.toggle} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {nav.close}
              </button>
            </div>
            <nav className={styles.overlayNav} aria-label="Mobilni meni">
              {[...nav.links, nav.contact].map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeAndGo}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${0.15 + i * 0.06}s` : "0s" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
