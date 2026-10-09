"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import artOfSilambam from "@/public/about/art-of-silambam.jpg";
import { Ta } from "./Bilingual";

/** Slant of the strike edge, in % of the image width (top edge leads the bottom edge). */
const SKEW = 28;

/**
 * "Silambam Strike Reveal" — an impactful About section with high-contrast typography.
 * A slanted mask sweeps across the image like a fast staff strike, while the text
 * animates into 100% crisp visibility with zero scrub-dimming.
 */
export default function AboutStrike({ href = "/about" }: { href?: string }) {
  const root = useRef<HTMLElement>(null);
  const clip = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const line = useRef<SVGLineElement>(null);
  const staff = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const rule = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const r = root.current;
    if (!r) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // The strike edge. `p` is the position of the bottom of the slanted edge, in % of width.
      const edge = { p: -SKEW };
      const draw = () => {
        const bottom = edge.p;
        const top = edge.p + SKEW;
        if (clip.current) {
          clip.current.style.clipPath = `polygon(0% 0%, ${top}% 0%, ${bottom}% 100%, 0% 100%)`;
        }
        const l = line.current;
        if (l) {
          l.setAttribute("x1", String(top));
          l.setAttribute("x2", String(bottom));
          l.style.opacity = edge.p <= -SKEW + 1 || edge.p >= 100 ? "0" : "1";
        }
      };
      draw();

      const textEls = [label.current, heading.current, paragraph.current, cta.current].filter(Boolean);

      /* Trigger clean one-shot entrance so text remains 100% sharp and NEVER dimmed by scroll scrub */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: r,
            start: "top 82%",
            once: true,
          },
        });

        tl.to(edge, { p: 100, duration: 0.9, ease: "power3.inOut", onUpdate: draw }, 0)
          .fromTo(img.current, { scale: 1.08 }, { scale: 1, duration: 1.2, ease: "power2.out" }, 0)
          .fromTo(
            staff.current,
            { opacity: 0, rotate: -42, x: -30 },
            { opacity: 1, rotate: -30, x: 20, duration: 0.8, ease: "power2.out" },
            0.15
          )
          .fromTo(
            textEls,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
            0.2
          )
          .fromTo(
            rule.current,
            { width: 0, opacity: 0 },
            { width: 160, opacity: 1, duration: 0.5, ease: "power3.out" },
            0.4
          );
      });

      /* Reduced motion fallback: instantly set 100% visible */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        edge.p = 100;
        draw();
        gsap.set([...textEls, staff.current], { opacity: 1, y: 0, filter: "none" });
        gsap.set(rule.current, { width: 160, opacity: 1 });
      });
    }, r);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about-strike"
      className="about-strike relative overflow-hidden bg-[#050302] px-4 py-14 sm:py-20"
    >
      {/* no-JS fallback: show everything */}
      <noscript>
        <style>{`.about-strike [data-hidden]{opacity:1!important;clip-path:none!important;transform:none!important;filter:none!important}.about-strike [data-rule]{width:160px!important}`}</style>
      </noscript>

      {/* Very subtle deep ambient tone — no bright washes to preserve maximum text contrast */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-red-950/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-black/60 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        {/* ---------------- Image ---------------- */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {/* staff-inspired diagonal accent */}
          <div
            ref={staff}
            data-hidden
            aria-hidden
            className="pointer-events-none absolute -right-6 top-10 z-20 hidden h-[2px] w-[320px] origin-center opacity-0 sm:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #b91c1c 18%, #ea580c 70%, #fbbf24 92%, transparent 100%)",
              boxShadow: "0 0 14px rgba(234,88,12,0.45)",
              transform: "rotate(-42deg)",
            }}
          />

          <div className="group relative aspect-[4/5] md:aspect-[4/5]">
            {/* clipped image */}
            <div
              ref={clip}
              data-hidden
              className="absolute inset-0 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-bl-md rounded-tr-md border border-amber-400/40 shadow-[0_30px_90px_rgba(0,0,0,1),0_0_50px_rgba(185,28,28,0.3)]"
              style={{ clipPath: `polygon(0% 0%, 0% 0%, ${-SKEW}% 100%, 0% 100%)` }}
            >
              {/* hover zoom (CSS) wraps the parallax layer */}
              <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]">
                <div ref={img} className="absolute -inset-[6%] will-change-transform">
                  <Image
                    src={artOfSilambam}
                    alt="A traditional Tamil Silambam warrior in a deep combat stance with a bamboo staff in an ancient temple courtyard at sunset"
                    fill
                    sizes="(min-width: 768px) 50vw, 90vw"
                    className="object-cover object-[50%_35%]"
                    priority
                  />
                </div>
              </div>

              {/* soft dark shading to tone down background glare while keeping warrior vivid */}
              <div className="pointer-events-none absolute inset-0 bg-black/25" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050302] via-transparent to-black/40" />
              <div className="strike-grain pointer-events-none absolute inset-0" />

              {/* hover overlay + link */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              <Link
                href={href}
                className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
              >
                <span
                  className="rounded-lg border border-amber-400 bg-black/90 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-amber-300 backdrop-blur shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-300 hover:bg-amber-400 hover:text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Discover Our Story →
                </span>
              </Link>
            </div>

            {/* the strike edge itself */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
            >
              <line
                ref={line}
                x1={0}
                y1={0}
                x2={-SKEW}
                y2={100}
                stroke="#fbbf24"
                strokeWidth={2.5}
                vectorEffect="non-scaling-stroke"
                style={{ opacity: 0, filter: "drop-shadow(0 0 8px rgba(251,191,36,1))" }}
              />
            </svg>

            {/* glowing corner accents */}
            <span className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-amber-400" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-amber-400" />
          </div>
        </div>

        {/* ---------------- Copy with Pitch Dark Backing & High-Contrast Typography ---------------- */}
        <div className="relative rounded-3xl border border-amber-400/35 bg-[#0a0604]/95 p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,1)]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/70 bg-amber-400/20 px-4 py-1.5 shadow-[0_0_20px_rgba(251,191,36,0.35)]">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
            <span
              ref={label}
              data-hidden
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Our Tradition
            </span>
          </div>

          {/* Main Heading */}
          <h2
            ref={heading}
            data-hidden
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08]"
            style={{ fontFamily: "var(--font-deco)" }}
          >
            <span className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,1)]">
              THE ART OF
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ffe57f] via-[#ffc72c] to-[#ff9100] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,200,0,0.6)]">
              SILAMBAM
            </span>
            <Ta>சிலம்பக் கலை — மரபின் வீரம்</Ta>
          </h2>

          {/* Glowing Rule Divider */}
          <div
            ref={rule}
            data-hidden
            data-rule
            className="mt-6 h-[3px] w-0 opacity-0"
            style={{
              background: "linear-gradient(90deg, #ffd700, #ff8c00, transparent)",
              boxShadow: "0 0 18px rgba(255,215,0,0.85)",
            }}
          />

          {/* Description Paragraph */}
          <p
            ref={paragraph}
            data-hidden
            className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,1)]"
          >
            Silambam is the ancient Tamil martial art built around the long bamboo staff — flowing,
            circular movements that train footwork, timing and control, and extend into a full arsenal
            of traditional weapons. At Vellur Yudhakalam, that tradition is practised and passed on
            to students of every age.
          </p>

          {/* Highlight Chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="rounded-lg border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-300">
              🎋 Bamboo Staff Mastery
            </span>
            <span className="rounded-lg border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-300">
              ⚡ Kaaladi Footwork
            </span>
            <span className="rounded-lg border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-300">
              ⚔️ Full Weapon Arsenal
            </span>
          </div>

          {/* High-Visibility Solid CTA */}
          <div ref={cta} data-hidden className="mt-8">
            <Link
              href={href}
              className="group/cta inline-flex items-center gap-3 rounded-xl bg-amber-400 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-[0_0_45px_rgba(251,191,36,0.9)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Discover Our Story
              <span aria-hidden className="transition-transform duration-300 group-hover/cta:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
