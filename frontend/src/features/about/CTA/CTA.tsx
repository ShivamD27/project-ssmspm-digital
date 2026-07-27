import PrimaryButton from "@/components/common/PrimaryButton";
import Container from "@/components/common/Container";

export default function CTA() {
  return (
    <section className="bg-[var(--primary)] py-28 text-white">

      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Join Our Mission
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
            Together we can empower every child with education and opportunity.
          </p>

          <div className="mt-12">

            <PrimaryButton href="/contact">
              Contact Us
            </PrimaryButton>

          </div>

        </div>

      </Container>

    </section>
  );
}