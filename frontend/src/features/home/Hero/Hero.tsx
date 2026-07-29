import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Statistics from "../Statistics/Statistics";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] pt-40">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-[#F6F7F2] to-white" />

      {/* Decorative Circle */}
      <div className="absolute -top-52 -right-52 h-[600px] w-[600px] rounded-full bg-green-100 blur-3xl opacity-60" />

      {/* Decorative Circle */}
      <div className="absolute -bottom-64 -left-64 h-[700px] w-[700px] rounded-full bg-yellow-100 blur-3xl opacity-40" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="mb-6 rounded-full border bg-white/70 px-5 py-2 backdrop-blur">
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-600 uppercase">
            Since 1998 • Government Aided Institution
          </p>
        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-6xl font-bold leading-tight text-[var(--foreground)] md:text-8xl">

          Education.

          <br />

          Equality.

          <br />

          Excellence.

        </h1>

        {/* Marathi */}

        <p className="mt-8 text-2xl font-medium text-[var(--primary)]">

          शिक्षण हा प्रत्येकाचा मूलभूत अधिकार आहे.

        </p>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">

          Shri Sant Shiromani Manmath Swami Shikshan Prasarak Mandal has
          empowered rural Maharashtra through quality education, hostels,
          colleges and social initiatives for more than two decades.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

          <Button className="rounded-full px-8 py-7 text-base">

            Explore Institutions

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

          <Button
            variant="outline"
            className="rounded-full px-8 py-7 text-base"
          >
            <Play className="mr-2 h-5 w-5" />

            Watch Our Story
          </Button>
        </div>

        {/* <Statistics /> */}

      </div>
    </section>
  );
}