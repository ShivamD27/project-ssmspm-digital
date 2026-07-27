"use client";

import { useMemo, useState } from "react";

import { CAMERAS } from "@/data/cctv";

import CameraCard from "./CameraCard";

export default function CameraGrid() {

  const institutions = [
    "All",
    ...new Set(CAMERAS.map((c) => c.institution)),
  ];

  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {

    if (selected === "All") return CAMERAS;

    return CAMERAS.filter(
      (item) => item.institution === selected
    );

  }, [selected]);

  return (

    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {institutions.map((item) => (

            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`rounded-full px-5 py-3 transition ${
                selected === item
                  ? "bg-[var(--primary)] text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filtered.map((camera) => (

            <CameraCard
              key={camera.id}
              camera={camera}
            />

          ))}

        </div>

      </div>

    </section>

  );

}