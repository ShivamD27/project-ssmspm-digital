export interface Achievement {
  id: number;
  title: string;
  level: "District" | "State" | "National";
  year: number;
  student: string;
  description: string;
  image: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Kho-Kho Championship",
    level: "District",
    year: 2024,
    student: "Team SSMSPM",
    description:
      "Won District Level Kho-Kho Competition.",
    image: "/images/achievements/1.jpg",
  },
  {
    id: 2,
    title: "Science Exhibition",
    level: "State",
    year: 2023,
    student: "Rahul Patil",
    description:
      "Selected for State Level Science Exhibition.",
    image: "/images/achievements/2.jpg",
  },
  {
    id: 3,
    title: "Essay Competition",
    level: "District",
    year: 2025,
    student: "Sneha Deshmukh",
    description:
      "First Prize in District Essay Competition.",
    image: "/images/achievements/3.jpg",
  },
  {
    id: 4,
    title: "Athletics",
    level: "State",
    year: 2022,
    student: "School Athletics Team",
    description:
      "Gold Medal at State Athletics Championship.",
    image: "/images/achievements/4.jpg",
  }
];