export interface GalleryImage {
  id: number;
  title: string;
  category: "School" | "College" | "Sports" | "Events";
  image: string;
}

export const GALLERY: GalleryImage[] = [
  {
    id: 1,
    title: "Annual Function",
    category: "Events",
    image: "/images/gallery/1.jpg",
  },
  {
    id: 2,
    title: "Sports Day",
    category: "Sports",
    image: "/images/gallery/2.jpg",
  },
  {
    id: 3,
    title: "School Building",
    category: "School",
    image: "/images/gallery/3.jpg",
  },
  {
    id: 4,
    title: "Library",
    category: "School",
    image: "/images/gallery/4.jpg",
  },
  {
    id: 5,
    title: "Science Lab",
    category: "College",
    image: "/images/gallery/5.jpg",
  },
  {
    id: 6,
    title: "Classroom",
    category: "School",
    image: "/images/gallery/6.jpg",
  },
];