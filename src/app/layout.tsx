import type { Metadata, Viewport } from "next";
import { Geist, Imperial_Script, Noto_Serif_Display } from "next/font/google";
import { sr } from "@/content/sr";
import "lenis/dist/lenis.css";
import "./globals.scss";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const serif = Noto_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const script = Imperial_Script({
  variable: "--font-script",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: sr.meta.title,
  description: sr.meta.description,
  openGraph: {
    title: sr.meta.title,
    description: sr.meta.description,
    locale: "sr_RS",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#261b13",
};

// Bez JavaScript-a sadržaj je odmah vidljiv (bez animacija otkrivanja).
const noScriptCss =
  "[data-reveal] .line>span,[data-reveal] .r-fade,[data-reveal] .r-img,[data-reveal] .r-img img{opacity:1!important;transform:none!important;clip-path:none!important}";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" className={`${sans.variable} ${serif.variable} ${script.variable}`}>
      <body>
        <noscript>
          <style>{noScriptCss}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
