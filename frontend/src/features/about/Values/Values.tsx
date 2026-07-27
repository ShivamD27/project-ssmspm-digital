import Container from "@/components/common/Container";

const VALUES = [
  "Equality",
  "Quality Education",
  "Integrity",
  "Innovation",
  "Community Service",
  "Student Development",
];

export default function Values() {
  return (
    <section className="py-32">

      <Container>

        <h2 className="text-center text-5xl font-bold">
          Core Values
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {VALUES.map((value) => (

            <div
              key={value}
              className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2"
            >

              <h3 className="text-xl font-semibold">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}