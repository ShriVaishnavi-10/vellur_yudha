import Image from "next/image";
import Link from "next/link";
import heroBanner from "@/public/hero-banner.jpg";
import templeStaff from "@/public/about/silambam-temple.png";
import { trainingPrograms } from "@/app/data/training";
import { T, Ta } from "@/app/components/Bilingual";
import WordRise from "@/app/components/WordRise";
import Reveal from "@/app/components/Reveal";
import CountUp from "@/app/components/CountUp";
import HeroBanner from "@/app/components/HeroBanner";
import duelDusk from "@/public/about/duel-dusk.jpg";
import womenWarrior from "@/public/about/women-warrior.png";
import WeaponShowcase from "@/app/components/WeaponShowcase";
import VirtueFan from "@/app/components/VirtueFan";
import WomenReveal from "@/app/components/WomenReveal";
import SpotCard from "@/app/components/SpotCard";

const stats = [
  { value: "10+", valueTa: "", label: "Weapon & Combat Disciplines", labelTa: "ஆயுத & போர்க்கலைப் பிரிவுகள்" },
  { value: "150+", valueTa: "", label: "Warriors Trained", labelTa: "பயிற்சி பெற்ற வீரர்கள்" },
  { value: "40%", valueTa: "", label: "Women Empowered", labelTa: "வலுப்பெற்ற பெண்கள்" },
  { value: "All Ages", valueTa: "அனைத்து வயது", label: "Kids to Adults", labelTa: "சிறுவர் முதல் பெரியவர் வரை" },
];

const whyUs = [
  {
    title: "Traditional Lineage",
    titleTa: "பாரம்பரிய மரபு",
    desc: "Training rooted in authentic Tamil Silambam and Kalari weapon traditions, passed down through generations.",
    descTa: "தலைமுறைகளாகக் கடத்தப்பட்ட உண்மையான தமிழ் சிலம்பம் மற்றும் களரி ஆயுத மரபுகளில் வேரூன்றிய பயிற்சி.",
  },
  {
    title: "Full Weapon Arsenal",
    titleTa: "முழுமையான ஆயுதத் தொகுப்பு",
    desc: "From Single Stick to Maan Kombu — train across ten disciplines, not just one style.",
    descTa: "ஒற்றைக் கம்பு முதல் மான் கொம்பு வரை — ஒரே பாணி மட்டுமல்ல, பத்து பிரிவுகளில் பயிற்சி.",
  },
  {
    title: "Women & Youth Focus",
    titleTa: "பெண்கள் & இளையோர் கவனம்",
    desc: "Dedicated self-defence training for women and age-appropriate programs for young warriors.",
    descTa: "பெண்களுக்கான தற்காப்புப் பயிற்சியும், இளம் வீரர்களுக்கு ஏற்ற வயதுக்கேற்ற திட்டங்களும்.",
  },
  {
    title: "Body & Discipline",
    titleTa: "உடலும் ஒழுக்கமும்",
    desc: "Gymnastics-based conditioning builds the flexibility and strength every weapon art demands.",
    descTa: "உடற்பயிற்சிச் சாகசம் சார்ந்த பயிற்சி, ஒவ்வொரு ஆயுதக் கலைக்கும் தேவையான நெகிழ்வையும் வலிமையையும் வளர்க்கிறது.",
  },
];

const weapons = trainingPrograms.filter((p) => p.category === "Weapons");
const womensProgram = trainingPrograms.find((p) => p.slug === "womens-self-defence");

const virtues = [
  { name: "Discipline", ta: "ஒழுக்கம்", desc: "Footwork, timing and form — practised until they become habit.", mark: "I" },
  { name: "Strength", ta: "வலிமை", desc: "Gymnastics-based conditioning builds the strength every weapon art demands.", mark: "II" },
  { name: "Focus", ta: "கவனம்", desc: "A steady mind, sharpened with every drill on the training floor.", mark: "III" },
  { name: "Pride", ta: "பெருமை", desc: "Deep pride in the Tamil martial heritage we carry forward.", mark: "IV" },
  { name: "Courage", ta: "தைரியம்", desc: "Facing every opponent and every fall without hesitation.", mark: "V" },
];

const womenPoints = [
  { en: "Self-defence training built for women", ta: "பெண்களுக்கான தற்காப்புப் பயிற்சி" },
  { en: "Awareness workshops alongside the training", ta: "பயிற்சியுடன் விழிப்புணர்வுப் பட்டறைகள்" },
  { en: "A safe and encouraging environment", ta: "பாதுகாப்பான, ஊக்கமளிக்கும் சூழல்" },
];

const tagline =
  "The ancient Tamil martial art of Silambam — forging warriors with discipline, strength, and cultural pride.";
const taglineTa =
  "பழமையான தமிழ் தற்காப்புக் கலையான சிலம்பம் — ஒழுக்கம், வலிமை, பண்பாட்டுப் பெருமையுடன் வீரர்களை உருவாக்குகிறது.";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden bg-[#080503]">
      {/* HERO */}
      <section className="relative">
        <div className="relative w-full overflow-hidden">
          <HeroBanner>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1600 / 893" }}
            >
              <Image
                src={heroBanner}
                alt="Vellur Yudhakalam"
                priority
                fill
                sizes="100vw"
                className="hero-kenburns object-cover object-center"
              />
            </div>
          </HeroBanner>
          {/* blend into page background */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent sm:h-32" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#080503] sm:h-56" />
        </div>

        <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 pb-16 sm:-mt-20 sm:pb-24">
          <p
            className="quote-dash bi-keep text-center text-lg italic text-amber-300 font-bold sm:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <WordRise en={tagline} ta={taglineTa} />
          </p>

          <div
            className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "1.3s" }}
          >
            <Link
              href="/training"
              className="btn-pulse rounded-md bg-red-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-200 hover:scale-105 hover:bg-red-500"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <T en="Explore Training" ta="பயிற்சியைக் காண்க" />
            </Link>
            <Link
              href="/contact"
              className="rounded-md border-2 border-amber-400 bg-amber-400/10 px-7 py-3 text-sm font-bold uppercase tracking-wider text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.25)] transition-all duration-200 hover:scale-105 hover:bg-amber-400 hover:text-black"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <T en="Join the Academy" ta="அகாடமியில் சேருங்கள்" />
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-6 border-t border-amber-400/25 pt-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="hero-rise flex flex-col items-center"
                style={{ animationDelay: `${1.6 + i * 0.15}s` }}
              >
                <span
                  className="text-3xl font-black text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.valueTa ? <T en={s.value} ta={s.valueTa} /> : <CountUp value={s.value} />}
                </span>
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <T en={s.label} ta={s.labelTa} />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center" aria-hidden>
            <span className="cue-line block h-10 w-px bg-gradient-to-b from-amber-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* ACADEMY INTRO */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <span className="pointer-events-none absolute -left-4 -top-4 hidden h-10 w-10 border-l-2 border-t-2 border-amber-400/40 sm:block" />
          <span className="pointer-events-none absolute -bottom-4 -right-4 hidden h-10 w-10 border-b-2 border-r-2 border-amber-400/40 sm:block" />

          <div className="grid gap-12 md:grid-cols-[1.15fr_auto_0.85fr] md:items-stretch">
            {/* NARRATIVE */}
            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                <span className="h-px w-8 bg-amber-400/60" />
                <T en="Our Heritage" ta="எங்கள் மரபு" />
              </span>

              <h2
                className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-deco)" }}
              >
                Ancient Art.
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                  Modern Warriors.
                </span>
                <Ta>பழம்பெரும் கலை. நவீன வீரர்கள்.</Ta>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/96">
                <T
                  en="Vellur Yudhakalam stands as a beacon of Tamil martial heritage — training warriors in Silambam staff fighting, traditional weaponry, and unarmed combat rooted in centuries of history."
                  ta="வேலூர் யுத்தகாலம் தமிழ் தற்காப்பு மரபின் கலங்கரை விளக்கமாக நிற்கிறது — சிலம்பக் கம்புச் சண்டை, பாரம்பரிய ஆயுதங்கள், பல நூற்றாண்டு வரலாற்றில் வேரூன்றிய நிராயுதப் போர்க்கலை ஆகியவற்றில் வீரர்களைப் பயிற்றுவிக்கிறது."
                />
              </p>
              <p className="mt-4 leading-relaxed text-white/88">
                <T
                  en="From first-time students to advanced practitioners, our academy builds discipline, physical strength, mental focus, and deep cultural pride — one weapon, one form, one warrior at a time."
                  ta="முதல்முறை மாணவர்கள் முதல் மேம்பட்ட பயிற்சியாளர்கள் வரை, எங்கள் அகாடமி ஒழுக்கம், உடல் வலிமை, மன ஒருமைப்பாடு, ஆழ்ந்த பண்பாட்டுப் பெருமையை வளர்க்கிறது — ஒரு ஆயுதம், ஒரு முறை, ஒரு வீரர் என்று படிப்படியாக."
                />
              </p>

              <blockquote className="mt-8 border-l-2 border-amber-400/40 pl-5">
                <p
                  className="text-base italic text-white/93"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {'"தீரன் ஒருவன் தனித்திருந்தாலும் போரில் வெல்வான்"'}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/80">
                  <T en="A true warrior conquers, even alone" ta="உண்மையான வீரன் தனித்திருந்தாலும் வெல்வான்" />
                </p>
              </blockquote>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all duration-200 hover:gap-3 hover:text-amber-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <T en="Discover Our Story" ta="எங்கள் கதையை அறியுங்கள்" />
                <span aria-hidden className="transition-transform duration-200">
                  →
                </span>
              </Link>
            </Reveal>

            {/* DIVIDER */}
            <div className="hidden md:block md:w-px md:bg-gradient-to-b md:from-transparent md:via-amber-400/25 md:to-transparent" />

            {/* NUMBERED PILLARS */}
            <div className="flex flex-col justify-center divide-y divide-white/10">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} direction="right" delay={i * 100}>
                  <div className="group flex items-start gap-5 py-6">
                    <span
                      className="w-12 shrink-0 text-3xl font-black leading-none tabular-nums text-amber-400/50 transition-colors duration-300 group-hover:text-amber-300"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-base font-semibold leading-tight text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        <T en={w.title} ta={w.titleTa} />
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/86">
                        <T en={w.desc} ta={w.descTa} />
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* FEATURE IMAGE */}
          <Reveal direction="scale" className="mt-14 sm:mt-20">
            <div className="photo-tile group relative aspect-[4/3] overflow-hidden rounded-3xl border border-amber-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:aspect-[21/9]">
              <Image
                src={templeStaff}
                alt="A Silambam practitioner in a deep stance with a long bamboo staff in a lamp-lit temple courtyard at sunset"
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover object-[72%_50%] transition-transform duration-[1600ms] ease-out group-hover:scale-105 sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080503]/95 via-[#080503]/40 to-transparent sm:bg-gradient-to-r sm:from-[#080503]/90 sm:via-[#080503]/40 sm:to-transparent" />
              <div className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/3" />
              <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-amber-400/60" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-amber-400/60" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:inset-y-0 sm:flex sm:w-1/2 sm:flex-col sm:justify-center sm:p-10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
                  <T en="The Living Tradition" ta="வாழும் மரபு" />
                </span>
                <p
                  className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-deco)" }}
                >
                  Tradition in{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                    Every Strike
                  </span>
                  <Ta>ஒவ்வொரு அடியிலும் மரபு</Ta>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCIPLINES STRIP */}
      <section className="marquee overflow-hidden border-y border-white/10 bg-white/[0.02] py-5" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...trainingPrograms, ...trainingPrograms].map((p, i) => (
            <span key={`${p.slug}-${i}`} className="flex items-center gap-10">
              <span
                className="text-lg font-bold uppercase tracking-widest text-white/25 transition-colors hover:text-amber-400 sm:text-xl"
                style={{ fontFamily: "var(--font-deco)" }}
              >
                {p.name}
              </span>
              <span className="text-amber-400/60">✦</span>
            </span>
          ))}
        </div>
      </section>


      {/* CHOOSE YOUR WEAPON */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              The Armoury
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-deco)" }}
            >
              <T en="Choose Your Weapon" ta="உங்கள் ஆயுதத்தைத் தேர்ந்தெடுங்கள்" />
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/88">
              Traditional weapons of Silambam and Kalari, each with its own rhythm, reach and discipline.
            </p>
          </Reveal>
          <WeaponShowcase programs={weapons} />
        </div>
      </section>

      {/* FOUR VIRTUES */}
      <section className="relative overflow-hidden border-y border-white/10 px-4 py-16 sm:py-24">
        <Image
          src={duelDusk}
          alt=""
          fill
          sizes="100vw"
          className="hero-kenburns object-cover object-[50%_40%] opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080503] via-[#080503]/80 to-[#080503]" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              The Warrior&apos;s Code
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-deco)" }}
            >
              <T en="Five Virtues of a Warrior" ta="வீரனின் ஐந்து பண்புகள்" />
            </h2>
          </Reveal>

          <VirtueFan virtues={virtues} />
        </div>
      </section>

      {/* WOMEN EMPOWERMENT */}
      <WomenReveal
        image={womenWarrior}
        imageAlt="A woman in a deep Silambam stance holding a long wooden staff at sunset in a temple courtyard"
        statValue="40%"
        statLabel="Women Empowered"
        tag="Women Empowerment"
        headingLead="Strength Has"
        headingAccent="No Gender"
        headingTa="பெண்கள் மேம்பாடு — வலிமைக்குப் பாலினம் இல்லை"
        description={womensProgram?.description}
        points={womenPoints}
        ctaHref="/training#flagship"
        ctaLabel="Explore Women's Self Defence"
      />

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              The Difference
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-deco)" }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                Vellur Yudhakalam
              </span>
              <Ta>ஏன் வேலூர் யுத்தகாலம்?</Ta>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/88">
              Authentic Tamil martial arts, a full arsenal of disciplines, and a place for every age on the training floor.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {/* featured: ten disciplines */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <SpotCard className="group h-full rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.07] via-transparent to-red-600/[0.08] p-8 sm:p-12">
                <span
                  className="relative block text-8xl font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(251,191,36,0.55)] transition-all duration-500 group-hover:text-amber-400/15 sm:text-9xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CountUp value="10+" />
                </span>
                <h3
                  className="relative mt-4 text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-deco)" }}
                >
                  <T en="Ten Disciplines, One Academy" ta="பத்து பிரிவுகள், ஒரே அகாடமி" />
                </h3>
                <p className="relative mt-3 max-w-lg leading-relaxed text-white/93">
                  Not just one style. Train across traditional weapons, unarmed combat and special programs —
                  from Single Stick to Maan Kombu, Kuthuvarisai and Gymnastics.
                </p>
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {trainingPrograms.slice(0, 7).map((p) => (
                    <span
                      key={p.slug}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/93 transition-colors duration-300 group-hover:border-amber-400/40"
                    >
                      {p.name}
                    </span>
                  ))}
                  <span className="rounded-full border border-amber-400/40 px-3 py-1 text-xs text-amber-400">+ more</span>
                </div>
                <Link
                  href="/training"
                  className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all duration-200 hover:gap-3 hover:text-amber-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  See All Training <span aria-hidden>→</span>
                </Link>
              </SpotCard>
            </Reveal>

            {[
              {
                title: "Traditional Lineage",
                ta: "பாரம்பரிய மரபு",
                desc: "Training rooted in authentic Tamil Silambam and Kalari weapon traditions, passed down through generations.",
              },
              {
                title: "Women & Youth Focus",
                ta: "பெண்கள் & இளையோர் கவனம்",
                desc: "Dedicated self-defence training for women and age-appropriate programs for young warriors.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={120 + i * 120}>
                <SpotCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <span className="relative block h-0.5 w-8 bg-red-500 transition-all duration-300 group-hover:w-16" />
                  <h3 className="relative mt-4 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    <T en={c.title} ta={c.ta} />
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/88">{c.desc}</p>
                </SpotCard>
              </Reveal>
            ))}

            {[
              {
                title: "Body & Discipline",
                ta: "உடலும் ஒழுக்கமும்",
                desc: "Gymnastics-based conditioning builds the flexibility and strength every weapon art demands.",
              },
              {
                title: "All Ages Welcome",
                ta: "எல்லா வயதினருக்கும் வரவேற்பு",
                desc: "Kids to adults, first-timers to advanced practitioners — there is a place on the floor for you.",
                stat: "150+",
                statLabel: "Warriors Trained",
              },
              {
                title: "Cultural Pride",
                ta: "பண்பாட்டுப் பெருமை",
                desc: "Every class blends physical conditioning with pride in the Tamil heritage we carry forward.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <SpotCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  {c.stat ? (
                    <span className="relative flex items-baseline gap-2">
                      <span className="text-3xl font-black text-amber-400" style={{ fontFamily: "var(--font-heading)" }}>
                        <CountUp value={c.stat} />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/82">{c.statLabel}</span>
                    </span>
                  ) : (
                    <span className="relative block h-0.5 w-8 bg-red-500 transition-all duration-300 group-hover:w-16" />
                  )}
                  <h3 className="relative mt-4 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    <T en={c.title} ta={c.ta} />
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/88">{c.desc}</p>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-4 py-16 sm:py-24">
        <Image
          src={duelDusk}
          alt=""
          fill
          sizes="100vw"
          className="hero-kenburns object-cover object-[50%_40%] opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080503] via-[#080503]/85 to-[#080503]" />
        <div className="hero-glow pointer-events-none absolute -inset-[20%] opacity-20" />
        <Reveal direction="scale" className="relative mx-auto max-w-3xl">
          <div className="rounded-2xl border border-amber-400/40 bg-[#0a0604]/95 p-10 text-center shadow-2xl backdrop-blur transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.25)]">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="Begin Your Journey" ta="உங்கள் பயணத்தைத் தொடங்குங்கள்" />
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-deco)" }}
            >
              Ready to Become a{" "}
              <span className="text-red-500">Warrior?</span>
              <Ta>நீங்கள் வீரராகத் தயாரா?</Ta>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/93">
              <T
                en="Join students of every age learning the ancient art of Silambam. Limited seats available for new batches."
                ta="பழம்பெரும் சிலம்பக் கலையைக் கற்கும் எல்லா வயது மாணவர்களுடன் இணையுங்கள். புதிய பிரிவுகளுக்கு இருக்கைகள் வரையறுக்கப்பட்டுள்ளன."
              />
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 hover:bg-amber-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <T en="Enroll Now" ta="இப்போதே பதிவு செய்யுங்கள்" />
              </Link>
              <Link
                href="/training"
                className="rounded-md border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white/96 transition-all duration-200 hover:scale-105 hover:bg-white/5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <T en="View Programs" ta="திட்டங்களைக் காண்க" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
