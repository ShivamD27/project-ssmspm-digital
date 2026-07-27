"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/data/gallery";

const FILTERS = [
  "All",
  "School",
  "College",
  "Sports",
  "Events",
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState("All");

  const images =
    selected === "All"
      ? GALLERY
      : GALLERY.filter((i) => i.category === selected);

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {FILTERS.map((item) => (

            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`rounded-full px-6 py-3 transition

                ${
                  selected === item
                    ? "bg-[var(--primary)] text-white"
                    : "border hover:bg-gray-100"
                }`}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (

            <div
              key={image.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <p className="text-sm text-[var(--primary)]">
                  {image.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {image.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}