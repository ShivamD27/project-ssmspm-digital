"use client";

import { useMemo, useState } from "react";

import { Download } from "lucide-react";

import { DOCUMENTS } from "@/data/transparency";

const FILTERS = [
  "All",
  "Government Orders",
  "Audit Reports",
  "Grant Documents",
  "Certificates",
  "Notices",
];

export default function TransparencyGrid() {

  const [selected, setSelected] = useState("All");

  const docs = useMemo(() => {

    if (selected === "All") return DOCUMENTS;

    return DOCUMENTS.filter(
      (item) => item.category === selected
    );

  }, [selected]);

  return (

    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {FILTERS.map((item) => (

            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`rounded-full px-5 py-3 transition

              ${
                selected === item
                  ? "bg-[var(--primary)] text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="grid gap-8">

          {docs.map((doc) => (

            <div
              key={doc.id}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>

                  <p className="text-sm font-medium text-[var(--primary)]">
                    {doc.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {doc.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {doc.description}
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    Year : {doc.year}
                  </p>

                </div>

                <a
                  href={doc.file}
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3 text-white transition hover:scale-105"
                >
                  <Download size={18} />

                  Download
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}