"use client";

import { useState } from "react";

import { GALLERY } from "@/data/gallery";

import GalleryCard from "./GalleryCard";

const FILTERS = [
  "All",
  "Campus",
  "Academics",
  "Events",
  "Sports",
] as const;

export default function GalleryGrid() {
  const [selected, setSelected] = useState("All");

  const images =
    selected === "All"
      ? GALLERY
      : GALLERY.filter((item) => item.category === selected);

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelected(filter)}
              className={`rounded-full px-5 py-3 transition ${
                selected === filter
                  ? "bg-[var(--primary)] text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">

          {images.map((image) => (
            <div key={image.id} className="mb-6 break-inside-avoid">
              <GalleryCard image={image} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}