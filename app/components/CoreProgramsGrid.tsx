"use client";

import { useState } from "react";
import Link from "next/link";
import { flagshipPrograms, type FlagshipProgram } from "@/app/data/training";
import { T, Ta } from "@/app/components/Bilingual";

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

export default function CoreProgramsGrid() {
  const [activeId, setActiveId] = useState<string>("all");

  const displayed =
    activeId === "all"
      ? flagshipPrograms
      : flagshipPrograms.filter((p) => p.id === activeId);

  return (
    <div className="relative">
      {/* Quick Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveId("all")}
          className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            activeId === "all"
              ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]"
              : "border border-white/15 bg-white/[0.03] text-white/80 hover:border-amber-400/50 hover:text-white"
          }`}
          style={heading}
        >
          All 3 Flagship Courses
        </button>
        {flagshipPrograms.map((p) => {
          const isSelected = activeId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isSelected
                  ? "text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                  : "border border-white/15 bg-white/[0.03] text-white/80 hover:border-amber-400/50 hover:text-white"
              }`}
              style={{
                ...heading,
                backgroundColor: isSelected ? p.color : undefined,
              }}
            >
              {p.name.split("–")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Flagship Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {displayed.map((prog) => {
          return (
            <div
              key={prog.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#100806] via-[#090504] to-[#080503] p-7 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-9"
              style={{
                boxShadow: `0 0 0 1px ${prog.color}22`,
              }}
            >
              {/* Top Accent Light Bar */}
              <span
                className="absolute inset-x-0 top-0 h-1.5 transition-all duration-500 group-hover:h-2"
                style={{
                  background: `linear-gradient(90deg, ${prog.color}, transparent)`,
                }}
              />

              {/* Background Glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: prog.glowColor,
                  opacity: 0.35,
                }}
              />

              <div>
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-black"
                    style={{ backgroundColor: prog.color, ...heading }}
                  >
                    {prog.badge}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    {prog.level}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-6">
                  <span
                    className="text-xs uppercase tracking-widest text-amber-400/80"
                    style={heading}
                  >
                    {prog.duration}
                  </span>
                  <h3
                    className="mt-1 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-amber-300 sm:text-3xl"
                    style={deco}
                  >
                    {prog.name}
                  </h3>
                  <p
                    className="mt-1 text-sm italic text-white/60"
                    style={heading}
                  >
                    {prog.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  {prog.description}
                </p>

                {/* What You'll Learn (Directly from yudhakalam.in) */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <h4
                    className="text-xs font-semibold uppercase tracking-widest text-amber-400"
                    style={heading}
                  >
                    What You&apos;ll Learn
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {prog.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-xs text-white/80 sm:text-sm"
                      >
                        <span
                          className="mt-0.5 text-xs font-black"
                          style={{ color: prog.color }}
                        >
                          ✦
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Highlights */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Course Highlight
                  </span>
                  <p className="mt-1 text-xs text-amber-300/90">
                    {prog.highlights[0]}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  href={prog.ctaHref}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: prog.color,
                    ...heading,
                  }}
                >
                  <span>{prog.ctaText}</span>
                  <span aria-hidden>→</span>
                </Link>
                <p className="mt-2 text-center text-[11px] text-white/50">
                  {prog.suitableFor}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
