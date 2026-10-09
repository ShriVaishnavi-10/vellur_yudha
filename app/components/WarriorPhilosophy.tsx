"use client";

import { thirukkurals } from "@/app/data/training";

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

export default function WarriorPhilosophy() {
  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        {thirukkurals.map((item, i) => (
          <div
            key={item.kural}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-b from-[#100806] via-[#090504] to-[#080503] p-7 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] sm:p-8"
          >
            {/* Top corner emblem mark */}
            <span className="pointer-events-none absolute right-4 top-4 text-xs font-black text-amber-400/40 transition-colors group-hover:text-amber-400/70">
              #{item.kuralNo}
            </span>

            {/* Glowing Accent Border */}
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-opacity group-hover:opacity-100" />

            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400"
                  style={heading}
                >
                  Thirukkural Warrior Axiom
                </span>
              </div>

              {/* The Tamil Kural (preserved authentic script) */}
              <p
                className="text-xl font-bold leading-relaxed text-amber-300 sm:text-2xl"
                style={heading}
              >
                &ldquo;{item.kural}&rdquo;
              </p>

              {/* English Meaning */}
              <p className="mt-3 text-sm italic font-medium text-white">
                — {item.meaning}
              </p>

              {/* Warrior Commentary */}
              <p className="mt-4 text-xs leading-relaxed text-zinc-200">
                {item.context}
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-zinc-300">
              <span>Ancient Tamil Lineage</span>
              <span className="text-amber-400/80">Yudhakalam Ethos</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
