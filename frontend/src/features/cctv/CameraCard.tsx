import Image from "next/image";
import { Camera } from "@/data/cctv";

interface Props {
  camera: Camera;
}

export default function CameraCard({ camera }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64">

        <Image
          src={camera.thumbnail}
          alt={camera.location}
          fill
          className="object-cover"
        />

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium text-white ${
            camera.status === "Online"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {camera.status}
        </span>

      </div>

      <div className="space-y-3 p-6">

        <h3 className="text-xl font-bold">
          {camera.location}
        </h3>

        <p className="text-gray-600">
          {camera.institution}
        </p>

        <p className="text-sm text-gray-500">
          Last Updated : {camera.lastUpdated}
        </p>

        <button
          className="mt-3 w-full rounded-xl bg-[var(--primary)] py-3 text-white transition hover:opacity-90"
        >
          Open Live View
        </button>

      </div>

    </div>
  );
}