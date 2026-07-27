"use client";

import Image from "next/image";
import { Institution } from "@/data/institutions";

interface Props {
  institution: Institution;
}

export default function Gallery({ institution }: Props) {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-4xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {institution.gallery.map((image) => (

            <div
              key={image}
              className="group relative h-72 overflow-hidden rounded-3xl"
            >

              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}