import Image from "next/image";
import { sr } from "@/content/sr";
import { Heading, TextLink, delay } from "./ui";
import styles from "./About.module.scss";

const { about } = sr;

export default function About() {
  const [big, small] = about.images;

  return (
    <section id="o-nama" className={styles.about}>
      <div className={styles.text} data-reveal>
        <p className="label r-fade">{about.label}</p>
        <div className={styles.body}>
          <Heading lines={about.lines} />
          <p className="body-text r-fade" style={delay(0.35)}>
            {about.text}
          </p>
          <TextLink href={about.cta.href} label={about.cta.label} className="r-fade" style={delay(0.5)} />
        </div>
      </div>

      <div className={styles.images} data-reveal>
        <div className={`${styles.big} r-img`}>
          <Image src={big.src} alt={big.alt} fill sizes="(max-width: 900px) 62vw, 28vw" placeholder="blur" />
        </div>
        <div className={`${styles.small} r-img`} style={delay(0.2)}>
          <Image src={small.src} alt={small.alt} fill sizes="(max-width: 900px) 34vw, 18vw" placeholder="blur" />
        </div>
      </div>
    </section>
  );
}
