import PageHero from "@/components/common/PageHero";

import AchievementsGrid from "@/features/achievements/AchievementsGrid";

export default function AchievementsPage() {

  return (

    <>

      <PageHero
        eyebrow="Achievements"
        title="Celebrating Excellence"
        description="Our students continuously excel in academics, sports, cultural activities and competitions."
      />

      <AchievementsGrid />

    </>

  );

}