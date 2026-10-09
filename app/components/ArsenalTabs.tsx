"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { categoryTa, type TrainingProgram } from "@/app/data/training";
import { T } from "./Bilingual";

const CATEGORIES: TrainingProgram["category"][] = ["Weapons", "Unarmed", "Special Programs"];

const BLURBS: Record<TrainingProgram["category"], { en: string; ta: string }> = {
  Weapons: {
    en: "The heart of Silambam — traditional weapons, mastered one at a time.",
    ta: "சிலம்பத்தின் இதயம் — பாரம்பரிய ஆயுதங்கள், ஒவ்வொன்றாகத் தேர்ச்சி பெறுதல்.",
  },
  Unarmed: {
    en: "Empty-hand combat rooted in the same footwork and timing.",
    ta: "அதே கால் அசைவு, நேரக்கணிப்பில் வேரூன்றிய வெறுங்கைப் போர்க்கலை.",
  },
  "Special Programs": {
    en: "Programs shaped for women, youth, and all-round conditioning.",
    ta: "பெண்கள், இளையோர், முழுமையான உடல் தகுதிக்கான சிறப்புத் திட்டங்கள்.",
  },
};

/* Interactive category switcher showing the disciplines in each branch.
   A sliding glass indicator glides between tabs (rather than each button
   toggling its own flat background), and switching category draws the new
   cards in with a staggered tilt-and-unsheathe motion — like weapons being
   drawn from a rack — plus a single diagonal light-glint sweeping across the
   grid, instead of the site-wide plain fade used everywhere else. */
export default function ArsenalTabs({ programs }: { programs: TrainingProgram[] }) {
  const [active, setActive] = useState<TrainingProgram["category"]>("Weapons");
  const items = programs.filter((p) => p.category === active);

  const tablistRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  const blurbRef = useRef<HTMLParagraphElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);
  const firstRun = useRef(true);

  // slide the indicator behind the active tab
  useLayoutEffect(() => {
    const list = tablistRef.current;
    const indicator = indicatorRef.current;
    const btn = tabRefs.current[CATEGORIES.indexOf(active)];
    if (!list || !indicator || !btn) return;

    const listRect = list.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const x = btnRect.left - listRect.left;
    const width = btnRect.width;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || firstRun.current) {
      gsap.set(indicator, { x, width, opacity: 1 });
    } else {
      gsap.to(indicator, { x, width, duration: 0.5, ease: "power3.out" });
    }
  }, [active]);

  // draw-in the new category's blurb + cards, plus a single glint sweep
  useLayoutEffect(() => {
    const cards = gridRef.current ? Array.from(gridRef.current.children) : [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set([blurbRef.current, ...cards], { opacity: 1, x: 0, y: 0, rotateX: 0, scale: 1, filter: "none" });
      firstRun.current = false;
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      blurbRef.current,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.35 },
      0
    )
      .fromTo(
        cards,
        { opacity: 0, y: 26, rotateX: -35, scale: 0.94, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.08,
        },
        0.08
      );

    if (glintRef.current && !firstRun.current) {
      tl.fromTo(
        glintRef.current,
        { xPercent: -130, opacity: 0 },
        { xPercent: 130, opacity: 1, duration: 0.7, ease: "power1.inOut" },
        0.05
      ).set(glintRef.current, { opacity: 0 });
    }

    firstRun.current = false;
    return () => {
      tl.kill();
    };
  }, [active]);

  return (
    <div>
      <div
        ref={tablistRef}
        role="tablist"
        className="relative mx-auto flex max-w-2xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
      >
        <div
          ref={indicatorRef}
          aria-hidden
          className="pointer-events-none absolute inset-y-1.5 left-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 shadow-[0_0_24px_rgba(251,191,36,0.35)]"
        />
        {CATEGORIES.map((c, i) => {
          const count = programs.filter((p) => p.category === c).length;
          const on = c === active;
          return (
            <button
              key={c}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(c)}
              className={`relative z-10 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 sm:text-sm ${
                on ? "text-black" : "text-white/88 hover:text-amber-300"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <T en={c} ta={categoryTa[c]} /> <span className={on ? "text-black/60" : "text-white/30"}>· {count}</span>
            </button>
          );
        })}
      </div>

      <p ref={blurbRef} className="mt-6 text-center text-white font-medium">
        <T en={BLURBS[active].en} ta={BLURBS[active].ta} />
      </p>

      <div className="relative mt-8" style={{ perspective: "1200px" }}>
        <div
          ref={glintRef}
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 opacity-0"
          style={{
            background: "linear-gradient(105deg, transparent 35%, rgba(255,230,150,0.18) 50%, transparent 65%)",
          }}
        />
        <div ref={gridRef} className="flex flex-wrap justify-center gap-4" style={{ transformStyle: "preserve-3d" }}>
          {items.map((p) => (
            <div
              key={`${active}-${p.slug}`}
              className="group w-full rounded-xl border border-white/15 bg-[#0a0604]/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#0e0805] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-[0.8em] h-px w-6 shrink-0 bg-red-500 transition-all duration-300 group-hover:w-10" />
                <h3
                  className="text-lg font-semibold text-white transition-colors group-hover:text-amber-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <T en={p.name} ta={p.nameTa} />
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-100">
                <T en={p.description} ta={p.descriptionTa} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
