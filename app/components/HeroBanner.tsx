"use client";

import { useEffect, useRef, type ReactNode } from "react";

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 3 + (i % 4) * 2,
  duration: 8 + (i % 6) * 2,
  delay: -((i * 1.3) % 10),
}));

/* Wraps the hero image: mouse + scroll parallax, glow, embers and a light sweep. */
export default function HeroBanner({ children }: { children: ReactNode }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const scroll = Math.min(window.scrollY, 800) * 0.15;
      layer.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y + scroll}px, 0) scale(1.06)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e: MouseEvent) => {
      const wrap = wrapRef.current;
      if (wrap) {
        const r = wrap.getBoundingClientRect();
        wrap.style.setProperty("--sx", `${e.clientX - r.left}px`);
        wrap.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }
      mouse.current.x = -(e.clientX / window.innerWidth - 0.5) * 24;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 16;
      schedule();
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    apply();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-in relative w-full overflow-hidden">
      <div
        ref={layerRef}
        className="will-change-transform transition-transform duration-300 ease-out"
      >
        {children}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--sx,50%)_var(--sy,40%),rgba(251,191,36,0.14),transparent_65%)]" />
      <div className="hero-glow pointer-events-none absolute -inset-[20%]" />
      <div className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/3" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
