"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { sr } from "@/content/sr";
import { Arrow, Heading, delay } from "./ui";
import styles from "./Projects.module.scss";

const { projects } = sr;
const items = projects.items;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const [{ index, prev }, setSlide] = useState({ index: 0, prev: 0 });
  const touchX = useRef<number | null>(null);
  const changed = index !== prev;
  const item = items[index];

  const go = (dir: 1 | -1) =>
    setSlide((s) => ({ index: (s.index + dir + items.length) % items.length, prev: s.index }));

  // Sve slike su u DOM-u (pa se učitaju unapred); vidljive su trenutna i prethodna.
  const layerClass = (i: number) =>
    [
      styles.layer,
      i === index && styles.current,
      i === index && changed && styles.enter,
      i === prev && changed && styles.previous,
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <section className={`${styles.projects} pin`} data-pin aria-roledescription="carousel">
      <header className={styles.head} data-reveal>
        <p className="label r-fade">{projects.label}</p>
        <Heading lines={projects.lines} />
      </header>

      <div className={styles.slider} data-reveal>
        <div
          className={`${styles.main} r-img`}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {items.map((p, i) => (
            <div key={p.title} className={layerClass(i)}>
              <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 38vw" placeholder="blur" />
            </div>
          ))}
        </div>

        <div className={`${styles.info} r-fade`} style={delay(0.3)} aria-live="polite">
          <div key={index} className={changed ? styles.textEnter : undefined}>
            <p className={styles.place}>{item.place}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
          <p key={`n${index}`} className={`${styles.note} ${changed ? styles.textEnter : ""}`}>
            {item.note}
          </p>
        </div>

        <div className={`${styles.side} r-fade`} style={delay(0.45)}>
          <p className={styles.counter}>
            {pad(index + 1)}/{pad(items.length)}
          </p>
          <div className={styles.detail}>
            {items.map((p, i) => (
              <div key={p.title} className={layerClass(i)}>
                <Image src={p.detail.src} alt={p.detail.alt} fill sizes="(max-width: 900px) 40vw, 14vw" />
              </div>
            ))}
          </div>
          <p key={index} className={`${styles.caption} ${changed ? styles.textEnter : ""}`}>
            {item.caption}
          </p>
          <div className={styles.arrows}>
            <button type="button" onClick={() => go(-1)} aria-label={projects.prev}>
              <Arrow className={styles.flip} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={projects.next}>
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
