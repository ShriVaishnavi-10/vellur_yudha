"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "./CountUp";
import { Ta } from "./Bilingual";

type Point = { en: string; ta?: string };

/**
 * "Guard Breaks Open" — a scroll-driven reveal built for the Women
 * Empowerment section specifically (not the site-wide fade-in pattern).
 * Two dark gate panels, closed over the portrait like a stance guard, slide
 * apart from the centre with a gold seam-flash down the middle — then the
 * checklist "stamps" in one point at a time with a quick impact ring,
 * rather than a plain fade. Desktop: scrubbed to scroll. Mobile: simplified
 * one-shot. prefers-reduced-motion: everything shown in its final state.
 */
export default function WomenReveal({
  image,
  imageAlt,
  statValue,
  statLabel,
  tag,
  headingLead,
  headingAccent,
  headingTa,
  description,
  points,
  ctaHref,
  ctaLabel,
}: {
  image: StaticImageData;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  tag: string;
  headingLead: string;
  headingAccent: string;
  headingTa?: string;
  description?: string;
  points: Point[];
  ctaHref: string;
  ctaLabel: string;
}) {
  const root = useRef<HTMLElement>(null);
  const gateLeft = useRef<HTMLDivElement>(null);
  const gateRight = useRef<HTMLDivElement>(null);
  const seam = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const accent = useRef<HTMLSpanElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const badge = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const r = root.current;
    if (!r) return;

    // Sections above this one (the weapon showcase in particular) set up their own
    // GSAP pin behind a `ready`-gated *useEffect* — which fires after this
    // *useLayoutEffect*, once the browser has painted. That means the trigger below
    // gets measured against a page that's still missing that pin's spacer height,
    // baking in start/end positions that fire thousands of pixels too early. A
    // deferred refresh (after this tick's effects, and again once images settle)
    // re-measures against the final layout.
    const hardRefresh = () => ScrollTrigger.refresh(true);
    const deferredId = setTimeout(hardRefresh, 350);
    const onWindowLoad = () => hardRefresh();
    if (document.readyState === "complete") {
      requestAnimationFrame(onWindowLoad);
    } else {
      window.addEventListener("load", onWindowLoad);
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const items = list.current ? Array.from(list.current.children) : [];
      const rings = items.map((li) => li.querySelector("[data-ring]"));
      const textEls = [label.current, heading.current, paragraph.current, cta.current];

      /* ---------- Desktop: scrubbed to scroll ---------- */
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: r,
            // functions, not plain strings — GSAP only re-parses string start/end values
            // opportunistically on refresh, which left these stale once an *earlier*
            // section's own deferred GSAP pin grew the page after this trigger's first
            // measurement. Functions are re-invoked on every refresh, guaranteeing a
            // fresh recalculation against the page's current (final) layout.
            start: () => "top 82%",
            end: () => "center 42%",
            invalidateOnRefresh: true,
            scrub: 0.7,
            onRefresh: (self) => console.log(`[WomenReveal ST2] start=${self.start} end=${self.end}`),
          },
        });

        tl.fromTo(gateLeft.current, { xPercent: 0 }, { xPercent: -100, duration: 0.6, ease: "power2.inOut" }, 0)
          .fromTo(gateRight.current, { xPercent: 0 }, { xPercent: 100, duration: 0.6, ease: "power2.inOut" }, 0)
          .fromTo(seam.current, { opacity: 0, scaleY: 0.3 }, { opacity: 1, scaleY: 1, duration: 0.18 }, 0.18)
          .to(seam.current, { opacity: 0, duration: 0.22 }, 0.4)
          .fromTo(img.current, { scale: 1.14, yPercent: 4 }, { scale: 1, yPercent: 0, duration: 1 }, 0)
          .fromTo(
            label.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
            0.22
          )
          .fromTo(
            heading.current,
            { y: 30, opacity: 0, filter: "blur(8px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.26, ease: "power2.out" },
            0.3
          )
          .fromTo(
            accent.current,
            { scale: 1.14 },
            { scale: 1, duration: 0.2, ease: "back.out(2.2)" },
            0.42
          )
          .fromTo(
            paragraph.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.22, ease: "power2.out" },
            0.46
          )
          .fromTo(
            items,
            { scale: 0.4, opacity: 0, x: -14 },
            { scale: 1, opacity: 1, x: 0, duration: 0.18, ease: "back.out(2.6)", stagger: 0.09 },
            0.56
          )
          .fromTo(
            rings,
            { scale: 0.6, opacity: 0.9 },
            { scale: 1.7, opacity: 0, duration: 0.3, ease: "power2.out", stagger: 0.09 },
            0.56
          )
          .fromTo(
            badge.current,
            { y: 20, opacity: 0, rotate: -8 },
            { y: 0, opacity: 1, rotate: 0, duration: 0.22, ease: "back.out(1.8)" },
            0.74
          )
          .fromTo(cta.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2 }, 0.82);
      });

      /* ---------- Mobile: simplified one-shot ---------- */
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: r, start: "top 78%", once: true } });

        tl.fromTo(gateLeft.current, { xPercent: 0 }, { xPercent: -100, duration: 0.7, ease: "power2.inOut" }, 0)
          .fromTo(gateRight.current, { xPercent: 0 }, { xPercent: 100, duration: 0.7, ease: "power2.inOut" }, 0)
          .fromTo(img.current, { scale: 1.1 }, { scale: 1, duration: 1.1, ease: "power2.out" }, 0)
          .fromTo(textEls, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 0.3)
          .fromTo(
            items,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.1 },
            0.6
          )
          .fromTo(badge.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.5);
      });

      /* ---------- Reduced motion: final state, no movement ---------- */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([gateLeft.current, gateRight.current], { xPercent: (i) => (i === 0 ? -100 : 100) });
        gsap.set(seam.current, { opacity: 0 });
        gsap.set([img.current, ...textEls, badge.current, ...items], {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: "none",
        });
        gsap.set(rings, { opacity: 0 });
      });
    }, r);

    return () => {
      clearTimeout(deferredId);
      window.removeEventListener("load", onWindowLoad);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-gradient-to-b from-[#080503] via-[#0b0705] to-[#080503] px-4 py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-red-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-56 bottom-0 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
        {/* image, behind a two-panel guard that opens from the centre */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <span className="absolute -inset-3 translate-x-3 translate-y-3 rounded-3xl border border-amber-400/40" />
          <span className="ring-spin pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full border border-dashed border-red-500/50" />

          <div className="photo-tile group relative aspect-[4/5] overflow-hidden rounded-3xl border border-amber-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div ref={img} className="absolute inset-0 will-change-transform">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[25%_50%] transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                onLoad={() => ScrollTrigger.refresh()}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080503]/95 via-transparent to-transparent" />
            <div className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/3" />

            {/* the two gate panels */}
            <div
              ref={gateLeft}
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 border-r border-amber-400/50 bg-[#080503]"
            />
            <div
              ref={gateRight}
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 border-l border-amber-400/50 bg-[#080503]"
            />
            {/* the centre seam flash as the gates part */}
            <div
              ref={seam}
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 opacity-0"
              style={{
                background: "linear-gradient(180deg, transparent, #fbbf24, #ef4444, #fbbf24, transparent)",
                boxShadow: "0 0 18px rgba(251,191,36,0.8)",
              }}
            />
          </div>

          {/* floating stat */}
          <div
            ref={badge}
            className="absolute -bottom-6 -right-2 rounded-2xl border border-amber-400/40 bg-[#0a0604]/95 px-6 py-4 text-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur sm:-right-6"
          >
            <span className="block text-4xl font-black text-amber-400" style={{ fontFamily: "var(--font-heading)" }}>
              <CountUp value={statValue} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/88">{statLabel}</span>
          </div>
        </div>

        {/* copy */}
        <div>
          <span
            ref={label}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400"
          >
            <span className="h-px w-8 bg-amber-400/60" />
            {tag}
          </span>
          <h2
            ref={heading}
            className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-deco)", textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
          >
            {headingLead}{" "}
            <span
              ref={accent}
              className="inline-block bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent"
            >
              {headingAccent}
            </span>
            {headingTa && <Ta>{headingTa}</Ta>}
          </h2>
          {description && (
            <p
              ref={paragraph}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
            >
              {description}
            </p>
          )}

          <ul ref={list} className="mt-8 space-y-4">
            {points.map((pt) => (
              <li key={pt.en} className="group flex items-center gap-4">
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                  <span
                    data-ring
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full border-2 border-amber-400 opacity-0"
                  />
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/50 text-sm text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                    ✓
                  </span>
                </span>
                <span className="text-[15px] font-medium text-white/97">{pt.en}</span>
              </li>
            ))}
          </ul>

          <div ref={cta} className="mt-9">
            <Link
              href={ctaHref}
              className="btn-pulse inline-block rounded-md bg-red-600 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 hover:bg-red-500"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
