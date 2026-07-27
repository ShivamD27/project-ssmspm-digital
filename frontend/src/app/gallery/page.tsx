import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/features/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments That Inspire"
        description="Explore life across our schools, colleges, hostels and educational initiatives."
      />

      <GalleryGrid />
    </>
  );
}