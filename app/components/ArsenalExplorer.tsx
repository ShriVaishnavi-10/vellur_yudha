"use client";

import { useState } from "react";
import Link from "next/link";
import { trainingPrograms, type Category } from "@/app/data/training";
import SpotCard from "@/app/components/SpotCard";

const heading = { fontFamily: "var(--font-heading)" };

const categories: { id: "All" | Category; label: string }[] = [
  { id: "All", label: "All 10 Disciplines" },
  { id: "Weapons", label: "Weapons" },
  { id: "Unarmed", label: "Unarmed (Empty Hand)" },
  { id: "Special Programs", label: "Special & Conditioning" },
];

/* Per-category accent so the Armoury grid reads as three distinct branches,
   all still inside the site's amber/red/orange ember palette. */
const ACCENT: Record<
  Category,
  {
    stroke: string;
    badge: string;
    line: string;
    hoverBorder: string;
    hoverTitle: string;
    hoverNumber: string;
    link: string;
  }
> = {
  Weapons: {
    stroke: "#fbbf24",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    line: "bg-amber-500",
    hoverBorder: "hover:border-amber-400/50",
    hoverTitle: "group-hover:text-amber-300",
    hoverNumber: "group-hover:text-amber-400/20",
    link: "text-amber-400 hover:text-amber-300",
  },
  Unarmed: {
    stroke: "#fb8a5c",
    badge: "border-red-400/30 bg-red-500/10 text-red-300",
    line: "bg-red-500",
    hoverBorder: "hover:border-red-400/50",
    hoverTitle: "group-hover:text-red-300",
    hoverNumber: "group-hover:text-red-400/20",
    link: "text-red-400 hover:text-red-300",
  },
  "Special Programs": {
    stroke: "#fb923c",
    badge: "border-orange-400/30 bg-orange-400/10 text-orange-300",
    line: "bg-orange-500",
    hoverBorder: "hover:border-orange-400/50",
    hoverTitle: "group-hover:text-orange-300",
    hoverNumber: "group-hover:text-orange-400/20",
    link: "text-orange-400 hover:text-orange-300",
  },
};

export default function ArsenalExplorer() {
  const [activeTab, setActiveTab] = useState<"All" | Category>("All");

  const filtered =
    activeTab === "All"
      ? trainingPrograms
      : trainingPrograms.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isSelected = activeTab === cat.id;
          const count =
            cat.id === "All"
              ? trainingPrograms.length
              : trainingPrograms.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isSelected
                  ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                  : "border border-white/15 bg-white/[0.03] text-white/80 hover:border-amber-400/50 hover:text-white"
              }`}
              style={heading}
            >
              {cat.label} <span className="opacity-60">· {count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Disciplines */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => {
          const accent = ACCENT[item.category];
          return (
          <SpotCard
            key={item.slug}
            className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${accent.hoverBorder}`}
          >
            <div>
              {/* Header: Number and Category / Range */}
              <div className="flex items-center justify-between">
                <span
                  className={`block text-4xl font-black leading-none text-transparent transition-all duration-300 ${accent.hoverNumber}`}
                  style={{ ...heading, WebkitTextStroke: `1.5px ${accent.stroke}` }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-2">
                  {item.range && (
                    <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] text-white/70">
                      {item.range}
                    </span>
                  )}
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${accent.badge}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Tamil Name */}
              <div className="mt-4">
                <h3 className={`text-xl font-bold text-white transition-colors ${accent.hoverTitle}`} style={heading}>
                  {item.name}
                </h3>
                <p className="text-xs text-amber-400/80" style={heading}>
                  {item.nameTa}
                </p>
                {item.subtitle && (
                  <p className="mt-1 text-xs italic text-white/50">
                    {item.subtitle}
                  </p>
                )}
              </div>

              {/* Decorative line */}
              <div className={`mt-3 h-0.5 w-8 transition-all duration-300 group-hover:w-16 ${accent.line}`} />

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-white font-medium sm:text-sm">
                {item.description}
              </p>

              {/* Focus tags */}
              {item.focus && item.focus.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] text-zinc-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom link */}
            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-zinc-300">
                {item.duration || "Structured Course"}
              </span>
              <Link
                href="/contact"
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${accent.link}`}
                style={heading}
              >
                Inquire →
              </Link>
            </div>
          </SpotCard>
          );
        })}
      </div>
    </div>
  );
}
