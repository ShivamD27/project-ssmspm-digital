import Image from "next/image";
import { FOUNDER } from "@/data/founder";

export default function FounderSection() {
  return (
    <section className="py-24">

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        <div className="relative h-[600px] overflow-hidden rounded-3xl">

          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Founder
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {FOUNDER.name}
          </h1>

          <p className="mt-2 text-xl text-gray-500">
            {FOUNDER.designation}
          </p>

          <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-6 text-2xl italic">
            "{FOUNDER.quote}"
          </blockquote>

          <p className="mt-10 leading-8 text-gray-600">
            {FOUNDER.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {FOUNDER.mission.map((item) => (

              <span
                key={item}
                className="rounded-full bg-[var(--primary)] px-5 py-2 text-white"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}