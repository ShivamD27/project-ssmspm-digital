import Container from "@/components/common/Container";
import { ABOUT } from "@/data/about";

export default function AboutStory() {
  return (
    <section className="py-28 bg-white">

      <Container>

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              About Us
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              {ABOUT.title}
            </h2>

          </div>

          <div>

            <p className="text-lg leading-9 text-gray-600">
              {ABOUT.history}
            </p>

            <blockquote className="mt-12 border-l-4 border-[var(--primary)] pl-6 text-2xl italic font-medium">
              {ABOUT.marathi}
            </blockquote>

          </div>

        </div>

      </Container>

    </section>
  );
}