import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import Reveal from "@/app/components/Reveal";
import { T, Ta } from "@/app/components/Bilingual";
import duelDusk from "@/public/about/duel-dusk.jpg";
import templeStaff from "@/public/about/silambam-temple.png";

export const metadata: Metadata = {
  title: "Contact | Vellur Yudhakalam",
  description: "Get in touch with Vellur Yudhakalam to enroll or ask questions.",
};

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

const channels = [
  { label: "Visit", labelTa: "வருகை", value: "Academy address", valueTa: "அகாடமி முகவரி", glyph: "◎" },
  { label: "Call", labelTa: "அழைப்பு", value: "Phone number", valueTa: "தொலைபேசி எண்", glyph: "✆" },
  { label: "Write", labelTa: "எழுதுங்கள்", value: "Email address", valueTa: "மின்னஞ்சல் முகவரி", glyph: "✉" },
];

export default function ContactPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      <PageHero
        tag="Get In Touch"
        title="Join the Academy"
        accent="Academy"
        description="Enrollment details and contact information will be added here soon."
        image={duelDusk}
        position="center 55%"
      />

      <section className="relative px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* details */}
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              <span className="h-px w-8 bg-amber-400/60" />
              <T en="Reach Us" ta="எங்களை அணுகுங்கள்" />
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl" style={deco}>
              Your Journey{" "}
              <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                Starts Here
              </span>
              <Ta>உங்கள் பயணம் இங்கே தொடங்குகிறது</Ta>
            </h2>
            <p className="mt-4 max-w-md text-white/90">
              <T
                en="Students of every age are welcome. Contact details are coming soon — they will appear below."
                ta="எல்லா வயது மாணவர்களும் வரவேற்கப்படுகிறார்கள். தொடர்பு விவரங்கள் விரைவில் வரும் — அவை கீழே தோன்றும்."
              />
            </p>

            <ul className="mt-8 space-y-4">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:translate-x-1.5 hover:border-amber-400/40 hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/40 text-xl text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                    {c.glyph}
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
                      <T en={c.label} ta={c.labelTa} />
                    </span>
                    <p className="text-white" style={heading}>
                      <T en={c.value} ta={c.valueTa} />{" "}
                      <span className="text-white/80">
                        — <T en="coming soon" ta="விரைவில்" />
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/training"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all duration-200 hover:gap-3 hover:text-amber-300"
              style={heading}
            >
              <T en="Browse the Programs" ta="திட்டங்களைப் பாருங்கள்" /> <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* framed image */}
          <Reveal direction="right" delay={150}>
            <div className="photo-tile group relative aspect-[4/5] overflow-hidden rounded-3xl border border-amber-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <Image
                src={templeStaff}
                alt="A Silambam practitioner in a deep stance with a long bamboo staff in a lamp-lit temple courtyard"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[72%_50%] transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080503]/95 via-[#080503]/40 to-transparent" />
              <div className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/3" />
              <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-amber-400/60" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-amber-400/60" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-lg font-bold text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" style={heading}>
                  &ldquo;தீரன் ஒருவன் தனித்திருந்தாலும் போரில் வெல்வான்&rdquo;
                </p>
                <p className="mt-1 text-sm italic text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]" style={heading}>
                  &ldquo;A true warrior conquers, even alone.&rdquo;
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-amber-400 font-medium">
                  <T en="From the Silambam warrior's code" ta="சிலம்ப போர் மரபின் அறநெறி" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
