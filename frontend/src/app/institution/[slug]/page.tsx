import { notFound } from "next/navigation";
import { INSTITUTIONS } from "@/data/institutions";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InstitutionPage({ params }: Props) {
  const { slug } = await params;

  const institution = INSTITUTIONS.find(
    (item) => item.slug === slug
  );

  if (!institution) {
    notFound();
  }

  return (
    <main className="py-40">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl font-bold">
          {institution.name}
        </h1>

        <p className="mt-4 text-gray-600">
          {institution.type}
        </p>

        <p className="mt-8 leading-8">
          {institution.description}
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">
            Facilities
          </h3>

          <ul className="mt-5 list-disc space-y-2 pl-6">
            {institution.facilities.map((facility) => (
              <li key={facility}>{facility}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}