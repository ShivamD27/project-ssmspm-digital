export interface TransparencyDocument {
  id: number;
  title: string;
  category:
    | "Government Orders"
    | "Audit Reports"
    | "Grant Documents"
    | "Certificates"
    | "Notices";

  year: number;

  description: string;

  file: string;
}

export const DOCUMENTS: TransparencyDocument[] = [
  {
    id: 1,
    title: "Grant Approval 2024",
    category: "Grant Documents",
    year: 2024,
    description:
      "Government grant approval for educational institutions.",
    file: "#",
  },
  {
    id: 2,
    title: "Audit Report 2023-24",
    category: "Audit Reports",
    year: 2024,
    description:
      "Annual financial audit report.",
    file: "#",
  },
  {
    id: 3,
    title: "Recognition Certificate",
    category: "Certificates",
    year: 2022,
    description:
      "Recognition issued by Government of Maharashtra.",
    file: "#",
  },
  {
    id: 4,
    title: "Government Circular",
    category: "Government Orders",
    year: 2025,
    description:
      "Latest government circular for Ashram Schools.",
    file: "#",
  },
];