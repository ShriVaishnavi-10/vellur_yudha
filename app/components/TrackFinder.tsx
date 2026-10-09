"use client";

import { useState } from "react";
import Link from "next/link";

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

type TrackResult = {
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  color: string;
  desc: string;
  skills: string[];
  enrollHref: string;
};

const recommendations: Record<string, TrackResult> = {
  beginner_fitness: {
    title: "Silambam – 3-Month Foundation",
    subtitle: "The Art of the Bamboo Staff",
    badge: "Recommended Track",
    duration: "3 Months (Basic)",
    color: "#fbbf24",
    desc: "Perfect start for building full-body agility, reflexes, and mastering authentic Tamil Kaaladi footwork with the traditional bamboo staff.",
    skills: ["Staff grip & circular flow", "Footwork (Kaaladi 1-4)", "Reflex defense drills"],
    enrollHref: "/contact?program=silambam",
  },
  women_defense: {
    title: "Women's Self-Defense & Empowerment",
    subtitle: "Confidence, Boundary Defense & Everyday Weapons",
    badge: "100% Free Tuition + Free Kit",
    duration: "3 Months (Basic) — FREE",
    color: "#fb7185",
    desc: "Specially tailored for women and young girls. Combines Silambam with practical situational awareness, close-range releases, and vocal assertiveness.",
    skills: ["Escape & release drills", "Stick defense tactics", "Awareness workshops"],
    enrollHref: "/contact?program=womens-self-defense",
  },
  youth_discipline: {
    title: "Youth Warrior Program",
    subtitle: "Warriors of Tomorrow (Ages 6–18)",
    badge: "Kids & Teens",
    duration: "3 Months (Basic)",
    color: "#38bdf8",
    desc: "Structured, energetic program building respect, focus, and physical fitness through traditional Tamil staff spinning and forms.",
    skills: ["Staff spinning rhythm", "Discipline & coordination", "Junior tournament sparring"],
    enrollHref: "/contact?program=youth",
  },
  advanced_weapons: {
    title: "The Weapon Arsenal & Kuthuvarisai",
    subtitle: "Double Stick, Surul Val, Vel Kambu & Empty Hand",
    badge: "Advanced Guild",
    duration: "Ongoing Mastery",
    color: "#ef4444",
    desc: "Intensive training for those ready for complex battlefield weapons: flexible swords (Surul Val), long spears (Vel Kambu), and empty-hand Kuthuvarisai.",
    skills: ["Dual weapon coordination", "Flexible steel control", "Varma & close-quarters locks"],
    enrollHref: "/contact?program=advanced-weapons",
  },
};

export default function TrackFinder() {
  const [profile, setProfile] = useState<string>("beginner");
  const [goal, setGoal] = useState<string>("fitness");

  const getResultKey = () => {
    if (profile === "women") return "women_defense";
    if (profile === "youth") return "youth_discipline";
    if (profile === "advanced" || goal === "weapons") return "advanced_weapons";
    return "beginner_fitness";
  };

  const result = recommendations[getResultKey()];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#100806] via-[#090504] to-[#080503] p-7 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20 transition-all duration-500"
        style={{ background: result.color }}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400"
            style={heading}
          >
            <span className="h-px w-8 bg-amber-400" />
            Interactive Track Matcher
          </span>
          <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl" style={deco}>
            Find Your <span className="text-amber-400">Warrior Track</span>
          </h3>
          <p className="mt-2 text-sm text-zinc-200">
            Tell us who is enrolling and what you want to achieve — we will match you with the right Yudhakalam course.
          </p>

          {/* Question 1: Who is enrolling? */}
          <div className="mt-6">
            <label className="text-xs font-bold uppercase tracking-wider text-white/80" style={heading}>
              1. Who is training?
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { id: "beginner", label: "Adult Beginner" },
                { id: "women", label: "Woman / Girl" },
                { id: "youth", label: "Youth (6–18)" },
                { id: "advanced", label: "Practitioner" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setProfile(opt.id)}
                  className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition-all ${
                    profile === opt.id
                      ? "border-amber-400 bg-amber-400/15 text-amber-300 shadow-md"
                      : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                  style={heading}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Primary Goal */}
          <div className="mt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-white/80" style={heading}>
              2. Your Primary Focus:
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                { id: "fitness", label: "Fitness & Reflexes" },
                { id: "defense", label: "Street Self-Defense" },
                { id: "weapons", label: "Weapon Mastery" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setGoal(opt.id)}
                  className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition-all ${
                    goal === opt.id
                      ? "border-amber-400 bg-amber-400/15 text-amber-300 shadow-md"
                      : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                  style={heading}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matched Recommendation Card */}
        <div
          className="relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 backdrop-blur transition-all duration-500 shadow-xl"
          style={{
            borderColor: `${result.color}55`,
            background: `linear-gradient(145deg, rgba(10,6,4,0.95), ${result.color}15)`,
          }}
        >
          <div>
            <div className="flex items-center justify-between">
              <span
                className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black"
                style={{ backgroundColor: result.color, ...heading }}
              >
                {result.badge}
              </span>
              <span className="text-xs text-white/70">{result.duration}</span>
            </div>

            <h4 className="mt-4 text-xl font-bold text-white sm:text-2xl" style={deco}>
              {result.title}
            </h4>
            <p className="mt-1 text-xs italic text-amber-300/80" style={heading}>
              {result.subtitle}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-white/80">
              {result.desc}
            </p>

            <div className="mt-4 border-t border-white/10 pt-3">
              <span className="text-[10px] uppercase tracking-widest text-white/50" style={heading}>
                Key Modules Included:
              </span>
              <ul className="mt-2 space-y-1">
                {result.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-white/80">
                    <span style={{ color: result.color }}>✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4">
            <Link
              href={result.enrollHref}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: result.color,
                ...heading,
              }}
            >
              <span>Enroll In This Track</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
