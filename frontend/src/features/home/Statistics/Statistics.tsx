import { STATISTICS } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="mt-20 w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">

        {STATISTICS.map((item) => (

          <div
            key={item.label}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-[var(--primary)] md:text-6xl">
              {item.value}
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-500">
              {item.label}
            </p>
          </div>

        ))}

      </div>
    </section>
  );
}