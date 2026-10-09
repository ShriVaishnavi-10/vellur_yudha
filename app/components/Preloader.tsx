"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/assets/logo.png";

const TITLE = "VELLUR YUDHAKALAM";
const DURATION = 2400;

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        t1 = setTimeout(() => {
          setPhase("exit");
          document.documentElement.classList.add("site-ready");
        }, 250);
        t2 = setTimeout(() => {
          setPhase("done");
          document.body.style.overflow = "";
        }, 1250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`preloader ${phase === "exit" ? "is-exit" : ""} ${phase === "done" ? "is-done" : ""}`}
      aria-hidden="true"
    >
      <div className="pre-curtain pre-top" />
      <div className="pre-curtain pre-bottom" />

      <div className="pre-inner">
        <div className="pre-glow" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }, (_, i) => (
            <i
              key={i}
              className="ember"
              style={{
                left: `${8 + i * 9}%`,
                width: 3 + (i % 3) * 2,
                height: 3 + (i % 3) * 2,
                animationDelay: `${(i * 0.37) % 2}s`,
                animationDuration: `${2.4 + (i % 4) * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative flex h-[140px] w-[140px] items-center justify-center">
          <span className="emblem-ring-a absolute inset-0 rounded-full border-2 border-transparent border-b-amber-400/25 border-t-amber-400" />
          <span className="emblem-ring-b absolute inset-2.5 rounded-full border-2 border-transparent border-l-red-500 border-r-red-500/25" />
          <div className="pre-mono">
            <Image
              src={logo}
              alt="Vellur Yudhakalam logo"
              width={84}
              height={84}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="pre-title">
          {Array.from(TITLE).map((ch, i) => (
            <span
              key={i}
              className="pre-letter"
              style={{ animationDelay: `${0.4 + i * 0.05}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
        <div className="mt-2 h-[3px] w-[min(280px,70vw)] overflow-hidden rounded-full bg-white/10">
          <div className="pre-bar-fill h-full rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <span
          className="text-xs tracking-[0.2em] text-amber-400"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
