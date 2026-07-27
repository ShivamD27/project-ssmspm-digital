export interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
  important: boolean;
  category: "Notice" | "News" | "Event";
}

export const NOTICES: Notice[] = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2026-27",
    description: "Admissions are now open for all eligible students.",
    date: "10 Jul 2026",
    important: true,
    category: "Notice",
  },
  {
    id: 2,
    title: "District Sports Competition",
    description: "Students participated in district level competitions.",
    date: "02 Jul 2026",
    important: false,
    category: "News",
  },
  {
    id: 3,
    title: "Annual Gathering",
    description: "Annual cultural gathering scheduled next month.",
    date: "15 Aug 2026",
    important: false,
    category: "Event",
  },
];