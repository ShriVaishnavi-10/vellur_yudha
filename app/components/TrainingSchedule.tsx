"use client";

import { useState } from "react";
import Link from "next/link";
import { trainingBatches, trainingFaqs } from "@/app/data/training";

const heading = { fontFamily: "var(--font-heading)" };
const deco = { fontFamily: "var(--font-deco)" };

export default function TrainingSchedule() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16">
      {/* Dojo Batches Grid */}
      <div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trainingBatches.map((batch) => (
            <div
              key={batch.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#0a0604]/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#0e0805]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-amber-400"
                    style={heading}
                  >
                    {batch.days}
                  </span>
                  {batch.badge && (
                    <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">
                      {batch.badge}
                    </span>
                  )}
                </div>

                <h4 className="mt-3 text-lg font-bold text-white" style={heading}>
                  {batch.name}
                </h4>

                <div className="mt-2 inline-block rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-amber-300">
                  🕒 {batch.timing}
                </div>

                <p className="mt-3 text-xs text-zinc-200">
                  <strong className="text-white">Audience:</strong> {batch.audience}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                  {batch.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-zinc-100">
                      <span className="text-amber-400">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="block text-center text-xs font-bold uppercase tracking-wider text-amber-400 transition-colors hover:text-amber-300"
                  style={heading}
                >
                  Join This Batch →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment & Floor Essentials */}
      <div className="rounded-2xl border border-white/15 bg-[#0a0604]/90 p-8 shadow-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
              Training Essentials
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white" style={deco}>
              What To Expect On Day 1
            </h3>
            <p className="mt-2 text-sm text-zinc-200">
              No expensive gear required. We ensure an accessible, culturally authentic training environment for everyone.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
            <div className="rounded-xl border border-white/15 bg-black/50 p-5">
              <span className="text-xl">🎋</span>
              <h4 className="mt-2 text-sm font-bold text-white" style={heading}>
                Practice Weapons Provided
              </h4>
              <p className="mt-1 text-xs text-zinc-200">
                Traditional cured bamboo staves, rattan poles, and practice gear are available on the floor for all students.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-black/50 p-5">
              <span className="text-xl">🥋</span>
              <h4 className="mt-2 text-sm font-bold text-white" style={heading}>
                Attire & Footwear
              </h4>
              <p className="mt-1 text-xs text-zinc-200">
                Comfortable flexible track pants / t-shirt. Traditional martial practice is conducted barefoot on treated wooden or earthen courtyard floors.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-black/50 p-5">
              <span className="text-xl">🛡️</span>
              <h4 className="mt-2 text-sm font-bold text-white" style={heading}>
                Free Kit For Women
              </h4>
              <p className="mt-1 text-xs text-zinc-200">
                All registered participants in our Women&apos;s Self-Defense initiative receive a complimentary Silambam kit upon orientation.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-black/50 p-5">
              <span className="text-xl">📜</span>
              <h4 className="mt-2 text-sm font-bold text-white" style={heading}>
                Certification & Belt Grading
              </h4>
              <p className="mt-1 text-xs text-zinc-200">
                Formal examination at the end of Month 3 awards the official Yudhakalam Level 1 Foundation Certificate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div>
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400" style={heading}>
            Got Questions?
          </span>
          <h3 className="mt-2 text-3xl font-bold text-white" style={deco}>
            Frequently Asked Questions
          </h3>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {trainingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-white/15 bg-[#0a0604]/90 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white transition-colors hover:text-amber-300"
                  style={heading}
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 text-amber-400 transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-3 text-xs leading-relaxed text-zinc-100 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
