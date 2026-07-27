import Container from "@/components/common/Container";
import { ABOUT } from "@/data/about";

export default function VisionMission() {
  return (
    <section className="py-32">

      <Container>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[var(--primary)] p-12 text-white">

            <h3 className="text-3xl font-bold">
              Vision
            </h3>

            <p className="mt-8 leading-8">
              {ABOUT.vision}
            </p>

          </div>

          <div className="rounded-3xl border p-12">

            <h3 className="text-3xl font-bold">
              Mission
            </h3>

            <p className="mt-8 leading-8 text-gray-600">
              {ABOUT.mission}
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}