"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/public/assets/logo.png";
import { T } from "./Bilingual";

const navLinks = [
  { href: "/", label: "Home", ta: "முகப்பு" },
  { href: "/about", label: "About", ta: "எங்களைப் பற்றி" },
  { href: "/training", label: "Training", ta: "பயிற்சி" },
  { href: "/achievements", label: "Achievements", ta: "சாதனைகள்" },
  { href: "/events", label: "Events", ta: "நிகழ்வுகள்" },
  { href: "/gallery", label: "Gallery", ta: "படத்தொகுப்பு" },
  { href: "/contact", label: "Contact", ta: "தொடர்புக்கு" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080503]/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="bi-keep flex items-center gap-3 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt="Vellur Yudhakalam logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0 rounded-md object-cover ring-1 ring-amber-400/30"
          />
          <span
            className="text-lg font-bold leading-tight tracking-wide text-amber-400 sm:text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <T en="Vellur Yudhakalam" ta="வேலூர் யுத்தகாலம்" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive(link.href) ? "text-amber-400" : "text-white/96"
              }`}
            >
              <T en={link.label} ta={link.ta} />
              <span
                className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left bg-amber-400 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-500"
          >
            <T en="Join Now" ta="இப்போதே சேருங்கள்" />
          </Link>
        </nav>

        <button
          type="button"
          className="relative flex h-6 w-6 flex-col items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <nav
        className={`flex flex-col gap-1 overflow-hidden border-t border-white/10 px-4 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-white/5 hover:text-amber-400 ${
              isActive(link.href) ? "bg-white/5 text-amber-400" : "text-white/96"
            }`}
            onClick={() => setOpen(false)}
          >
            <T en={link.label} ta={link.ta} />
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-1 rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-red-500"
          onClick={() => setOpen(false)}
        >
          <T en="Join Now" ta="இப்போதே சேருங்கள்" />
        </Link>
      </nav>
    </header>
  );
}
