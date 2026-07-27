import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/features/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Capturing Our Journey"
        description="A glimpse into the memorable moments, events, achievements and campus life of SSMSPM."
      />

      <GalleryGrid />
    </>
  );
}