import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import Reveal from "@/app/components/Reveal";
import { T, Ta } from "@/app/components/Bilingual";
import templeStaff from "@/public/about/silambam-temple.png";

export const metadata: Metadata = {
  title: "Achievements | Vellur Yudhakalam",
  description: "Championships, awards, and milestones from Vellur Yudhakalam.",
};

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

/* podium order: 2nd, 1st, 3rd */
const podium = [
  { place: "2", label: "Silver", ta: "வெள்ளி", height: "h-40", delay: 150, tone: "from-white/25 to-white/5 border-white/30 text-white/96" },
  { place: "1", label: "Gold", ta: "தங்கம்", height: "h-56", delay: 0, tone: "from-amber-400/40 to-amber-400/5 border-amber-400/60 text-amber-300" },
  { place: "3", label: "Bronze", ta: "வெண்கலம்", height: "h-32", delay: 300, tone: "from-orange-700/40 to-orange-700/5 border-orange-600/40 text-orange-400" },
];

export default function AchievementsPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      <PageHero
        tag="Our Glory"
        title="Hall of Glory"
        accent="Glory"
        description="Championships and milestones will be featured here soon."
        image={templeStaff}
        position="75% 50%"
      />

      <section className="relative px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <Reveal className="text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="The Podium Awaits" ta="மேடை காத்திருக்கிறது" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={deco}>
              Glory Is{" "}
              <span className="gradient-slide">Earned</span>
              <Ta>புகழ் உழைப்பால் வருவது</Ta>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/88">
              <T
                en="Every medal starts as a morning on the training floor. The champions of Vellur Yudhakalam will take their place here."
                ta="ஒவ்வொரு பதக்கமும் பயிற்சிக் களத்தில் ஒரு காலைப்பொழுதில் தொடங்குகிறது. வேலூர் யுத்தகாலத்தின் சாம்பியன்கள் இங்கே இடம்பெறுவார்கள்."
              />
            </p>
          </Reveal>

          {/* podium */}
          <div className="mt-16 flex items-end justify-center gap-3 sm:gap-5">
            {podium.map((p) => (
              <Reveal key={p.place} delay={p.delay} className="w-full max-w-[160px]">
                <div className="flex flex-col items-center">
                  <span className="quote-mark mb-3 text-2xl text-amber-400" aria-hidden>
                    ★
                  </span>
                  <div
                    className={`relative flex w-full items-start justify-center overflow-hidden rounded-t-xl border border-b-0 bg-gradient-to-b pt-4 ${p.height} ${p.tone}`}
                  >
                    <span className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/2" />
                    <span className="text-5xl font-black" style={heading}>
                      {p.place}
                    </span>
                  </div>
                  <div className="w-full border-t border-amber-400/40 pt-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    <T en={p.label} ta={p.ta} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center" delay={200}>
            <p className="text-sm italic text-amber-400/80" style={heading}>
              &ldquo;Every champion was once a beginner who refused to quit.&rdquo;
            </p>
            <Link
              href="/training"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all duration-200 hover:gap-3 hover:text-amber-300"
              style={heading}
            >
              <T en="Start Your Journey" ta="உங்கள் பயணத்தைத் தொடங்குங்கள்" /> <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
