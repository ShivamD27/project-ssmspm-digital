import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F6F7F2] text-[#1F2A1F]">
        <Hero />
      </main>
    </>
  );
}