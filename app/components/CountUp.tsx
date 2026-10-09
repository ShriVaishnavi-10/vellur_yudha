"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(String(target));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);

        const run = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(String(Math.round(target * eased)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        };
        // wait for the preloader to open before counting
        const wait = () => {
          if (document.documentElement.classList.contains("site-ready")) run();
          else setTimeout(wait, 100);
        };
        wait();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
