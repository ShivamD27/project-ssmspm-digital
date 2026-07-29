"use client";

import { useEffect, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  title: string;
}

export default function StatisticCard({
  value,
  suffix = "",
  title,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-3xl border bg-white p-10 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <h3 className="text-5xl font-bold text-[var(--primary)]">
        {count}
        {suffix}
      </h3>

      <p className="mt-4 text-lg text-gray-600">
        {title}
      </p>

    </div>
  );
}