"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`flex flex-1 flex-col transition-all duration-500 ease-out ${
        // Once mounted, drop the translate utility entirely rather than setting it to
        // translate-y-0 — Tailwind's translate-y-0 still computes to `transform:
        // translateY(0)`, which (even as a no-op offset) creates a new containing block
        // for any `position: fixed` descendant, anywhere on the page. That silently broke
        // GSAP ScrollTrigger's pinning math in the Training section. No translate class
        // here means `transform: none`, which doesn't have that effect.
        mounted ? "opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
