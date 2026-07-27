import PageHero from "@/components/common/PageHero";
import ContactSection from "@/features/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="We would love to hear from you."
      />

      <ContactSection />
    </>
  );
}