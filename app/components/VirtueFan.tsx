"use client";

import { useEffect, useRef, useState } from "react";
import { T } from "./Bilingual";

const INTERVAL_MS = 2600;

type Virtue = { name: string; ta: string; desc: string; mark: string };

type Accent = {
  ring: string;
  innerRing: string;
  mark: string;
  topBar: string;
  borderActive: string;
  glowActive: string;
  wash: string;
  dot: string;
};

/* Each virtue gets its own accent so the five cards read as distinct —
   still inside the site's warm amber/red/orange ember palette. */
const ACCENT_CYCLE: Accent[] = [
  {
    // amber — Discipline
    ring: "border-amber-400/70",
    innerRing: "border-amber-400",
    mark: "text-amber-400",
    topBar: "from-amber-400 to-red-500",
    borderActive: "rgba(251,191,36,0.75)",
    glowActive: "rgba(251,191,36,0.25)",
    wash: "rgba(251,191,36,0.14)",
    dot: "bg-amber-400",
  },
  {
    // crimson — Strength
    ring: "border-red-400/70",
    innerRing: "border-red-400",
    mark: "text-red-400",
    topBar: "from-red-400 to-amber-500",
    borderActive: "rgba(251,138,92,0.75)",
    glowActive: "rgba(251,138,92,0.25)",
    wash: "rgba(251,138,92,0.14)",
    dot: "bg-red-400",
  },
  {
    // orange — Focus
    ring: "border-orange-400/70",
    innerRing: "border-orange-400",
    mark: "text-orange-400",
    topBar: "from-orange-400 to-amber-500",
    borderActive: "rgba(251,146,60,0.75)",
    glowActive: "rgba(251,146,60,0.25)",
    wash: "rgba(251,146,60,0.14)",
    dot: "bg-orange-400",
  },
  {
    // gold — Pride
    ring: "border-yellow-400/70",
    innerRing: "border-yellow-400",
    mark: "text-yellow-400",
    topBar: "from-yellow-400 to-amber-600",
    borderActive: "rgba(250,204,21,0.75)",
    glowActive: "rgba(250,204,21,0.25)",
    wash: "rgba(250,204,21,0.14)",
    dot: "bg-yellow-400",
  },
  {
    // deep red — Courage
    ring: "border-red-600/70",
    innerRing: "border-red-600",
    mark: "text-red-500",
    topBar: "from-red-600 to-amber-400",
    borderActive: "rgba(193,58,18,0.75)",
    glowActive: "rgba(193,58,18,0.3)",
    wash: "rgba(193,58,18,0.16)",
    dot: "bg-red-600",
  },
];

const accentFor = (index: number) => ACCENT_CYCLE[index % ACCENT_CYCLE.length];

/* Per-card resting transform for a given signed offset from the active card
   (shortest-path, so the fan stays balanced instead of growing one-sided).
   Pivoting from the bottom edge, like a hand of cards fanned from a base,
   reads more natural than pivoting from dead centre. */
function fanStyle(offset: number, isActive: boolean): React.CSSProperties {
  const abs = Math.abs(offset);
  const dir = Math.sign(offset);
  return {
    transform: `translateX(${dir * abs * 29}%) translateY(${abs * 12}px) rotate(${dir * abs * 5.5}deg) scale(${1 - abs * 0.07})`,
    transformOrigin: "50% 100%",
    zIndex: 40 - abs,
    opacity: isActive ? 1 : Math.max(0.5, 1 - abs * 0.2),
    filter: isActive ? "none" : `brightness(${1 - abs * 0.12})`,
  };
}

export default function VirtueFan({ virtues }: { virtues: Virtue[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const paused = hovered || !inView;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    // IntersectionObserver callbacks fire asynchronously, so we can't tell "already
    // visible at mount" from "scrolled into view moments later" just by looking at
    // which callback is first — by the time it runs, the page may already have
    // scrolled. Instead, measure synchronously right now, before any further
    // scrolling can happen: only suppress the *next* callback if we're truly
    // already past the threshold this instant (a refresh/deep-link restoring scroll
    // position mid-page). Every later crossing — including the user scrolling away
    // and back — is honoured normally.
    const rect = node.getBoundingClientRect();
    const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const alreadyInView = rect.height > 0 && visible / rect.height >= 0.4;

    let ignoreNext = alreadyInView;
    const io = new IntersectionObserver(
      ([e]) => {
        if (ignoreNext) {
          ignoreNext = false;
          return;
        }
        setInView(e.isIntersecting);
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // restart the countdown whenever `active` changes too, so a manual click or dot
  // press pushes autoplay's next tick out instead of being overridden moments later
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % virtues.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [paused, active, virtues.length]);

  const n = virtues.length;
  const offsetOf = (i: number) => {
    let o = i - active;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    return o;
  };

  return (
    <div ref={rootRef}>
      {/* desktop/tablet: fanned stack */}
      <div
        role="tablist"
        aria-label="Virtues"
        className="relative mx-auto hidden h-[420px] max-w-2xl md:grid md:place-items-center"
        onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
      >
        {virtues.map((v, i) => {
          const offset = offsetOf(i);
          const isActive = i === active;
          const accent = accentFor(i);
          return (
            <button
              key={v.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className="v-fan-card group col-start-1 row-start-1 flex h-[360px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl border bg-[#0a0604]/95 p-9 text-center backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
              style={{
                ...fanStyle(offset, isActive),
                borderColor: isActive ? accent.borderActive : "rgba(255,255,255,0.12)",
                boxShadow: isActive
                  ? `0 24px 60px rgba(0,0,0,0.8), 0 0 60px ${accent.glowActive}`
                  : "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              {isActive && (
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(ellipse at top, ${accent.wash}, transparent 70%)` }}
                />
              )}
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-center bg-gradient-to-r transition-transform duration-500 ${accent.topBar} ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center">
                <span
                  className={`ring-spin absolute inset-0 rounded-full border border-dashed ${
                    isActive ? accent.ring : "border-amber-400/30"
                  }`}
                />
                <span
                  className={`absolute inset-3 rounded-full border transition-colors duration-300 ${
                    isActive ? accent.innerRing : "border-amber-400/25"
                  }`}
                />
                <span
                  className={`text-3xl font-black ${isActive ? accent.mark : "text-amber-400"}`}
                  style={{ fontFamily: "var(--font-deco)" }}
                >
                  {v.mark}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                <T en={v.name} ta={v.ta} />
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white font-medium">{v.desc}</p>
            </button>
          );
        })}
      </div>

      {/* mobile: simple grid, unchanged */}
      <div className="grid gap-6 sm:grid-cols-2 md:hidden">
        {virtues.map((v, i) => {
          const accent = accentFor(i);
          return (
            <div
              key={v.name}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0604]/95 p-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent.borderActive)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse at top, ${accent.wash}, transparent 70%)` }}
              />
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${accent.topBar}`}
              />
              <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center">
                <span className={`ring-spin absolute inset-0 rounded-full border border-dashed ${accent.ring}`} />
                <span className={`absolute inset-3 rounded-full border transition-colors duration-300 ${accent.innerRing}`} />
                <span className={`text-3xl font-black ${accent.mark}`} style={{ fontFamily: "var(--font-deco)" }}>
                  {v.mark}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                <T en={v.name} ta={v.ta} />
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white font-medium">{v.desc}</p>
            </div>
          );
        })}
      </div>

      {/* dots (desktop only, follows the fan) */}
      <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
        {virtues.map((v, i) => (
          <button
            key={v.name}
            type="button"
            aria-label={`Show ${v.name}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? `w-6 ${accentFor(i).dot}` : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
