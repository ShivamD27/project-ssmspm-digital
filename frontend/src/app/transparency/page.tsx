import PageHero from "@/components/common/PageHero";

import TransparencyGrid from "@/features/transparency/TransparencyGrid";

export default function TransparencyPage() {

  return (

    <>

      <PageHero
        eyebrow="Transparency"
        title="Transparency & Public Information"
        description="Public documents, government approvals, audit reports, certificates and official notices."
      />

      <TransparencyGrid />

    </>

  );

}