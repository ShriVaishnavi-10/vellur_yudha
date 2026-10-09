import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArsenalTabs from "@/app/components/ArsenalTabs";
import Reveal from "@/app/components/Reveal";
import CountUp from "@/app/components/CountUp";
import SpotCard from "@/app/components/SpotCard";
import { trainingPrograms } from "@/app/data/training";
import { T, Ta } from "@/app/components/Bilingual";
import TitleWords from "@/app/components/TitleWords";
import AboutStrike from "@/app/components/AboutStrike";
import logo from "@/public/assets/logo.png";

export const metadata: Metadata = {
  title: "About | Vellur Yudhakalam",
  description:
    "Learn about Vellur Yudhakalam, an academy dedicated to preserving and teaching traditional Tamil martial arts.",
};

const stats = [
  { value: "10+", valueTa: "", label: "Disciplines", labelTa: "பிரிவுகள்" },
  { value: "150+", valueTa: "", label: "Warriors Trained", labelTa: "பயிற்சி பெற்ற வீரர்கள்" },
  { value: "40%", valueTa: "", label: "Women Empowered", labelTa: "வலுப்பெற்ற பெண்கள்" },
  { value: "All Ages", valueTa: "அனைத்து வயது", label: "Kids to Adults", labelTa: "சிறுவர் முதல் பெரியவர் வரை" },
];

const pillars = [
  { title: "Traditional Lineage", titleTa: "பாரம்பரிய மரபு", desc: "Training rooted in authentic Tamil Silambam and Kalari weapon traditions, passed down through generations.", descTa: "தலைமுறைகளாகக் கடத்தப்பட்ட உண்மையான தமிழ் சிலம்பம் மற்றும் களரி ஆயுத மரபுகளில் வேரூன்றிய பயிற்சி." },
  { title: "Full Weapon Arsenal", titleTa: "முழுமையான ஆயுதத் தொகுப்பு", desc: "From Single Stick to Maan Kombu — train across ten disciplines, not just one style.", descTa: "ஒற்றைக் கம்பு முதல் மான் கொம்பு வரை — ஒரே பாணி மட்டுமல்ல, பத்து பிரிவுகளில் பயிற்சி." },
  { title: "Women & Youth Focus", titleTa: "பெண்கள் & இளையோர் கவனம்", desc: "Dedicated self-defence training for women and age-appropriate programs for young warriors.", descTa: "பெண்களுக்கான தற்காப்புப் பயிற்சியும், இளம் வீரர்களுக்கு ஏற்ற வயதுக்கேற்ற திட்டங்களும்." },
  { title: "Body & Discipline", titleTa: "உடலும் ஒழுக்கமும்", desc: "Gymnastics-based conditioning builds the flexibility and strength every weapon art demands.", descTa: "உடற்பயிற்சிச் சாகசம் சார்ந்த பயிற்சி, ஒவ்வொரு ஆயுதக் கலைக்கும் தேவையான நெகிழ்வையும் வலிமையையும் வளர்க்கிறது." },
  { title: "Cultural Pride", titleTa: "பண்பாட்டுப் பெருமை", desc: "Every class blends physical conditioning with pride in the heritage we carry forward.", descTa: "ஒவ்வொரு வகுப்பும் உடல் பயிற்சியுடன், நாங்கள் முன்னெடுத்துச் செல்லும் மரபின் பெருமையையும் இணைக்கிறது." },
  { title: "Every Age Welcome", titleTa: "எல்லா வயதினருக்கும் வரவேற்பு", desc: "From first-time students to advanced practitioners, there is a place on the training floor for you.", descTa: "முதல்முறை மாணவர்கள் முதல் மேம்பட்ட பயிற்சியாளர்கள் வரை, பயிற்சிக் களத்தில் உங்களுக்கும் இடம் உண்டு." },
];

const journey = [
  {
    year: "2005",
    title: "The First Stance",
    titleTa: "முதல் அடி",
    desc: "A handful of students, one teacher, and a shared belief that Silambam deserved a future.",
    descTa: "ஒரு சில மாணவர்கள், ஒரு ஆசிரியர், சிலம்பத்திற்கு ஒரு எதிர்காலம் வேண்டும் என்ற பகிரப்பட்ட நம்பிக்கை.",
  },
  {
    year: "2008",
    title: "Building the Arsenal",
    titleTa: "ஆயுதக் களஞ்சியத்தை உருவாக்குதல்",
    desc: "Training expanded beyond the basics into the full arsenal — sticks, blades, and the discipline behind every strike.",
    descTa: "அடிப்படைக்கு அப்பால் முழு ஆயுதக் களஞ்சியமாக பயிற்சி விரிவடைந்தது — கம்புகள், வாள்கள், ஒவ்வொரு அடிக்குப் பின்னுள்ள ஒழுக்கம்.",
  },
  {
    year: "2012",
    title: "Opening the Floor to Women",
    titleTa: "பெண்களுக்கு வாசல் திறப்பு",
    desc: "A dedicated women's self-defence program began, built on safety, strength, and confidence.",
    descTa: "பாதுகாப்பு, வலிமை, தன்னம்பிக்கை ஆகியவற்றின் அடிப்படையில் பெண்களுக்கான தற்காப்புப் பயிற்சித் திட்டம் தொடங்கப்பட்டது.",
  },
  {
    year: "2017",
    title: "Every Age Welcome",
    titleTa: "எல்லா வயதினருக்கும் வரவேற்பு",
    desc: "Youth programs and gymnastics conditioning joined the curriculum, bringing warriors of every age onto the floor.",
    descTa: "இளையோர் திட்டங்களும் உடற்பயிற்சிச் சாகசமும் பாடத்திட்டத்தில் சேர்க்கப்பட்டு, எல்லா வயதினரும் பயிற்சிக் களத்திற்கு வந்தனர்.",
  },
  {
    year: "2022",
    title: "Sharpening the Discipline",
    titleTa: "ஒழுக்கத்தைக் கூர்மைப்படுத்துதல்",
    desc: "Advanced weapon combinations and techniques joined the curriculum, challenging even our most experienced practitioners.",
    descTa: "மேம்பட்ட ஆயுதக் கலவைகளும் நுட்பங்களும் பாடத்திட்டத்தில் சேர்க்கப்பட்டு, அனுபவம் மிக்க பயிற்சியாளர்களையும் சவாலுக்கு உட்படுத்தின.",
  },
  {
    year: "2025",
    title: "Carrying It Forward",
    titleTa: "தொடர்ந்து முன்னெடுத்தல்",
    desc: "Today, Vellur Yudhakalam trains students across ten disciplines — still rooted in the same tradition that started it all.",
    descTa: "இன்று, வேலூர் யுத்தகாலம் பத்து பிரிவுகளில் மாணவர்களுக்குப் பயிற்சி அளிக்கிறது — இதையெல்லாம் தொடங்கிய அதே மரபில் இன்னும் வேரூன்றி.",
  },
];

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

export default function AboutPage() {
  const disciplines = [...trainingPrograms, ...trainingPrograms];

  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      {/* HERO — graphic emblem, not a photo, so this reads as distinct from the Home hero banner */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-gradient-to-br from-[#120a05] via-[#0a0604] to-[#080503] sm:min-h-[640px] sm:items-center">
        <div className="hero-glow pointer-events-none absolute -inset-[20%] opacity-20" />
        <div className="banner-shine pointer-events-none absolute inset-y-0 left-0 w-1/3" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {Array.from({ length: 14 }, (_, i) => (
            <span
              key={i}
              className="ember"
              style={{
                left: `${(i * 41) % 100}%`,
                width: 3 + (i % 3) * 2,
                height: 3 + (i % 3) * 2,
                animationDuration: `${8 + (i % 5) * 2}s`,
                animationDelay: `${-((i * 1.7) % 10)}s`,
              }}
            />
          ))}
        </div>
        <div className="ring-spin pointer-events-none absolute -left-32 -top-36 h-[420px] w-[420px] rounded-full border border-dashed border-amber-400/20" />

        {/* crossed-staff emblem motif, filling the space a photo would have held */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center sm:flex"
          aria-hidden
        >
          <div className="relative flex h-[380px] w-[380px] items-center justify-center">
            <span className="ring-spin absolute inset-0 rounded-full border border-dashed border-amber-400/25" />
            <span className="ring-spin-reverse absolute inset-10 rounded-full border border-amber-400/15" />
            <div className="absolute h-[3px] w-[88%]" style={{ transform: "rotate(38deg)" }}>
              <div
                className="hero-cross-a h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #b91c1c 18%, #ea580c 70%, #fbbf24 92%, transparent 100%)",
                  boxShadow: "0 0 20px rgba(234,88,12,0.55)",
                }}
              />
            </div>
            <div className="absolute h-[3px] w-[88%]" style={{ transform: "rotate(-38deg)" }}>
              <div
                className="hero-cross-b h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #fbbf24 8%, #ea580c 30%, #b91c1c 82%, transparent 100%)",
                  boxShadow: "0 0 20px rgba(234,88,12,0.55)",
                }}
              />
            </div>
            <div className="hero-emblem-in relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
              <span className="emblem-ring-a absolute -inset-2.5 rounded-full border-2 border-transparent border-b-amber-400/50 border-t-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.35)]" />
              <span className="emblem-ring-b absolute -inset-1 rounded-full border-2 border-transparent border-l-red-500 border-r-red-500/40" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-amber-400/50 bg-black shadow-[0_0_35px_rgba(251,191,36,0.35)]">
                <Image
                  src={logo}
                  alt="Vellur Yudhakalam logo"
                  fill
                  priority
                  sizes="(min-width: 640px) 176px, 144px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:pb-14 sm:pt-20">
          <Reveal className="max-w-xl text-center sm:text-left">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="Our Heritage" ta="எங்கள் மரபு" />
            </span>
            <h1 className="mt-5 flex flex-wrap justify-center gap-x-[0.3em] text-4xl font-bold leading-tight text-white sm:justify-start sm:text-6xl" style={deco}>
              <TitleWords words={["About", "Vellur", "Yudhakalam"]} gradientFrom={1} />
            </h1>
            <div className="line-draw mx-auto mt-5 h-0.5 w-40 bg-gradient-to-r from-amber-400 via-amber-400/60 to-transparent sm:mx-0" />
            <p className="mt-5 text-white/95">
              <T
                en="Preserving and teaching the ancient Tamil martial art of Silambam — footwork, timing and the long bamboo staff, carried forward on our training floor today."
                ta="பழம்பெரும் தமிழ் தற்காப்புக் கலையான சிலம்பத்தைப் பாதுகாத்துக் கற்பித்தல் — கால் அசைவு, நேரக்கணிப்பு, நீளமான மூங்கில் கம்பு — இன்றும் எங்கள் பயிற்சிக் களத்தில் தொடர்கிறது."
              />
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4 sm:justify-start">
              <Link
                href="/training"
                className="btn-pulse rounded-md bg-red-600 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 hover:bg-red-500"
                style={heading}
              >
                <T en="Explore Training" ta="பயிற்சியைக் காண்க" />
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-amber-400/60 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all duration-200 hover:scale-105 hover:bg-amber-400/10"
                style={heading}
              >
                <T en="Join the Academy" ta="அகாடமியில் சேருங்கள்" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-amber-400 sm:block" aria-hidden>
          ↓
        </div>
      </section>

      {/* SILAMBAM STRIKE REVEAL */}
      <AboutStrike href="#story" />

      {/* STATS */}
      <section className="px-4 py-4 sm:py-6">
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/[0.06] to-red-600/[0.06] md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-7 text-center transition-colors duration-300 hover:bg-amber-400/[0.07] ${
                  i % 2 === 0 ? "border-r border-white/10" : ""
                } ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""} ${
                  i === 1 ? "md:border-r" : ""
                }`}
              >
                <span className="block text-3xl font-extrabold text-amber-400 sm:text-4xl" style={heading}>
                  {s.valueTa ? <T en={s.value} ta={s.valueTa} /> : <CountUp value={s.value} />}
                </span>
                <span className="mt-1.5 block text-[11px] uppercase tracking-[0.15em] text-white/85">
                  <T en={s.label} ta={s.labelTa} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* STORY */}
      <section id="story" className="relative scroll-mt-20 px-4 py-12 sm:py-18">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              <span className="h-px w-8 bg-amber-400/60" />
              <T en="Who We Are" ta="நாங்கள் யார்" />
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl" style={deco}>
              Forged in{" "}
              <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
                Tradition
              </span>
              <Ta>மரபில் வார்க்கப்பட்டவர்கள்</Ta>
            </h2>

            <p className="drop-cap mt-6 leading-relaxed text-white/96">
              <T
                en="Vellur Yudhakalam is dedicated to preserving and teaching the ancient Tamil martial art of Silambam — a tradition of staff fighting, weapon mastery, and unarmed combat passed down through generations."
                ta="வேலூர் யுத்தகாலம், பழம்பெரும் தமிழ் தற்காப்புக் கலையான சிலம்பத்தைப் பாதுகாத்துக் கற்பிப்பதற்கு அர்ப்பணிக்கப்பட்டது — தலைமுறைகளாகக் கடத்தப்பட்ட கம்புச் சண்டை, ஆயுதத் தேர்ச்சி, நிராயுதப் போர்க்கலையின் மரபு."
              />
            </p>
            <p className="mt-4 leading-relaxed text-white/93">
              <T
                en="Our academy trains students of all ages across ten disciplines, from traditional weapons like Single Stick and Vel Kambu to unarmed Kuthuvarisai, dedicated women's self-defence, and a youth program built on discipline and fitness."
                ta="எங்கள் அகாடமி எல்லா வயது மாணவர்களுக்கும் பத்து பிரிவுகளில் பயிற்சி அளிக்கிறது — ஒற்றைக் கம்பு, வேல் கம்பு போன்ற பாரம்பரிய ஆயுதங்கள் முதல் நிராயுதப் பயிற்சியான குத்துவரிசை, பெண்களுக்கான தற்காப்புப் பயிற்சி, ஒழுக்கமும் உடல் தகுதியும் கொண்ட இளையோர் திட்டம் வரை."
              />
            </p>
            <p className="mt-4 leading-relaxed text-white/93">
              <T
                en="Every class blends physical conditioning with cultural pride, forging warriors who carry forward the legacy of Tamil martial heritage."
                ta="ஒவ்வொரு வகுப்பும் உடல் பயிற்சியையும் பண்பாட்டுப் பெருமையையும் இணைக்கிறது; தமிழ் தற்காப்பு மரபின் வழியைத் தொடரும் வீரர்களை உருவாக்குகிறது."
              />
            </p>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="rounded-2xl border border-amber-400/30 bg-[#0a0604]/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur">
              {/* animated emblem */}
              <div className="relative mx-auto mb-7 h-[110px] w-[110px]" aria-hidden>
                <span className="emblem-ring-a absolute inset-0 rounded-full border-2 border-transparent border-b-amber-400/25 border-t-amber-400" />
                <span className="emblem-ring-b absolute inset-3.5 rounded-full border-2 border-transparent border-l-red-500 border-r-red-500/25" />
                <span className="emblem-staff absolute left-1/2 top-1/2 -ml-0.5 -mt-[39px] h-[78px] w-1 rounded bg-gradient-to-b from-amber-400 to-amber-800 shadow-[0_0_14px_rgba(251,191,36,0.6)]" />
              </div>

              <h3 className="text-xl font-bold text-amber-300" style={heading}>
                <T en="What is Silambam?" ta="சிலம்பம் என்றால் என்ன?" />
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white font-medium">
                <strong className="text-amber-400 font-bold">Silambam</strong>{" "}
                <T
                  en="is the ancient Tamil martial art built around the long bamboo staff — flowing, circular movements that train footwork, timing and control, and extend into a full arsenal of traditional weapons."
                  ta="சிலம்பம் என்பது நீளமான மூங்கில் கம்பை அடிப்படையாகக் கொண்ட பழம்பெரும் தமிழ் தற்காப்புக் கலை — கால் அசைவு, நேரக்கணிப்பு, கட்டுப்பாட்டைப் பயிற்றுவிக்கும் சுழன்று பாயும் அசைவுகள், பாரம்பரிய ஆயுதங்களின் முழுத் தொகுப்பாக விரிகின்றன."
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-4 pb-12 sm:pb-18">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
                <T en="Our Mission" ta="எங்கள் நோக்கம்" />
              </span>
              <p className="mt-3 leading-relaxed text-white/93">
                <T
                  en="To preserve and pass on the authentic Tamil martial art of Silambam — building disciplined, confident, physically strong practitioners who carry Tamil heritage forward with pride."
                  ta="உண்மையான தமிழ் தற்காப்புக் கலையான சிலம்பத்தைப் பாதுகாத்து அடுத்த தலைமுறைக்குக் கடத்துதல் — ஒழுக்கமும் தன்னம்பிக்கையும் உடல் வலிமையும் கொண்ட பயிற்சியாளர்களை உருவாக்கி, தமிழ் மரபைப் பெருமையுடன் முன்னெடுத்துச் செல்லுதல்."
                />
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
                <T en="Our Vision" ta="எங்கள் தொலைநோக்கு" />
              </span>
              <p className="mt-3 leading-relaxed text-white/93">
                <T
                  en="To be a home for traditional Tamil martial arts where every student — regardless of age, background, or gender — can train, compete, and grow, making authentic Silambam training accessible to all who seek it."
                  ta="வயது, பின்னணி, பாலினம் எதுவாயினும் ஒவ்வொரு மாணவரும் பயிற்சி பெற்று, போட்டியிட்டு, வளரக்கூடிய இடமாக இருப்பது — உண்மையான சிலம்பப் பயிற்சியை அதை நாடும் அனைவருக்கும் கிடைக்கச் செய்தல்."
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCIPLINES MARQUEE */}
      <section className="marquee overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 sm:py-5">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {disciplines.map((p, i) => (
            <span key={`${p.slug}-${i}`} className="flex items-center gap-10">
              <span className="text-xl font-bold uppercase tracking-widest text-white/25 transition-colors hover:text-amber-400" style={deco}>
                <T en={p.name} ta={p.nameTa} />
              </span>
              <span className="text-amber-400/60" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* ARSENAL */}
      <section className="px-4 py-12 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="What We Teach" ta="நாங்கள் கற்பிப்பவை" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={deco}>
              <T en="The Warrior's Arsenal" ta="வீரனின் ஆயுதக் களஞ்சியம்" />
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ArsenalTabs programs={trainingPrograms} />
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 py-12 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="What We Stand For" ta="நாங்கள் நிற்கும் அடித்தளம்" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={deco}>
              <T en="Our Foundations" ta="எங்கள் அடித்தளங்கள்" />
            </h2>
            <div className="mx-auto mt-5 h-0.5 w-20 bg-gradient-to-r from-amber-400 to-red-500" />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <SpotCard className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-7">
                  <span
                    className="block text-5xl font-black leading-none text-transparent transition-all duration-300 [-webkit-text-stroke:1.5px_#fbbf24] group-hover:translate-x-1.5 group-hover:text-amber-400"
                    style={heading}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white" style={heading}>
                    <T en={p.title} ta={p.titleTa} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/88">
                    <T en={p.desc} ta={p.descTa} />
                  </p>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative px-4 py-12 sm:py-18">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/8 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal className="mb-10 text-center">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <T en="Our Journey" ta="எங்கள் பயணம்" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={deco}>
              <T en="Building the Legacy" ta="மரபை வளர்த்தல்" />
            </h2>
          </Reveal>

          <ol className="relative border-l border-amber-400/25 pl-14 sm:pl-16">
            {journey.map((m, i) => (
              <li key={m.title} className="relative mb-8 sm:mb-10 last:mb-0">
                <span
                  className="absolute -left-14 top-0 whitespace-nowrap rounded-full border border-amber-400/50 bg-[#0a0604] px-2.5 py-1 text-xs font-bold text-amber-400 sm:-left-16 sm:text-sm"
                  style={heading}
                >
                  {m.year}
                </span>
                <Reveal delay={i * 90}>
                  <h3 className="text-lg font-semibold text-white" style={heading}>
                    <T en={m.title} ta={m.titleTa} />
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-white/88">
                    <T en={m.desc} ta={m.descTa} />
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-[#080503] via-[#0c0704] to-[#080503] px-4 py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_60%)]" />
        <div className="ring-spin pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-400/10" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className="ember"
              style={{
                left: `${6 + i * 10}%`,
                width: 3 + (i % 3) * 2,
                height: 3 + (i % 3) * 2,
                animationDuration: `${7 + (i % 5) * 2}s`,
                animationDelay: `${-((i * 1.6) % 9)}s`,
              }}
            />
          ))}
        </div>
        <span
          aria-hidden
          className="quote-mark pointer-events-none absolute left-[6%] top-4 select-none text-[12rem] font-black leading-none text-amber-400/10"
          style={deco}
        >
          “
        </span>
        <Reveal direction="scale" className="relative mx-auto max-w-3xl text-center">
          {/* Tamil Quote as primary warrior axiom */}
          <p
            className="text-2xl font-bold leading-relaxed text-amber-300 sm:text-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={heading}
          >
            &ldquo;தீரன் ஒருவன் தனித்திருந்தாலும் போரில் வெல்வான்&rdquo;
          </p>

          {/* English Translation */}
          <p
            className="mt-4 text-lg italic font-medium leading-relaxed text-white sm:text-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            style={heading}
          >
            &ldquo;A true warrior conquers, even alone.&rdquo;
          </p>

          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
            <T
              en="From the Silambam warrior's code"
              ta="சிலம்ப போர் மரபின் அறநெறி"
            />
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-4 py-10 sm:py-16">
        <Reveal direction="scale" className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-white/[0.04] to-transparent p-10 text-center transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.1)]">
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={deco}>
              Walk the{" "}
              <span className="text-red-500">Warrior&apos;s Path</span>
              <Ta>வீரனின் பாதையில் நடையிடுங்கள்</Ta>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/93">
              <T en="Join students of every age learning the ancient art of Silambam." ta="பழம்பெரும் சிலம்பக் கலையைக் கற்கும் எல்லா வயது மாணவர்களுடன் இணையுங்கள்." />
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 hover:bg-amber-300"
                style={heading}
              >
                <T en="Enroll Now" ta="இப்போதே பதிவு செய்யுங்கள்" />
              </Link>
              <Link
                href="/training"
                className="rounded-md border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white/96 transition-all duration-200 hover:scale-105 hover:bg-white/5"
                style={heading}
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
