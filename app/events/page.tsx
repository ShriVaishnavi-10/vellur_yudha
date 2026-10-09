import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import Reveal from "@/app/components/Reveal";
import { T, Ta } from "@/app/components/Bilingual";
import groupForms from "@/public/about/group-forms.jpg";

export const metadata: Metadata = {
  title: "Events | Vellur Yudhakalam",
  description: "Upcoming events, camps, and championships at Vellur Yudhakalam.",
};

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

const slots = [
  { kind: "Camps", kindTa: "முகாம்கள்", note: "Training camps and workshops", noteTa: "பயிற்சி முகாம்களும் பட்டறைகளும்" },
  { kind: "Demonstrations", kindTa: "செயல்விளக்கங்கள்", note: "Public Silambam showcases", noteTa: "பொதுமக்களுக்கான சிலம்பக் காட்சிகள்" },
  { kind: "Championships", kindTa: "சாம்பியன்ஷிப் போட்டிகள்", note: "Competitions and tournaments", noteTa: "போட்டிகளும் தொடர்களும்" },
];

export default function EventsPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      <PageHero
        tag="Upcoming"
        title="Events & Camps"
        accent="Camps"
        description="Upcoming camps, demonstrations, and championships will be listed here soon."
        image={groupForms}
        position="center 30%"
      />

      <section className="relative px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <Reveal className="mb-12 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="On The Horizon" ta="அடிவானத்தில்" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={deco}>
              The Calendar Is{" "}
              <span className="gradient-slide">Filling Up</span>
              <Ta>நாட்காட்டி நிரம்புகிறது</Ta>
            </h2>
          </Reveal>

          {/* timeline of placeholder slots */}
          <div className="relative">
            <div className="absolute bottom-0 left-[39px] top-0 w-px bg-gradient-to-b from-transparent via-amber-400/40 to-transparent sm:left-[47px]" />
            <div className="space-y-6">
              {slots.map((s, i) => (
                <Reveal key={s.kind} direction="right" delay={i * 120}>
                  <div className="group relative flex gap-5 sm:gap-7">
                    {/* date block */}
                    <div className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-amber-400/40 bg-[#0a0604] text-center transition-colors duration-300 group-hover:border-amber-400 sm:h-24 sm:w-24">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400"><T en="Date" ta="தேதி" /></span>
                      <span className="mt-1 text-xl font-bold text-amber-400 sm:text-2xl" style={heading}>
                        <T en="TBA" ta="விரைவில்" />
                      </span>
                      <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                    </div>

                    {/* card */}
                    <div className="spot-card flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 group-hover:border-amber-400/40 group-hover:bg-white/[0.05]">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
                        <T en="To be announced" ta="அறிவிக்கப்படும்" />
                      </span>
                      <h3 className="mt-1 text-xl font-semibold text-white" style={heading}>
                        <T en={s.kind} ta={s.kindTa} />
                      </h3>
                      <p className="mt-1 text-sm text-white/86">
                        <T en={s.note} ta={s.noteTa} />
                      </p>
                      <div className="mt-4 space-y-2" aria-hidden>
                        <span className="block h-1.5 w-4/5 animate-pulse rounded-full bg-white/10" />
                        <span className="block h-1.5 w-3/5 animate-pulse rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-14 text-center" delay={150}>
            <p className="text-white/88">
              <T en="Want to hear first when dates are announced?" ta="தேதிகள் அறிவிக்கப்பட்டதும் முதலில் அறிய விரும்புகிறீர்களா?" />
            </p>
            <Link
              href="/contact"
              className="btn-pulse mt-5 inline-block rounded-md bg-red-600 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 hover:bg-red-500"
              style={heading}
            >
              <T en="Get in Touch" ta="தொடர்பு கொள்ளுங்கள்" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
