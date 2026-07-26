import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/home/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)] text-[var(--foreground)]">
        <Hero />
      </main>
    </>
  );
}