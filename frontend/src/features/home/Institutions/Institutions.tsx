import { INSTITUTIONS } from "@/data/institutions";
import InstitutionCard from "./InstitutionCard";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function Institutions() {
  return (
    <section className="bg-white py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Institutions"
          title="Building Futures Across Rural Maharashtra"
          description="Our educational institutions empower students through quality education, discipline, and holistic development."
        />

        {INSTITUTIONS.map((institution, index) => (
          <InstitutionCard
            key={institution.id}
            {...institution}
            reverse={index % 2 !== 0}
          />
        ))}
      </Container>
    </section>
  );
}