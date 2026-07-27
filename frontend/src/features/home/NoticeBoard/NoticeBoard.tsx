import { NOTICES } from "@/data/notices";
import NoticeCard from "./NoticeCard";

export default function NoticeBoard() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Latest Updates
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            News & Notices
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {NOTICES.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
            />
          ))}

        </div>

      </div>
    </section>
  );
}