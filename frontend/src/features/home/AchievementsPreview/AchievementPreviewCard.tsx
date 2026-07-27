import Image from "next/image";
import { Achievement } from "@/data/achievements";

interface Props {
  achievement: Achievement;
}

export default function AchievementPreviewCard({
  achievement,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-60 overflow-hidden">

        <Image
          src={achievement.image}
          alt={achievement.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="space-y-3 p-6">

        <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-sm text-white">
          {achievement.level}
        </span>

        <h3 className="text-2xl font-bold">
          {achievement.title}
        </h3>

        <p className="text-gray-600">
          {achievement.student}
        </p>

        <p className="line-clamp-2 text-gray-500">
          {achievement.description}
        </p>

      </div>

    </div>
  );
}