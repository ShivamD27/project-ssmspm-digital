import { Notice } from "@/data/notices";

interface Props {
  notice: Notice;
}

export default function NoticeCard({ notice }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-4 flex items-center justify-between">

        <span
          className={`rounded-full px-3 py-1 text-sm text-white ${
            notice.category === "Notice"
              ? "bg-red-600"
              : notice.category === "News"
              ? "bg-blue-600"
              : "bg-green-600"
          }`}
        >
          {notice.category}
        </span>

        {notice.important && (
          <span className="text-sm font-semibold text-red-600">
            Important
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold">
        {notice.title}
      </h3>

      <p className="mt-4 text-gray-600">
        {notice.description}
      </p>

      <p className="mt-6 text-sm text-gray-500">
        {notice.date}
      </p>

    </div>
  );
}