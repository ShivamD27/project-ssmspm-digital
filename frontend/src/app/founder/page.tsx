import PageHero from "@/components/common/PageHero";
import FounderSection from "@/features/founder/FounderSection";

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Our Inspiration"
        description="Honouring the visionary whose dream continues to educate generations."
      />

      <FounderSection />
    </>
  );
}