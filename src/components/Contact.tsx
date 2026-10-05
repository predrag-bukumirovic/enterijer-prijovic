"use client";

import type { FormEvent } from "react";
import { EMAIL, sr } from "@/content/sr";
import { Arrow, Heading, delay } from "./ui";
import styles from "./Contact.module.scss";

const { contact } = sr;
const { fields } = contact;

/** Dok se ne poveže slanje sa servera, forma otvara email sa popunjenim upitom. */
function openMail(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const body = [
    `${fields.name}: ${get("name")}`,
    `${fields.phone}: ${get("phone")}`,
    `${fields.email}: ${get("email")}`,
    "",
    get("message"),
  ].join("\n");
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `${contact.subject} — ${get("name")}`,
  )}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.intro} data-reveal>
        <p className="label r-fade">{contact.label}</p>
        <Heading lines={contact.lines} />
        <p className="body-text r-fade" style={delay(0.35)}>
          {contact.text}
        </p>
        <a href={`mailto:${EMAIL}`} className={`${styles.email} r-fade`} style={delay(0.45)}>
          {EMAIL}
        </a>
      </div>

      <form className={styles.form} onSubmit={openMail} data-reveal>
        <label className={`${styles.field} ${styles.full} r-fade`} style={delay(0.1)}>
          <span className={styles.sr}>{fields.name}</span>
          <input name="name" placeholder={fields.name} autoComplete="name" required />
        </label>
        <label className={`${styles.field} r-fade`} style={delay(0.2)}>
          <span className={styles.sr}>{fields.phone}</span>
          <input name="phone" type="tel" placeholder={fields.phone} autoComplete="tel" />
        </label>
        <label className={`${styles.field} r-fade`} style={delay(0.25)}>
          <span className={styles.sr}>{fields.email}</span>
          <input name="email" type="email" placeholder={fields.email} autoComplete="email" />
        </label>
        <label className={`${styles.message} ${styles.full} r-fade`} style={delay(0.35)}>
          <span className={styles.sr}>{fields.message}</span>
          <textarea name="message" placeholder={fields.message} rows={4} required />
        </label>
        <div className={`${styles.full} r-fade`} style={delay(0.45)}>
          <button type="submit" className={`text-link ${styles.submit}`}>
            {contact.submit}
            <Arrow />
          </button>
        </div>
      </form>
    </section>
  );
}
