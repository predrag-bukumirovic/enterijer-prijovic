import type { StaticImageData } from "next/image";

import heroWide from "@/assets/images/hero/spavaca-soba-siroko.jpg";
import heroTall from "@/assets/images/hero/spavaca-soba-usko.jpg";
import aboutLiving from "@/assets/images/about/dnevna-soba-priboj.jpg";
import aboutDining from "@/assets/images/about/trpezarija.jpg";
import pribojLiving from "@/assets/images/projects/priboj-dnevna-soba.jpg";
import pribojBedroom from "@/assets/images/projects/priboj-spavaca-soba.jpg";
import noviSadLiving from "@/assets/images/projects/novi-sad-dnevna-zona.jpg";
import noviSadLivingDetail from "@/assets/images/projects/novi-sad-dnevna-zona-detalj.jpg";
import belgradeFlat from "@/assets/images/projects/beograd-stan.jpg";
import belgradeFlatDetail from "@/assets/images/projects/beograd-stan-detalj.jpg";
import beigeKitchen from "@/assets/images/projects/kuhinja-bez.jpg";
import beigeKitchenDetail from "@/assets/images/projects/kuhinja-bez-detalj.jpg";
import oliveBedroom from "@/assets/images/projects/spavaca-soba-maslinasta.jpg";
import oliveBedroomDetail from "@/assets/images/projects/spavaca-soba-maslinasta-detalj.jpg";
import blueKitchen from "@/assets/images/projects/kuhinja-plava.jpg";
import blueKitchenDetail from "@/assets/images/projects/kuhinja-plava-detalj.jpg";
import servicesBg from "@/assets/images/services/pozadina-kuhinja.jpg";
import serviceDesign from "@/assets/images/services/dizajn.jpg";
import serviceTechnical from "@/assets/images/services/tehnicka-razrada.jpg";
import serviceFurniture from "@/assets/images/services/namestaj-po-meri.jpg";
import serviceTurnkey from "@/assets/images/services/kljuc-u-ruke.jpg";
import igPriboj from "@/assets/images/instagram/priboj-soba.jpg";
import igKitchen from "@/assets/images/instagram/kuhinja-hrast-mermer.jpg";
import igHallway from "@/assets/images/instagram/beograd-hodnik.jpg";
import igRealization from "@/assets/images/instagram/realizacija.jpg";

/*
 * Svi tekstovi sajta na srpskom. Za drugi jezik dovoljno je napraviti
 * fajl iste strukture (npr. en.ts).
 *
 * U naslovima `{X}` označava slovo koje se ispisuje kaligrafskim fontom.
 */

export type Img = { src: StaticImageData; alt: string };

export const EMAIL = "enterijerprijovic@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/enterijerprijovic/";
const post = (code: string) => `https://www.instagram.com/p/${code}/`;

export const sr = {
  meta: {
    title: "Enterijer Prijović — Dizajn, projektovanje i opremanje enterijera",
    description:
      "Autorski dizajn enterijera, 3D vizualizacija, tehnička razrada i nameštaj po meri. Opremanje prostora po sistemu „ključ u ruke“. Beograd i šire.",
  },

  nav: {
    links: [
      { label: "O nama", href: "#o-nama" },
      { label: "Projekti", href: "#projekti" },
      { label: "Usluge", href: "#usluge" },
      { label: "Instagram", href: "#instagram" },
    ],
    contact: { label: "Kontakt", href: "#kontakt" },
    menu: "Meni",
    close: "Zatvori",
  },

  hero: {
    lines: ["Vaš prostor.", "{N}aš dizajn.", "Bez kompromisa."],
    text: "Enterijer Prijović je studio za dizajn, projektovanje i opremanje enterijera — od prve skice do ključa u ruke.",
    cta: { label: "Zakažite konsultacije", href: "#kontakt" },
    image: {
      wide: heroWide,
      tall: heroTall,
      alt: "Spavaća soba sa maslinasto zelenim krevetom i toplim drvenim detaljima",
    },
  },

  about: {
    label: "O nama",
    lines: ["{D}izajn sa", "namerom"],
    text: "Verujemo da dobar dizajn nije prolazan trend, već prostor koji izgleda podjednako impresivno i godinama kasnije. Svaki projekat počinjemo razumevanjem ljudi koji će u njemu živeti, a od prvih skica do završnih vizualizacija svaki element pažljivo promišljamo.",
    cta: { label: "Naši projekti", href: "#projekti" },
    images: [
      { src: aboutLiving, alt: "Dnevna soba stana u Priboju sa TV zidom i policama od drveta" },
      { src: aboutDining, alt: "Trpezarija sa okruglim stolom od oraha uz kuhinju u bež tonovima" },
    ] satisfies Img[],
  },

  projects: {
    label: "Projekti",
    lines: ["Prostori koji {T}raju"],
    prev: "Prethodni projekat",
    next: "Sledeći projekat",
    items: [
      {
        place: "Priboj",
        title: "Stan u Priboju",
        text: "Minimalna forma, maksimalan karakter. Topli drveni tonovi, meki oblici i pažljivo osmišljena rasveta.",
        note: "Autorski dizajn i 3D vizualizacija",
        image: { src: pribojLiving, alt: "Dnevna soba stana u Priboju sa sofom i stočićem" },
        detail: { src: pribojBedroom, alt: "Spavaća soba stana u Priboju" },
        caption: "Spavaća soba istog stana — svetle površine i plakar po meri.",
      },
      {
        place: "Novi Sad",
        title: "Dnevna zona",
        text: "Svetla dnevna zona sa zidnim lajsnama, mekim nameštajem i tamnim akcentima koji prostoru daju eleganciju.",
        note: "Autorski dizajn i 3D vizualizacija",
        image: { src: noviSadLiving, alt: "Dnevna zona stana u Novom Sadu sa belom sofom" },
        detail: { src: noviSadLivingDetail, alt: "Trpezarijski deo dnevne zone u Novom Sadu" },
        caption: "Trpezarija i dnevni boravak u jednoj, skladnoj celini.",
      },
      {
        place: "Beograd",
        title: "Stan u Beogradu",
        text: "Enterijer koji odiše elegancijom, funkcionalnošću i osećajem doma. Dobar dizajn nije luksuz — to je način života.",
        note: "Autorski dizajn i 3D vizualizacija",
        image: { src: belgradeFlat, alt: "Dnevna soba stana u Beogradu sa plavim foteljama" },
        detail: { src: belgradeFlatDetail, alt: "Spavaća soba stana u Beogradu" },
        caption: "Spavaća soba sa tapaciranim uzglavljem i ugradnim plakarom.",
      },
      {
        place: "Kuhinja po meri",
        title: "Topla bež kuhinja",
        text: "Mat MDF frontovi u toploj bež nijansi, stakleni frontovi i mermer sa izraženom šarom. Blum okovi za vrhunsku funkcionalnost.",
        note: "Fotorealistični 3D render",
        image: { src: beigeKitchen, alt: "Kuhinja sa bež frontovima i mermernom radnom pločom" },
        detail: { src: beigeKitchenDetail, alt: "Ugao kuhinje sa staklenim vitrinama" },
        caption: "Stakleni frontovi daju kuhinji vizuelnu lakoću.",
      },
      {
        place: "Spavaća soba",
        title: "Drvo i maslinasta",
        text: "Bogati drveni dekori daju toplinu, a maslinasto zeleni akcenti eleganciju. Bez suvišnih elemenata i prolaznih trendova.",
        note: "Autorski dizajn i 3D vizualizacija",
        image: { src: oliveBedroom, alt: "Spavaća soba sa TV zidom i drvenim detaljima" },
        detail: { src: oliveBedroomDetail, alt: "Uzglavlje kreveta u maslinasto zelenom somotu" },
        caption: "Uzglavlje u maslinasto zelenom somotu.",
      },
      {
        place: "Kuhinja po meri",
        title: "Kuhinja sa ostrvom",
        text: "Plavi frontovi, ostrvo sa teraco pločom i linijska rasveta — kuhinja projektovana do poslednjeg detalja.",
        note: "Autorski dizajn i 3D vizualizacija",
        image: { src: blueKitchen, alt: "Kuhinja sa plavim frontovima i ostrvom" },
        detail: { src: blueKitchenDetail, alt: "Ostrvo kuhinje sa barskim stolicama" },
        caption: "Ostrvo sa barskim stolicama za svakodnevna okupljanja.",
      },
    ],
  },

  services: {
    label: "Usluge",
    lines: ["Od ideje do", "{K}ljuča u ruke"],
    text: "Nudimo više od dizajna — vodimo vas kroz ceo proces, od prve skice do poslednjeg detalja.",
    cta: { label: "Pošaljite upit", href: "#kontakt" },
    note: "Projekti po meri — od koncepta do tehničke razrade i opremanja.",
    background: { src: servicesBg, alt: "" },
    items: [
      {
        title: "Dizajn i 3D vizualizacija",
        text: "Autorski dizajn i fotorealistični 3D renderi, da konačan izgled prostora vidite pre realizacije.",
        image: { src: serviceDesign, alt: "3D vizualizacija dnevne sobe" },
      },
      {
        title: "Tehnička razrada",
        text: "Precizni crteži, mere i specifikacija materijala i okova, spremni za izvođenje.",
        image: { src: serviceTechnical, alt: "Uska kuhinja projektovana do detalja" },
      },
      {
        title: "Nameštaj po meri",
        text: "Kuhinje, plakari i ugradni nameštaj izrađeni po meri vašeg prostora, sa Blum okovima.",
        image: { src: serviceFurniture, alt: "Plakar i radni sto izrađeni po meri" },
      },
      {
        title: "Ključ u ruke",
        text: "Kompletno opremanje prostora — koordinišemo sve faze, sve do useljenja.",
        image: { src: serviceTurnkey, alt: "Realizovana kuhinja sa ostrvom" },
      },
    ],
  },

  instagram: {
    label: "Instagram",
    lines: ["Pratite naš {R}ad"],
    cta: { label: "@enterijerprijovic", href: INSTAGRAM_URL },
    more: "Pogledaj objavu",
    items: [
      {
        title: "Stan u Priboju",
        text: "Minimalna forma, maksimalan karakter.",
        href: post("DdeditjDDDL"),
        image: { src: igPriboj, alt: "Soba sa tapetom i radnim stolom, stan u Priboju" },
      },
      {
        title: "Hrast i mermer",
        text: "Dobar dizajn nije prolazan trend — to je prostor koji traje.",
        href: post("DbSpvfIjCo9"),
        image: { src: igKitchen, alt: "Kuhinja od hrastovine sa mermernim ostrvom" },
      },
      {
        title: "Stan u Beogradu",
        text: "Elegancija, funkcionalnost i osećaj doma.",
        href: post("DaK4ZX4jMGJ"),
        image: { src: igHallway, alt: "Hodnik sa garderoberom od drveta, stan u Beogradu" },
      },
      {
        title: "Realizacija",
        text: "Nameštaj po meri je izrađen i montiran — sledi opremanje po sistemu „ključ u ruke“.",
        href: post("DasV1YpDJoi"),
        image: { src: igRealization, alt: "Realizovana dnevna soba sa sivom sofom" },
      },
    ],
  },

  contact: {
    label: "Kontakt",
    lines: ["Započnimo", "{R}azgovor"],
    text: "Recite nam nešto o vašem prostoru i idejama. Javićemo vam se i provesti vas kroz sledeće korake.",
    fields: { name: "Ime i prezime", phone: "Telefon", email: "Email", message: "Poruka" },
    submit: "Pošalji upit",
    subject: "Upit sa sajta",
  },

  footer: {
    menuLabel: "Meni",
    followLabel: "Pratite nas",
    contactLabel: "Kontakt",
    location: "Beograd / Worldwide",
    marquee: "{J}avite nam se",
    rights: "Sva prava zadržana.",
    credit: { label: "Izrada sajta:", name: "SCAONS", href: "https://scaons.com" },
  },
};
