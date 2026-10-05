"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./page.module.css";

import beogradHall from "@/assets/images/instagram/beograd-hodnik.jpg";
import beogradRoom from "@/assets/images/instagram/beograd-realizacija.jpg";
import kitchen from "@/assets/images/instagram/kuhinja-hrast-mermer.jpg";
import kitchenDetail from "@/assets/images/services/pozadina-kuhinja.jpg";
import pribojBedroom from "@/assets/images/instagram/priboj-soba.jpg";
import pribojDetail from "@/assets/images/projects/priboj-spavaca-soba.jpg";

type PortfolioProject = {
  location: string;
  title: string;
  description: string;
  note: string;
  image: StaticImageData;
  detail: StaticImageData;
  alt: string;
  detailAlt: string;
};

const portfolio: PortfolioProject[] = [
  {
    location: "Beograd",
    title: "Toplina već na ulazu",
    description:
      "Drvena obloga, skriveno odlaganje i toplo osvetljenje čine da hodnik prirodno povezuje ostatak doma.",
    note: "Drvo · topla svetlost · nameštaj po meri",
    image: beogradHall,
    detail: beogradRoom,
    alt: "Hodnik u toplim drvenim tonovima i sa ugradnim odlaganjem",
    detailAlt: "Dnevna zona sa velikim prozorima i svetlim nameštajem",
  },
  {
    location: "Kuhinja po meri",
    title: "Hrast i mermer",
    description:
      "Prirodni materijali i svedene linije stvaraju kuhinju koja je podjednako prijatna za pripremu obroka i druženje.",
    note: "Prirodni materijali · čiste linije",
    image: kitchen,
    detail: kitchenDetail,
    alt: "Kuhinja po meri od hrasta sa mermernim ostrvom",
    detailAlt: "Detalj kuhinje u toplim drvenim i kamenim tonovima",
  },
  {
    location: "Priboj",
    title: "Soba za mirniji ritam",
    description:
      "Meki tonovi, prirodno svetlo i promišljeno odlaganje za prostor koji lako prelazi iz radnog dana u odmor.",
    note: "Spavaća soba · nameštaj po meri",
    image: pribojBedroom,
    detail: pribojDetail,
    alt: "Svetla spavaća soba sa tapetom i ugradnim ormarom",
    detailAlt: "Pogled na krevet u spavaćoj sobi u toplim neutralnim tonovima",
  },
];

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "left" ? "M19 12H5m0 0 6 6m-6-6 6-6" : "M5 12h14m0 0-6-6m6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = portfolio[activeIndex];
  const number = String(activeIndex + 1).padStart(2, "0");
  const total = String(portfolio.length).padStart(2, "0");

  const changeProject = (amount: number) => {
    setActiveIndex((current) => (current + amount + portfolio.length) % portfolio.length);
  };

  return (
    <div className={styles.portfolioFeature}>
      <div className={styles.portfolioMainImage} key={`main-${activeIndex}`}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 49vw" />
      </div>

      <div className={styles.portfolioAside}>
        <div className={styles.portfolioMeta}>
          <span>{project.location}</span>
          <span>{number}<span className={styles.portfolioDivider}>/</span>{total}</span>
        </div>

        <div className={styles.portfolioStory} key={`story-${activeIndex}`} aria-live="polite">
          <div className={styles.portfolioCopy}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <figure className={styles.portfolioDetail}>
            <div>
              <Image src={project.detail} alt={project.detailAlt} fill sizes="(max-width: 760px) 44vw, 18vw" />
            </div>
            <figcaption>{project.note}</figcaption>
          </figure>
        </div>

        <div className={styles.portfolioBottom}>
          <p>Pažljivo osmišljeni prostori,<br />prilagođeni svakodnevnom životu.</p>
          <div className={styles.portfolioControls}>
            <button type="button" onClick={() => changeProject(-1)} aria-label="Prethodni projekat">
              <Chevron direction="left" />
            </button>
            <button type="button" onClick={() => changeProject(1)} aria-label="Sledeći projekat">
              <Chevron direction="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
