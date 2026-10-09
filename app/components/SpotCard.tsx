"use client";

import type { MouseEvent, ReactNode } from "react";

/* Card with a gold spotlight that follows the cursor. */
export default function SpotCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`spot-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] ${className}`}
    >
      {children}
    </div>
  );
}
