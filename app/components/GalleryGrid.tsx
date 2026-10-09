"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { T } from "./Bilingual";

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
  captionTa: string;
  tag: string;
  tagTa: string;
  /** tailwind span classes for the masonry-style grid */
  span?: string;
};

/* Photo grid with a keyboard-friendly lightbox. */
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.caption}
            type="button"
            onClick={() => setOpen(i)}
            className={`photo-tile group relative overflow-hidden rounded-2xl border border-white/10 text-left transition-colors duration-300 hover:border-amber-400/50 ${item.span ?? ""}`}
            aria-label={`Open photo: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080503]/95 via-[#080503]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-4 top-4 flex h-9 w-9 scale-75 items-center justify-center rounded-full border border-amber-400/60 bg-black/40 text-amber-400 opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              ⤢
            </span>
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
                <T en={item.tag} ta={item.tagTa} />
              </span>
              <p className="mt-1 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                <T en={item.caption} ta={item.captionTa} />
              </p>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="tab-in relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-amber-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain bg-black" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
                <T en={current.tag} ta={current.tagTa} />
              </span>
              <p className="mt-1 text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
                <T en={current.caption} ta={current.captionTa} />
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-amber-400 hover:text-amber-400"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-amber-400 hover:text-amber-400 sm:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:border-amber-400 hover:text-amber-400 sm:right-6"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
