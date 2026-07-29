import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[var(--primary)] px-10 py-20 text-center text-white shadow-2xl">

        <p className="font-semibold uppercase tracking-[0.3em] opacity-80">
          Let's Build Together
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">

          Empowering Rural Maharashtra
          <br />
          Through Education

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">

          Join our mission of providing quality education,
          equal opportunities and brighter futures for every child.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[var(--primary)] transition hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[var(--primary)]"
          >
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}