export default function ContactSection() {
  return (
    <section className="py-24">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

        <div className="rounded-3xl border bg-white p-10 shadow">

          <h2 className="mb-8 text-4xl font-bold">
            Contact Information
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                Shewadi Ba., Loha, Nanded, Maharashtra
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">
                +91 98222 25335
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">
                info@ssmspm.org
              </p>
            </div>

          </div>

        </div>

        <form className="space-y-6 rounded-3xl border bg-white p-10 shadow">

          <input
            placeholder="Full Name"
            className="w-full rounded-xl border p-4 outline-none focus:border-[var(--primary)]"
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl border p-4 outline-none focus:border-[var(--primary)]"
          />

          <input
            placeholder="Subject"
            className="w-full rounded-xl border p-4 outline-none focus:border-[var(--primary)]"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full rounded-xl border p-4 outline-none focus:border-[var(--primary)]"
          />

          <button
            className="rounded-full bg-[var(--primary)] px-8 py-4 text-white transition hover:scale-105"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}