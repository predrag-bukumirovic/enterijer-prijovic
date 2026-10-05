import Image from "next/image";
import { sr } from "@/content/sr";
import { Arrow, Heading, TextLink, delay } from "./ui";
import styles from "./InstagramFeed.module.scss";

const { instagram } = sr;

export default function InstagramFeed() {
  return (
    <section id="instagram" className={styles.instagram}>
      <header className={styles.head} data-reveal>
        <p className="label r-fade">{instagram.label}</p>
        <Heading lines={instagram.lines} />
      </header>

      <ul className={styles.grid} data-reveal>
        {instagram.items.map((item, i) => (
          <li key={item.href} className={styles.item}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <div className={`${styles.image} r-img`} style={delay(0.1 + i * 0.12)}>
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 50vw, 26vw" />
                <div className={styles.hover}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className={styles.more}>
                    {instagram.more}
                    <Arrow />
                  </span>
                </div>
              </div>
              <h3 className={`${styles.title} r-fade`} style={delay(0.4 + i * 0.12)}>
                {item.title}
              </h3>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.cta} data-reveal>
        <TextLink href={instagram.cta.href} label={instagram.cta.label} className="r-fade" external />
      </div>
    </section>
  );
}
