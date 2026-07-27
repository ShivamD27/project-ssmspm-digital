import Link from "next/link";

import { ACHIEVEMENTS } from "@/data/achievements";

import AchievementPreviewCard from "./AchievementPreviewCard";

export default function AchievementsPreview() {

  const latestAchievements = ACHIEVEMENTS.slice(0, 3);

  return (
    <section className="bg-[#fafaf8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Proud Moments
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              Student Achievements
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Celebrating excellence in academics, sports, cultural activities
              and innovation.
            </p>

          </div>

          <Link
            href="/achievements"
            className="hidden rounded-full border px-6 py-3 font-medium transition hover:bg-[var(--primary)] hover:text-white md:block"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {latestAchievements.map((achievement) => (

            <AchievementPreviewCard
              key={achievement.id}
              achievement={achievement}
            />

          ))}

        </div>

        <div className="mt-12 text-center md:hidden">

          <Link
            href="/achievements"
            className="rounded-full border px-6 py-3 transition hover:bg-[var(--primary)] hover:text-white"
          >
            View All Achievements
          </Link>

        </div>

      </div>

    </section>
  );
}