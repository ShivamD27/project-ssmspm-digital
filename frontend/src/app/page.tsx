import Hero from "@/features/home/Hero/Hero";
import Statistics from "@/features/home/Statistics/Statistics";
import Institutions from "@/features/home/Institutions/Institutions";
import AchievementsPreview from "@/features/home/AchievementsPreview/AchievementsPreview";
import NoticeBoard from "@/features/home/NoticeBoard/NoticeBoard";
import ContactCTA from "@/features/home/ContactCTA/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Statistics />

      <Institutions />

      <AchievementsPreview />

      <NoticeBoard />

      <ContactCTA />
    </>
  );
}