import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Reveal from "@/app/components/Reveal";
import { T } from "@/app/components/Bilingual";
import GalleryGrid, { type GalleryItem } from "@/app/components/GalleryGrid";
import duelDusk from "@/public/about/duel-dusk.jpg";
import doubleStick from "@/public/about/double-stick.jpg";
import groupForms from "@/public/about/group-forms.jpg";
import templeStaff from "@/public/about/silambam-temple.png";
import heroBanner from "@/public/hero-banner.jpg";

export const metadata: Metadata = {
  title: "Gallery | Vellur Yudhakalam",
  description: "Photos and videos from training and events at Vellur Yudhakalam.",
};

const items: GalleryItem[] = [
  {
    src: templeStaff,
    alt: "A Silambam practitioner in a deep stance with a long bamboo staff in a lamp-lit temple courtyard at sunset",
    caption: "The staff in the temple courtyard",
    captionTa: "கோயில் முற்றத்தில் கம்பு",
    tag: "Silambam",
    tagTa: "சிலம்பம்",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: doubleStick,
    alt: "Two practitioners leaping mid-air with double sticks",
    caption: "Double stick, mid-air",
    captionTa: "இரட்டைக் கம்பு, காற்றில்",
    tag: "Agility",
    tagTa: "சுறுசுறுப்பு",
    span: "md:row-span-2",
  },
  {
    src: groupForms,
    alt: "Students in black and red practising forms with staffs and swords",
    caption: "Many weapons, one discipline",
    captionTa: "பல ஆயுதங்கள், ஒரே ஒழுக்கம்",
    tag: "Unity",
    tagTa: "ஒற்றுமை",
  },
  {
    src: duelDusk,
    alt: "Two silhouetted fighters leaping with blades against a sunset sky",
    caption: "Duel at dusk",
    captionTa: "அந்தியில் ஒரு சமர்",
    tag: "Combat",
    tagTa: "போர்",
  },
  {
    src: heroBanner,
    alt: "Warriors training with staffs, swords and shields in a torch-lit arena beneath a temple",
    caption: "The Vellur Yudhakalam arena",
    captionTa: "வேலூர் யுத்தகாலம் களம்",
    tag: "The Academy",
    tagTa: "அகாடமி",
  },
];

export default function GalleryPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-[#080503]">
      <PageHero
        tag="Moments"
        title="The Gallery"
        accent="Gallery"
        description="Glimpses of the art in motion. Tap any photo to view it full size."
        image={duelDusk}
        position="center 40%"
      />

      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <GalleryGrid items={items} />
          </Reveal>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-white/82">
              <T en="More photos and videos from training and events will be added here soon." ta="பயிற்சி மற்றும் நிகழ்வுகளின் மேலும் படங்களும் காணொளிகளும் விரைவில் இங்கே சேர்க்கப்படும்." />
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
