import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import logo from "@/public/assets/logo.png";
import { T } from "./Bilingual";

const quickLinks = [
  { href: "/about", label: "About", ta: "எங்களைப் பற்றி" },
  { href: "/training", label: "Training", ta: "பயிற்சி" },
  { href: "/achievements", label: "Achievements", ta: "சாதனைகள்" },
  { href: "/events", label: "Events", ta: "நிகழ்வுகள்" },
  { href: "/gallery", label: "Gallery", ta: "படத்தொகுப்பு" },
  { href: "/contact", label: "Contact", ta: "தொடர்புக்கு" },
];

const heading = { fontFamily: "var(--font-heading)" };

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-400/20 bg-[#060402] px-4 pb-8 pt-16 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[600px] max-w-full -translate-x-1/2 rounded-full bg-amber-400/5 blur-3xl" />

      <Reveal className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="bi-keep inline-flex items-center gap-3">
            <Image
              src={logo}
              alt="Vellur Yudhakalam logo"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-md object-cover ring-1 ring-amber-400/30"
            />
            <span className="text-2xl font-bold text-amber-400" style={heading}>
              <T en="Vellur Yudhakalam" ta="வேலூர் யுத்தகாலம்" />
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/88">
            <T
              en="The ancient Tamil martial art of Silambam — forging warriors with discipline, strength, and cultural pride."
              ta="பழமையான தமிழ் தற்காப்புக் கலையான சிலம்பம் — ஒழுக்கம், வலிமை, பண்பாட்டுப் பெருமையுடன் வீரர்களை உருவாக்குகிறது."
            />
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400"><T en="Explore" ta="பக்கங்கள்" /></h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/93">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 transition-all duration-200 hover:gap-3 hover:text-amber-400"
                >
                  <span className="h-px w-3 bg-red-500 transition-all duration-200 group-hover:w-5" />
                  <T en={link.label} ta={link.ta} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400"><T en="Begin" ta="தொடங்குங்கள்" /></h3>
          <p className="mt-4 text-sm leading-relaxed text-white/88">
            <T
              en="Students of every age are welcome. Step onto the training floor."
              ta="எல்லா வயதினரும் வரவேற்கப்படுகிறார்கள். பயிற்சிக் களத்தில் அடியெடுத்து வையுங்கள்."
            />
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-red-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 hover:bg-red-500"
            style={heading}
          >
            <T en="Join Now" ta="இப்போதே சேருங்கள்" />
          </Link>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/80 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <T en="Vellur Yudhakalam. All rights reserved." ta="வேலூர் யுத்தகாலம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." />
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 transition-colors hover:text-amber-400"
        >
          <T en="Back to top" ta="மேலே செல்ல" /> <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
