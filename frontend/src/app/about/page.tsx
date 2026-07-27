import PageHero from "@/components/common/PageHero";

import AboutStory from "@/features/about/AboutStory/AboutStory";
import Founder from "@/features/about/Founder/Founder";
import VisionMission from "@/features/about/VisionMission/VisionMission";
import Timeline from "@/features/about/Timeline/Timeline";
import Values from "@/features/about/Values/Values";
import CTA from "@/features/about/CTA/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SSMSPM"
        title="Educating, Empowering and Transforming Lives Since 1998"
        description="Discover the journey, mission and people behind Shri Sant Shiromani Manmath Swami Shikshan Prasarak Mandal."
      />

      <AboutStory />

      <Founder />

      <VisionMission />

      <Timeline />

      <Values />

      <CTA />
    </>
  );
}