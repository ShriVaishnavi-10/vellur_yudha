import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Inter, Noto_Sans_Tamil } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-deco",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vellur Yudhakalam",
  description:
    "Vellur Yudhakalam — the ancient Tamil martial art of Silambam, forging warriors with discipline, strength, and cultural pride.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${inter.variable} ${notoTamil.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <Preloader />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
