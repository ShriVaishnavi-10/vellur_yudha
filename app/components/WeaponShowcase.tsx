"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "./Bilingual";
import type { TrainingProgram } from "@/app/data/training";

const INTERVAL_MS = 5500;

type Accent = {
  cardBorder: string;
  cardWash: string;
  cardGlow: string;
  ringA: string;
  ringB: string;
  emblemA: string;
  emblemB: string;
  staff: string;
  staffGlow: string;
  trail: string;
  tagText: string;
  numberStroke: string;
  revealBar: string;
  listActiveBorder: string;
  listActiveBg: string;
  listActiveText: string;
  progressBar: string;
  autoDot: string;
  autoGlow: string;
};

/* This showcase is always fed a single-category list (just "Weapons" on the
   home page), so a per-category accent would paint every card the same
   colour. Instead each card cycles through its own slot in a 6-colour
   palette — amber, crimson, orange, gold, deep red, bronze — so consecutive
   weapons read as distinct, while every variant still lives inside the
   site's warm ember palette. */
const ACCENT_CYCLE: Accent[] = [
  {
    // amber
    cardBorder: "border-amber-400/60",
    cardWash: "rgba(251,191,36,0.16)",
    cardGlow: "rgba(251,191,36,0.22)",
    ringA: "border-amber-400/40",
    ringB: "border-red-500/30",
    emblemA: "border-b-amber-400/25 border-t-amber-400",
    emblemB: "border-l-red-500 border-r-red-500/25",
    staff: "from-amber-400 to-amber-800",
    staffGlow: "rgba(251,191,36,0.6)",
    trail: "from-amber-300 to-amber-700",
    tagText: "text-amber-400",
    numberStroke: "rgba(251,191,36,0.45)",
    revealBar: "from-amber-400 to-red-500",
    listActiveBorder: "border-amber-400/60",
    listActiveBg: "from-amber-400/15",
    listActiveText: "text-amber-400",
    progressBar: "from-red-500 to-amber-400",
    autoDot: "bg-amber-400",
    autoGlow: "rgba(251,191,36,0.9)",
  },
  {
    // crimson
    cardBorder: "border-red-400/60",
    cardWash: "rgba(251,138,92,0.16)",
    cardGlow: "rgba(251,138,92,0.22)",
    ringA: "border-red-400/40",
    ringB: "border-amber-500/25",
    emblemA: "border-b-red-400/25 border-t-red-400",
    emblemB: "border-l-amber-500 border-r-amber-500/25",
    staff: "from-red-400 to-red-800",
    staffGlow: "rgba(251,138,92,0.6)",
    trail: "from-red-300 to-red-700",
    tagText: "text-red-400",
    numberStroke: "rgba(251,138,92,0.45)",
    revealBar: "from-red-400 to-amber-500",
    listActiveBorder: "border-red-400/60",
    listActiveBg: "from-red-400/15",
    listActiveText: "text-red-400",
    progressBar: "from-amber-500 to-red-400",
    autoDot: "bg-red-400",
    autoGlow: "rgba(251,138,92,0.9)",
  },
  {
    // orange
    cardBorder: "border-orange-400/60",
    cardWash: "rgba(251,146,60,0.16)",
    cardGlow: "rgba(251,146,60,0.22)",
    ringA: "border-orange-400/40",
    ringB: "border-amber-500/25",
    emblemA: "border-b-orange-400/25 border-t-orange-400",
    emblemB: "border-l-amber-500 border-r-amber-500/25",
    staff: "from-orange-400 to-orange-800",
    staffGlow: "rgba(251,146,60,0.6)",
    trail: "from-orange-300 to-orange-700",
    tagText: "text-orange-400",
    numberStroke: "rgba(251,146,60,0.45)",
    revealBar: "from-orange-400 to-amber-500",
    listActiveBorder: "border-orange-400/60",
    listActiveBg: "from-orange-400/15",
    listActiveText: "text-orange-400",
    progressBar: "from-amber-500 to-orange-400",
    autoDot: "bg-orange-400",
    autoGlow: "rgba(251,146,60,0.9)",
  },
  {
    // gold
    cardBorder: "border-yellow-400/60",
    cardWash: "rgba(250,204,21,0.16)",
    cardGlow: "rgba(250,204,21,0.22)",
    ringA: "border-yellow-400/40",
    ringB: "border-amber-600/25",
    emblemA: "border-b-yellow-400/25 border-t-yellow-400",
    emblemB: "border-l-amber-600 border-r-amber-600/25",
    staff: "from-yellow-400 to-yellow-700",
    staffGlow: "rgba(250,204,21,0.6)",
    trail: "from-yellow-300 to-yellow-600",
    tagText: "text-yellow-400",
    numberStroke: "rgba(250,204,21,0.45)",
    revealBar: "from-yellow-400 to-amber-600",
    listActiveBorder: "border-yellow-400/60",
    listActiveBg: "from-yellow-400/15",
    listActiveText: "text-yellow-400",
    progressBar: "from-amber-600 to-yellow-400",
    autoDot: "bg-yellow-400",
    autoGlow: "rgba(250,204,21,0.9)",
  },
  {
    // deep red
    cardBorder: "border-red-600/65",
    cardWash: "rgba(193,58,18,0.18)",
    cardGlow: "rgba(193,58,18,0.25)",
    ringA: "border-red-600/45",
    ringB: "border-amber-400/25",
    emblemA: "border-b-red-600/30 border-t-red-600",
    emblemB: "border-l-amber-400 border-r-amber-400/25",
    staff: "from-red-600 to-red-900",
    staffGlow: "rgba(193,58,18,0.6)",
    trail: "from-red-500 to-red-800",
    tagText: "text-red-500",
    numberStroke: "rgba(193,58,18,0.45)",
    revealBar: "from-red-600 to-amber-400",
    listActiveBorder: "border-red-600/60",
    listActiveBg: "from-red-600/15",
    listActiveText: "text-red-500",
    progressBar: "from-amber-400 to-red-600",
    autoDot: "bg-red-600",
    autoGlow: "rgba(193,58,18,0.9)",
  },
  {
    // bronze
    cardBorder: "border-amber-600/65",
    cardWash: "rgba(217,119,6,0.18)",
    cardGlow: "rgba(217,119,6,0.25)",
    ringA: "border-amber-600/45",
    ringB: "border-red-700/30",
    emblemA: "border-b-amber-600/25 border-t-amber-600",
    emblemB: "border-l-red-700 border-r-red-700/25",
    staff: "from-amber-600 to-amber-900",
    staffGlow: "rgba(217,119,6,0.6)",
    trail: "from-amber-500 to-amber-800",
    tagText: "text-amber-500",
    numberStroke: "rgba(217,119,6,0.45)",
    revealBar: "from-amber-600 to-red-700",
    listActiveBorder: "border-amber-600/60",
    listActiveBg: "from-amber-600/15",
    listActiveText: "text-amber-500",
    progressBar: "from-red-700 to-amber-600",
    autoDot: "bg-amber-600",
    autoGlow: "rgba(217,119,6,0.9)",
  },
];

const accentFor = (index: number) => ACCENT_CYCLE[index % ACCENT_CYCLE.length];

/* A simplified, soft fighting-stance silhouette — not a literal character,
   just enough shape to read as "warrior" while blurred and low-opacity. */
function StanceSilhouette() {
  return (
    <svg
      viewBox="0 0 100 140"
      className="wx-silhouette"
      aria-hidden="true"
      fill="currentColor"
    >
      <ellipse cx="52" cy="18" rx="9" ry="10" />
      <rect x="38" y="30" width="26" height="42" rx="13" transform="rotate(6 51 51)" />
      <rect x="44" y="68" width="12" height="40" rx="6" transform="rotate(-18 50 68)" />
      <rect x="34" y="96" width="12" height="34" rx="6" transform="rotate(10 40 96)" />
      <rect x="54" y="68" width="12" height="44" rx="6" transform="rotate(28 60 68)" />
      <rect x="70" y="100" width="12" height="30" rx="6" transform="rotate(8 76 100)" />
      <rect x="30" y="34" width="11" height="26" rx="5.5" transform="rotate(-40 35 34)" />
      <rect x="58" y="24" width="11" height="34" rx="5.5" transform="rotate(55 63 24)" />
    </svg>
  );
}

/* Depth -> resting transform/opacity/filter/z-index for the stacked cards.
   depth 0 = foreground (active). 1, 2 = receding behind it. 3+ = faded out of the stack.
   depth < 0 = not yet reached, waiting just below, invisible. */
function depthStyle(depth: number): React.CSSProperties {
  if (depth < 0) {
    return {
      transform: "translateY(22px) scale(0.98)",
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  }
  if (depth === 0) {
    return { transform: "translateY(0) scale(1)", opacity: 1, zIndex: 50, pointerEvents: "auto" };
  }
  if (depth === 1) {
    return {
      transform: "translateY(-15px) scale(0.96)",
      opacity: 0.85,
      zIndex: 40,
      pointerEvents: "none",
    };
  }
  if (depth === 2) {
    return {
      transform: "translateY(-30px) scale(0.92)",
      opacity: 0.65,
      zIndex: 30,
      pointerEvents: "none",
      filter: "brightness(0.85)",
    };
  }
  return {
    transform: "translateY(-42px) scale(0.88)",
    opacity: 0,
    zIndex: 10,
    pointerEvents: "none",
  };
}

function WeaponCard({
  program,
  index,
  depth,
  isActive,
  reducedMotion,
  ready,
}: {
  program: TrainingProgram;
  index: number;
  depth: number;
  isActive: boolean;
  reducedMotion: boolean;
  ready: boolean;
}) {
  const enteredRef = useRef(false);
  const wasActiveRef = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [showFx, setShowFx] = useState(false);
  const fxTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // wait for `ready` so we read the real (client-detected) reducedMotion value,
    // not the SSR-safe `false` default from the very first render
    if (!ready) return;
    if (isActive && !wasActiveRef.current && !enteredRef.current) {
      enteredRef.current = true;
      if (reducedMotion) {
        setRevealed(true);
      } else {
        setShowFx(true);
        setRevealed(true); // each reveal element's own transition-delay (baked into .is-in) staggers it
        clearTimeout(fxTimer.current);
        fxTimer.current = setTimeout(() => setShowFx(false), 700);
      }
    } else if (isActive) {
      setRevealed(true);
    }
    wasActiveRef.current = isActive;
  }, [isActive, reducedMotion, ready]);

  useEffect(() => () => clearTimeout(fxTimer.current), []);

  const accent = accentFor(index);

  return (
    <div
      className={`wx-card absolute inset-0 overflow-hidden rounded-3xl border bg-gradient-to-br from-[#100806] via-[#0c0604] to-[#080503] p-8 sm:p-12 ${accent.cardBorder}`}
      style={{
        ...depthStyle(depth),
        boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 70px ${accent.cardGlow}`,
      }}
      aria-hidden={!isActive}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at top right, ${accent.cardWash}, transparent 65%)` }}
      />
      <div className={`ring-spin pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full border border-dashed ${accent.ringA}`} />
      <div className={`ring-spin-reverse pointer-events-none absolute -bottom-20 right-20 h-[200px] w-[200px] rounded-full border border-dashed ${accent.ringB}`} />
      {showFx && (
        <>
          <div className="wx-ring-glow pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px]" aria-hidden />
          <div className="wx-ring-glow pointer-events-none absolute -bottom-20 right-20 h-[200px] w-[200px]" aria-hidden />
        </>
      )}

      {/* fighter stance — brief, never permanent */}
      {showFx && (
        <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
          <StanceSilhouette />
        </div>
      )}

      {/* weapon: sweeps into place once, then rests in position */}
      <div className="pointer-events-none absolute right-10 top-1/2 hidden h-[260px] w-[260px] -translate-y-1/2 sm:block" aria-hidden>
        <span className={`emblem-ring-a absolute inset-0 rounded-full border-2 border-transparent ${accent.emblemA}`} />
        <span className={`emblem-ring-b absolute inset-6 rounded-full border-2 border-transparent ${accent.emblemB}`} />

        {showFx && (
          <span className="wx-trail absolute left-1/2 top-1/2 -ml-[3px] -mt-[90px] block h-[180px] w-[6px]">
            <span className={`block h-full w-full rounded bg-gradient-to-b ${accent.trail}`} />
          </span>
        )}

        <span
          className={`absolute left-1/2 top-1/2 -ml-[3px] -mt-[90px] block h-[180px] w-[6px] ${
            showFx ? "wx-weapon" : "wx-weapon-rest"
          }`}
        >
          <span
            className={`emblem-staff block h-full w-full rounded bg-gradient-to-b ${accent.staff}`}
            style={{ boxShadow: `0 0 20px ${accent.staffGlow}` }}
          />
        </span>

        {showFx &&
          [0, 1, 2].map((i) => (
            <span
              key={i}
              className="wx-spark absolute left-1/2 top-[18%]"
              style={{
                ["--wx-sx" as string]: `${(i - 1) * 14}px`,
                ["--wx-sy" as string]: `${-10 - i * 4}px`,
                animationDelay: `${260 + i * 50}ms`,
              }}
            />
          ))}
      </div>

      <div className="relative max-w-md">
        <span
          className={`wx-reveal wx-reveal-tag block text-[11px] font-semibold uppercase tracking-[0.3em] ${accent.tagText} ${revealed ? "is-in" : ""}`}
        >
          {program.category}
        </span>
        <span
          aria-hidden
          className={`wx-reveal wx-reveal-number mt-2 block text-7xl font-black leading-none text-transparent sm:text-8xl ${revealed ? "is-in" : ""}`}
          style={{ fontFamily: "var(--font-heading)", WebkitTextStroke: `1.5px ${accent.numberStroke}` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className={`wx-reveal wx-reveal-title mt-3 text-3xl font-bold text-white sm:text-4xl ${revealed ? "is-in" : ""}`}
          style={{ fontFamily: "var(--font-deco)" }}
        >
          <T en={program.name} />
        </h3>
        <div
          className={`wx-reveal wx-reveal-bar mt-4 h-0.5 w-16 bg-gradient-to-r ${accent.revealBar} ${revealed ? "is-in" : ""}`}
        />
        <p
          className={`wx-reveal wx-reveal-desc mt-4 leading-relaxed text-white/93 ${revealed ? "is-in" : ""}`}
        >
          {program.description}
        </p>
      </div>
    </div>
  );
}

/* "Choose your weapon": a sticky-stacking showcase synced to the left-side list.
   Scrolling through the section drives which card is in front (via GSAP ScrollTrigger
   pinning the whole list+stack); clicking a left item smooth-scrolls to that card's
   position. Each card plays the stance -> weapon -> reveal transformation once, the
   first time it becomes the foreground card; after that it simply holds its revealed
   state while the stacking depth repositions it. Auto-advance pauses on hover, when the
   section isn't pinned, or on the last card. Reduced-motion users get the same stack
   with no scroll-jacking, no entrance choreography, and only the left list to navigate. */
export default function WeaponShowcase({ programs }: { programs: TrainingProgram[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stRef = useRef<ScrollTrigger | null>(null);
  const programmaticRef = useRef(false);
  const programmaticTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const paused = hovered || (!reducedMotion && !engaged) || active === programs.length - 1;

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setReady(true);
  }, []);

  // keep the active item visible in the horizontally scrolling mobile list — scoped to
  // the list container only (never the window), so it can't fight the page's own scroll
  // position while GSAP is pinning/driving it.
  useEffect(() => {
    const list = listRef.current;
    const btn = itemRefs.current[active];
    if (!list || !btn || list.scrollWidth <= list.clientWidth) return;
    const target = btn.offsetLeft - (list.clientWidth - btn.clientWidth) / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  // pin the list+stack and drive `active` from scroll progress through the section
  useLayoutEffect(() => {
    if (!ready || reducedMotion) return;
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top+=88",
        end: () => `+=${(programs.length - 1) * Math.max(window.innerHeight * 0.42, 320)}`,
        pin: stage,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setEngaged(self.isActive);
          if (programmaticRef.current) return;
          const idx = Math.min(
            programs.length - 1,
            Math.max(0, Math.round(self.progress * (programs.length - 1)))
          );
          setActive(idx);
        },
        onLeave: () => setEngaged(false),
        onLeaveBack: () => setEngaged(false),
      });
      stRef.current = st;
    }, wrapper);

    return () => {
      ctx.revert();
      stRef.current = null;
    };
  }, [ready, reducedMotion, programs.length]);

  const goToIndex = (i: number) => {
    const clamped = Math.min(programs.length - 1, Math.max(0, i));
    setActive(clamped);

    const st = stRef.current;
    if (!st || reducedMotion) return;

    programmaticRef.current = true;
    clearTimeout(programmaticTimer.current);
    const denom = Math.max(1, programs.length - 1);
    const target = st.start + (st.end - st.start) * (clamped / denom);
    window.scrollTo({ top: target, behavior: "smooth" });
    programmaticTimer.current = setTimeout(() => {
      programmaticRef.current = false;
    }, 900);
  };

  const next = () => {
    if (active < programs.length - 1) goToIndex(active + 1);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div
        ref={stageRef}
        className={`grid gap-6 py-6 lg:grid-cols-[320px_1fr] ${paused ? "weapon-paused" : ""}`}
        style={{ ["--dur" as string]: `${INTERVAL_MS}ms` }}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
        onFocus={(e) => e.target.matches(":focus-visible") && setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {/* list */}
        <div
          ref={listRef}
          role="tablist"
          aria-label="Weapons"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {programs.map((p, i) => {
            const on = i === active;
            const accent = accentFor(i);
            return (
              <button
                key={p.slug}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={on}
                onClick={() => goToIndex(i)}
                className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-xl border px-4 py-3.5 text-left transition-all duration-500 ${
                  on
                    ? `bg-gradient-to-r to-transparent lg:translate-x-2 ${accent.listActiveBorder} ${accent.listActiveBg}`
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <span
                  className={`w-8 text-xl font-black tabular-nums transition-colors duration-500 ${
                    on ? accent.listActiveText : "text-white/25"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`whitespace-nowrap text-sm font-semibold transition-colors duration-500 lg:whitespace-normal ${
                    on ? "text-white" : "text-white/88 group-hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.name}
                </span>
                <span
                  aria-hidden
                  className={`ml-auto hidden transition-all duration-500 lg:block ${accent.listActiveText} ${
                    on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  →
                </span>

                {/* auto-advance progress */}
                {on && active < programs.length - 1 && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10" aria-hidden>
                    <span
                      key={`${active}`}
                      className={`weapon-bar block h-full bg-gradient-to-r ${accent.progressBar}`}
                      onAnimationEnd={next}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* stage */}
        <div className="relative min-h-[380px]">
          <div
            className="hero-glow pointer-events-none absolute -inset-[30%] opacity-50 transition-transform duration-[1400ms] ease-out"
            style={{ transform: `translate(${(active % 3) * 6 - 6}%, ${(active % 2) * 8 - 4}%) rotate(${active * 14}deg)` }}
          />

          <div className="absolute right-5 top-5 z-[60] flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
            <span
              className={`h-1.5 w-1.5 rounded-full ${paused ? "bg-white/30" : `animate-pulse ${accentFor(active).autoDot}`}`}
              style={paused ? undefined : { boxShadow: `0 0 8px ${accentFor(active).autoGlow}` }}
            />
            {paused ? "Paused" : "Auto"}
          </div>

          {programs.map((p, i) => (
            <WeaponCard
              key={p.slug}
              program={p}
              index={i}
              depth={i <= active ? active - i : -1}
              isActive={i === active}
              reducedMotion={reducedMotion}
              ready={ready}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
