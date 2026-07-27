import { Institution } from "@/data/institutions";

interface Props {
  institution: Institution;
}

export default function QuickStats({ institution }: Props) {
  const stats = [
    {
      title: "Students",
      value: institution.students,
    },
    {
      title: "Staff",
      value: institution.staff,
    },
    {
      title: "Established",
      value: institution.established,
    },
    {
      title: "Affiliation",
      value: institution.affiliation,
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-4xl font-bold text-[var(--primary)]">
                {item.value}
              </p>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}