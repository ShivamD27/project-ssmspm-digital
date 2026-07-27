import { INSTITUTIONS } from "@/data/institutions";
import InstitutionCard from "./InstitutionCard";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function Institutions() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Institutions"
          title="Building Futures Across Rural Maharashtra"
          description="Six educational institutions working together to provide quality education, hostel facilities and holistic development for every child."
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