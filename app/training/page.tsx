import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import Reveal from "@/app/components/Reveal";
import { T, Ta } from "@/app/components/Bilingual";
import doubleStick from "@/public/about/double-stick.jpg";
import CoreProgramsGrid from "@/app/components/CoreProgramsGrid";
import TrainingJourney from "@/app/components/TrainingJourney";
import ArsenalExplorer from "@/app/components/ArsenalExplorer";
import WarriorPhilosophy from "@/app/components/WarriorPhilosophy";
import TrackFinder from "@/app/components/TrackFinder";
import TrainingSchedule from "@/app/components/TrainingSchedule";

export const metadata: Metadata = {
  title: "Training Programs | Vellur Yudhakalam",
  description:
    "3-month foundational courses in traditional Tamil martial arts — Silambam staff fighting, Women's Self-Defense, Youth Program, and advanced battlefield weapon mastery.",
};

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

const navChips = [
  { id: "flagship", label: "Core Courses", ta: "முக்கியப் படிப்புகள்" },
  { id: "journey", label: "3-Month Journey", ta: "3-மாதப் பயணம்" },
  { id: "armoury", label: "Weapon Arsenal", ta: "ஆயுதக் களஞ்சியம்" },
  { id: "philosophy", label: "Warrior Code", ta: "வீர நெறி" },
  { id: "matcher", label: "Track Finder", ta: "பிரிவு கண்டறிதல்" },
  { id: "schedule", label: "Schedule & FAQ", ta: "நேரமும் வினாக்களும்" },
];

function SectionHeader({
  tag,
  title,
  subtitle,
  center = true,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 ${center ? "text-center" : ""}`}>
      <span
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400"
        style={heading}
      >
        <span className="h-px w-6 bg-amber-400/60" />
        {tag}
        <span className="h-px w-6 bg-amber-400/60" />
      </span>
      <h2
        className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        style={deco}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default function TrainingPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      {/* PAGE HERO */}
      <PageHero
        tag="Ancient Tamil Martial Arts"
        title="Training Programs"
        accent="Programs"
        description="3-month foundational courses in authentic Tamil martial arts — leading to advanced mastery for those who continue. Forged in discipline, cultural pride, and warrior instincts."
        image={doubleStick}
        position="center 35%"
      />

      {/* QUICK STICKY JUMP BAR */}
      <div className="sticky top-[65px] z-30 border-y border-white/10 bg-[#080503]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-3">
          {navChips.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white font-medium transition-all duration-200 hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-300"
              style={heading}
            >
              <T en={c.label} ta={c.ta} />
            </a>
          ))}
        </nav>
      </div>

      {/* ── SECTION 1: FLAGSHIP CORE PROGRAMS (From yudhakalam.in) ── */}
      <section id="flagship" className="relative scroll-mt-32 px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="What We Teach"
            title="Flagship Training Programs"
            subtitle="Our three foundational 3-month courses designed for beginner to advanced practitioners, women's empowerment, and young warriors of tomorrow."
          />
          <CoreProgramsGrid />
        </div>
      </section>

      {/* ── SECTION 2: 3-MONTH LEARNING JOURNEY (From yudhakalam.in) ── */}
      <section
        id="journey"
        className="relative scroll-mt-32 border-y border-white/10 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02] px-4 py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="Course Structure"
            title="Your 3-Month Learning Journey"
            subtitle="A clear, progressive roadmap that takes you from fundamental stances and Kaaladi footwork to partner sparring, tournament forms, and advanced weapon pathways."
          />
          <TrainingJourney />
        </div>
      </section>

      {/* ── SECTION 3: WEAPON ARSENAL & COMBAT DISCIPLINES (10 Disciplines) ── */}
      <section id="armoury" className="relative scroll-mt-32 px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="The Armoury"
            title="Ten Disciplines, One Legacy"
            subtitle="Explore our full weapon arsenal and empty-hand disciplines — each with its distinct reach, tempo, tactical footwork, and martial character."
          />
          <ArsenalExplorer />
        </div>
      </section>

      {/* ── SECTION 4: THIRUKKURAL WARRIOR CODE (From yudhakalam.in) ── */}
      <section
        id="philosophy"
        className="relative scroll-mt-32 border-y border-white/10 bg-black/30 px-4 py-16 sm:py-24"
      >
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="The Warrior's Code"
            title="Ancient Tamil Martial Philosophy"
            subtitle="True Silambam is not merely fighting technique — it is a discipline of mind, courage, and respect rooted in the timeless wisdom of Thirukkural."
          />
          <WarriorPhilosophy />
        </div>
      </section>

      {/* ── SECTION 5: INTERACTIVE TRACK FINDER ── */}
      <section id="matcher" className="relative scroll-mt-32 px-4 py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="Personalized Matcher"
            title="Find Your Starting Point"
            subtitle="Not sure which course fits your schedule, background, or goals? Use our quick matcher to see your recommended training pathway."
          />
          <TrackFinder />
        </div>
      </section>

      {/* ── SECTION 6: SCHEDULE, ESSENTIALS & FAQS ── */}
      <section
        id="schedule"
        className="relative scroll-mt-32 border-t border-white/10 px-4 py-16 sm:py-24"
      >
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            tag="The Training Floor"
            title="Batches, Schedules & Guidelines"
            subtitle="Weekday morning and evening batches, free training for women, and weekend masterclasses conducted by national champion instructors."
          />
          <TrainingSchedule />
        </div>
      </section>

      {/* ── SECTION 7: FINAL ENROLLMENT CTA ── */}
      <section className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:py-24">
        <div className="hero-glow pointer-events-none absolute -inset-[20%] opacity-20" />
        <Reveal direction="scale" className="relative mx-auto max-w-3xl">
          <div className="rounded-3xl border border-amber-400/35 bg-[#0a0604]/95 p-8 text-center shadow-2xl backdrop-blur transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.25)] sm:p-14">
            <span
              className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400"
              style={heading}
            >
              Begin Your Journey
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              style={deco}
            >
              Step Onto the{" "}
              <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Training Floor
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              Monthly batches start on the 1st and 15th of every month. Limited seats available per batch to maintain strict instructor-to-student attention.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-pulse rounded-xl bg-amber-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:bg-amber-300"
                style={heading}
              >
                Enroll Today — Reserve Slot
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-amber-400/60 hover:text-amber-300"
                style={heading}
              >
                Discover Our Heritage →
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Free training kits provided for women learners · Practice staffs provided for all students
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
