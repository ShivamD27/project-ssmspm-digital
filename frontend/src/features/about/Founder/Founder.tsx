import Image from "next/image";

import Container from "@/components/common/Container";

import { FOUNDER } from "@/data/founder";

export default function Founder() {
  return (
    <section className="bg-[#F9FAFB] py-32">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div>

            <Image
              src={FOUNDER.image}
              alt={FOUNDER.name}
              width={600}
              height={700}
              className="rounded-3xl object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-[var(--primary)]">
              Founder
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {FOUNDER.name}
            </h2>

            <p className="mt-2 text-lg text-gray-500">
              {FOUNDER.designation}
            </p>

            <p className="mt-10 text-lg leading-9 text-gray-600">
              {FOUNDER.message}
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}