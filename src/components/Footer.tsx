import { EMAIL, INSTAGRAM_URL, sr } from "@/content/sr";
import Logo from "./Logo";
import { SwashText } from "./ui";
import styles from "./Footer.module.scss";

const { footer, nav } = sr;

export default function Footer() {
  const phrase = (
    <span className={styles.phrase}>
      <SwashText text={footer.marquee} />
      <span className={styles.star} aria-hidden="true">
        ✦
      </span>
    </span>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.rights}>
            © {new Date().getFullYear()} Enterijer Prijović. {footer.rights}
          </p>
          <p className={styles.rights}>
            {footer.credit.label}{" "}
            <a href={footer.credit.href} target="_blank" rel="noopener" className={styles.credit}>
              {footer.credit.name}
            </a>
          </p>
        </div>

        <div className={styles.group}>
          <p className={styles.label}>{footer.menuLabel}</p>
          <ul>
            {[...nav.links, nav.contact].map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.group}>
          <p className={styles.label}>{footer.followLabel}</p>
          <ul>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.group}>
          <p className={styles.label}>{footer.contactLabel}</p>
          <ul>
            <li>{footer.location}</li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <a href="#kontakt" className={styles.marquee} aria-label={footer.marquee.replace(/[{}]/g, "")}>
        <span className={styles.track} aria-hidden="true">
          {phrase}
          {phrase}
          {phrase}
          {phrase}
        </span>
      </a>
    </footer>
  );
}
