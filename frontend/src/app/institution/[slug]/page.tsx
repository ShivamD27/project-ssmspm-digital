import { notFound } from "next/navigation";

import { INSTITUTIONS } from "@/data/institutions";

import InstitutionHero from "@/features/institutions/InstitutionHero";
import InstitutionOverview from "@/features/institutions/InstitutionOverview";
import QuickStats from "@/features/institutions/QuickStats";
import Facilities from "@/features/institutions/Facilities";
import Gallery from "@/features/institutions/Gallery";
import PrincipalMessage from "@/features/institutions/PrincipalMessage";
import ContactCard from "@/features/institutions/ContactCard";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InstitutionPage({
  params,
}: Props) {
  const { slug } = await params;

  const institution = INSTITUTIONS.find(
    (item) => item.slug === slug
  );

  if (!institution) {
    notFound();
  }

  return (
    <>
      <InstitutionHero institution={institution} />

      <InstitutionOverview institution={institution} />

      <QuickStats institution={institution} />

      <Facilities institution={institution} />

      <Gallery institution={institution} />

      <PrincipalMessage institution={institution} />

      <ContactCard institution={institution} />
    </>
  );
}