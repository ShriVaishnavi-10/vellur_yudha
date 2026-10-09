import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";

const deco = { fontFamily: "var(--font-deco)" };

/* Image-backed page hero: kenburns photo, glow, embers, word-by-word title with Tamil beneath. */
export default function PageHero({
  tag,
  title,
  accent,
  description,
  image,
  position = "center",
}: {
  tag: string;
  title: string;
  /** last word(s) of the English title rendered with the sliding gradient */
  accent?: string;
  description?: string;
  image: StaticImageData;
  position?: string;
}) {
  const words = title.split(" ");

  return (
    <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden px-4 py-24 sm:min-h-[440px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-kenburns object-cover opacity-30"
        style={{ objectPosition: position }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080503]/90 via-[#080503]/60 to-[#080503]" />
      <div className="hero-glow pointer-events-none absolute -inset-[20%] opacity-20" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: `${(i * 43) % 100}%`,
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              animationDuration: `${8 + (i % 5) * 2}s`,
              animationDelay: `${-((i * 1.9) % 10)}s`,
            }}
          />
        ))}
      </div>
      <div className="ring-spin pointer-events-none absolute -right-28 -top-32 h-[380px] w-[380px] rounded-full border border-dashed border-amber-400/20" />
      <div className="ring-spin-reverse pointer-events-none absolute -bottom-28 -left-20 h-[260px] w-[260px] rounded-full border border-dashed border-red-500/25" />

      <Reveal className="relative text-center">
        <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
          {tag}
        </span>
        <h1
          className="mt-5 flex flex-wrap justify-center gap-x-[0.3em] text-4xl font-bold leading-tight text-white sm:text-6xl"
          style={deco}
        >
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="word-mask">
              <span
                className={`word-rise ${accent && i >= words.length - accent.split(" ").length ? "gradient-slide" : ""}`}
                style={{ animationDelay: `${0.3 + i * 0.18}s` }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>
        <div className="line-draw mx-auto mt-5 h-0.5 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-white/90">{description}</p>
        )}
      </Reveal>
    </section>
  );
}
