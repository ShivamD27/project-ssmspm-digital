import Image from "next/image";
import { GalleryImage } from "@/data/gallery";

interface Props {
  image: GalleryImage;
}

export default function GalleryCard({ image }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl shadow-lg">

      <div className="relative h-80">

        <Image
          src={image.image}
          alt={image.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

        <div className="absolute bottom-0 w-full translate-y-full bg-black/70 p-5 text-white transition duration-300 group-hover:translate-y-0">

          <h3 className="font-semibold">
            {image.title}
          </h3>

          <p className="text-sm opacity-80">
            {image.category}
          </p>

        </div>

      </div>

    </div>
  );
}