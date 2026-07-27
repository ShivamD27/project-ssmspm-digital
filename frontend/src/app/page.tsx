import Hero from "@/features/home/Hero/Hero";
import Institutions from "@/features/home/Institutions/Institutions";
import AchievementsPreview from "@/features/home/AchievementsPreview/AchievementsPreview";
import NoticeBoard from "@/features/home/NoticeBoard/NoticeBoard";

export default function Home() {
  return (
    <>
      <Hero />

      <Institutions />

      <AchievementsPreview />

      <NoticeBoard />
    </>
  );
}