import Container from "@/components/common/Container";
import StatisticCard from "./StatisticCard";

const STATS = [
  {
    value: 6,
    title: "Institutions",
  },
  {
    value: 2000,
    suffix: "+",
    title: "Students",
  },
  {
    value: 150,
    suffix: "+",
    title: "Staff Members",
  },
  {
    value: 28,
    suffix: "+",
    title: "Years of Service",
  },
];

export default function Statistics() {
  return (
    <section className="bg-[#fafaf8] py-28">

      <Container>

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Our Impact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Education That Changes Lives
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {STATS.map((item) => (
            <StatisticCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}