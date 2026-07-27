import { Institution } from "@/data/institutions";

interface Props {
  institution: Institution;
}

export default function PrincipalMessage({
  institution,
}: Props) {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--primary)] p-12 text-white">

        <p className="text-5xl">"</p>

        <p className="mt-6 text-lg leading-9">

          Our mission is to provide quality education, equal opportunities and holistic development for every student while nurturing values, discipline and lifelong learning.

        </p>

        <div className="mt-10">

          <h3 className="text-2xl font-bold">
            {institution.principal}
          </h3>

          <p className="opacity-80">
            Principal
          </p>

        </div>

      </div>

    </section>
  );
}