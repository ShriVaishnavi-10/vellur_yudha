"use client";

import { useState } from "react";
import Link from "next/link";
import { learningJourney, type JourneyPhase } from "@/app/data/training";
import { T } from "@/app/components/Bilingual";

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

export default function TrainingJourney() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const active = learningJourney[selectedPhase];

  return (
    <div className="relative">
      {/* Interactive Step Navigator */}
      <div className="mx-auto mb-10 max-w-4xl">
        <div className="relative flex items-center justify-between">
          {/* Connector Line */}
          <div className="absolute left-6 right-6 top-1/2 h-0.5 -translate-y-1/2 bg-white/10" />
          <div
            className="absolute left-6 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-500"
            style={{
              width: `${(selectedPhase / (learningJourney.length - 1)) * 90}%`,
            }}
          />

          {learningJourney.map((step, idx) => {
            const isCurrent = idx === selectedPhase;
            const isCompleted = idx < selectedPhase;

            return (
              <button
                key={step.phase}
                onClick={() => setSelectedPhase(idx)}
                className="group relative z-10 flex flex-col items-center focus:outline-none"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-14 sm:w-14 ${
                    isCurrent
                      ? "scale-110 border-amber-400 bg-[#080503] text-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                      : isCompleted
                      ? "border-red-500 bg-[#080503] text-red-400"
                      : "border-white/20 bg-[#080503] text-white/40 group-hover:border-white/40 group-hover:text-white/80"
                  }`}
                  style={heading}
                >
                  <span className="text-sm font-black sm:text-base">
                    0{idx + 1}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <span
                    className={`block text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      isCurrent
                        ? "text-amber-400"
                        : "text-white/60 group-hover:text-white"
                    }`}
                    style={heading}
                  >
                    {step.phase}
                  </span>
                  <span className="hidden text-xs text-white/40 sm:block">
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Phase Interactive Spotlight */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/35 bg-gradient-to-br from-[#100806] via-[#0b0604] to-[#080503] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Background Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[8rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgba(251,191,36,0.08)] sm:text-[14rem]"
          style={deco}
        >
          {active.phase.toUpperCase()}
        </span>

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black"
                style={{ backgroundColor: active.accent, ...heading }}
              >
                {active.phase} · {active.title}
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                {active.hours}
              </span>
            </div>

            <h3
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              style={deco}
            >
              {active.focus}
            </h3>

            <p className="mt-2 text-sm text-amber-400/90" style={heading}>
              Tamil Classical Reference: {active.titleTa}
            </p>

            <div className="mt-6 space-y-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest text-white/60"
                style={heading}
              >
                Core Curriculum & Modules:
              </h4>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {active.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-white/85 sm:text-sm"
                  >
                    <span className="mt-0.5 text-amber-400">›</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                Target Milestone
              </span>
              <p
                className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl"
                style={heading}
              >
                &ldquo;{active.milestone}&rdquo;
              </p>
              <div className="mt-4 h-px w-full bg-white/10" />

              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                  Assessment Focus
                </span>
                <p className="mt-1 text-xs leading-relaxed text-white/80">
                  Demonstrated form accuracy, control of velocity, balance in low stances, and safety discipline.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="flex flex-1 items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-300"
                style={heading}
              >
                Start In {active.phase}
              </Link>
              {selectedPhase < learningJourney.length - 1 ? (
                <button
                  onClick={() => setSelectedPhase((prev) => prev + 1)}
                  className="rounded-xl border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-amber-400/60 hover:text-amber-300"
                  style={heading}
                >
                  Next Phase →
                </button>
              ) : (
                <Link
                  href="#armoury"
                  className="rounded-xl border border-amber-400/40 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-amber-400 transition-colors hover:bg-amber-400/10"
                  style={heading}
                >
                  Advanced Weapons Guild ↓
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3-Month Overview Cards (Direct reference to yudhakalam.in structure) */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {learningJourney.map((step, idx) => (
          <div
            key={step.phase}
            onClick={() => setSelectedPhase(idx)}
            className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
              idx === selectedPhase
                ? "border-amber-400/60 bg-amber-400/[0.06] shadow-lg"
                : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-bold uppercase tracking-wider text-amber-400"
                style={heading}
              >
                {step.phase}
              </span>
              <span className="text-[11px] text-white/50">{step.hours}</span>
            </div>
            <h4 className="mt-2 text-lg font-bold text-white" style={heading}>
              {step.title}
            </h4>
            <p className="mt-1 text-xs text-white/70 line-clamp-2">
              {step.focus}
            </p>
          </div>
        ))}
      </div>

      {/* Continuation Notice (Directly from yudhakalam.in) */}
      <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.03] p-6 text-center">
        <p className="text-sm leading-relaxed text-white/85">
          Interested candidates may continue to{" "}
          <strong className="text-amber-400 font-bold">
            Advanced Weapons Training
          </strong>{" "}
          (Double Stick, Vel Kambu, Surul Val, and Maan Kombu) after completing the 3-month foundational course.
        </p>
      </div>
    </div>
  );
}
