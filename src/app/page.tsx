import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";

/*
 * Redosled skrola kao na referenci:
 *  - „O nama“ prelazi preko zakačenog heroja,
 *  - „Usluge“ prelaze preko zakačenih projekata (posle kratke pauze),
 *  - „Instagram“ prelazi preko zakačenih usluga (posle kratke pauze),
 *  - ostalo je običan skrol.
 * Sidra stoje ispred zakačenih sekcija jer se pozicija zakačenog elementa menja.
 */
export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <div className="stack">
          <Hero />
          <About />
        </div>
        <div className="stack">
          <span id="projekti" className="anchor" />
          <Projects />
          <div className="hold" aria-hidden="true" />
          <div className="stack">
            <span id="usluge" className="anchor" />
            <Services />
            <div className="hold" aria-hidden="true" />
            <InstagramFeed />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
