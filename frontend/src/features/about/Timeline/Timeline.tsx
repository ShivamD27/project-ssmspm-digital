import Container from "@/components/common/Container";

const EVENTS = [
  { year: "1998", title: "NGO Established" },
  { year: "1999", title: "Second School Started" },
  { year: "2020", title: "Junior College Started" },
  { year: "Today", title: "Growing Educational Network" },
];

export default function Timeline() {
  return (
    <section className="bg-white py-32">

      <Container>

        <h2 className="text-center text-5xl font-bold">
          Our Journey
        </h2>

        <div className="mx-auto mt-20 max-w-5xl">

          {EVENTS.map((item) => (

            <div
              key={item.year}
              className="mb-10 flex gap-8 border-l-2 border-[var(--primary)] pl-8"
            >

              <div className="font-bold text-[var(--primary)]">
                {item.year}
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}