import PageHero from "@/components/common/PageHero";

import InstitutionGrid from "@/features/institutions/InstitutionGrid";

export default function InstitutionsPage() {

    return (

        <>

            <PageHero

                eyebrow="Institutions"

                title="Our Educational Network"

                description="Schools, colleges and educational initiatives working together for quality education."

            />

            <InstitutionGrid />

        </>

    );

}