import PageHero from "@/components/common/PageHero";
import CameraGrid from "@/features/cctv/CameraGrid";

export default function CCTVPage() {
  return (
    <>
      <PageHero
        eyebrow="CCTV Monitoring"
        title="Campus Monitoring"
        description="Authorized monitoring interface for educational institutions managed by SSMSPM."
      />

      <CameraGrid />
    </>
  );
}