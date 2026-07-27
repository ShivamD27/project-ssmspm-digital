"use client";

import { useMemo, useState } from "react";

import { ACHIEVEMENTS } from "@/data/achievements";

import AchievementCard from "./AchievementCard";

const FILTERS = [
  "All",
  "District",
  "State",
  "National",
];

export default function AchievementsGrid() {

  const [selected, setSelected] = useState("All");

  const achievements = useMemo(() => {

    if (selected === "All")
      return ACHIEVEMENTS;

    return ACHIEVEMENTS.filter(
      (item) => item.level === selected
    );

  }, [selected]);

  return (

    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {FILTERS.map((filter) => (

            <button
              key={filter}
              onClick={() => setSelected(filter)}
              className={`rounded-full px-5 py-3 transition

              ${
                selected === filter
                  ? "bg-[var(--primary)] text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {achievements.map((achievement) => (

            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />

          ))}

        </div>

      </div>

    </section>

  );

}