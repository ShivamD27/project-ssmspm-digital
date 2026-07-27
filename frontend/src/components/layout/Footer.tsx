import Link from "next/link";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Institutions", href: "/institutions" },
  { title: "Achievements", href: "/achievements" },
  { title: "Gallery", href: "/gallery" },
  { title: "Transparency", href: "/transparency" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-32 bg-[var(--primary)] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">

        <div>
          <h2 className="text-3xl font-bold">SSMSPM</h2>

          <p className="mt-5 leading-8 text-white/80">
            Empowering rural Maharashtra through quality education,
            equality and excellence.
          </p>

          <p className="mt-5 text-sm text-white/60">
            शिक्षण हा प्रत्येकाचा मूलभूत अधिकार आहे.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <div className="space-y-3">

            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block transition hover:translate-x-2 hover:text-yellow-300"
              >
                {link.title}
              </Link>
            ))}

          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Contact
          </h3>

          <div className="space-y-3 text-white/80">

            <p>📍 Nanded, Maharashtra</p>

            <p>📞 +91 98222 25335</p>

            <p>✉ info@ssmspm.org</p>

          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Follow Us
          </h3>

          <div className="space-y-3 text-white/80">

            <p>Facebook</p>

            <p>Instagram</p>

            <p>YouTube</p>

          </div>
        </div>

      </div>

      <div className="border-t border-white/20 py-6 text-center text-sm text-white/70">

        © 2026 Sant Shiromani Manmath Swami Shikshan Prasarak Mandal.
        All Rights Reserved.

      </div>

    </footer>
  );
}