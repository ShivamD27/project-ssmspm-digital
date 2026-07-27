export interface GalleryImage {
  id: number;
  title: string;
  category: "Campus" | "Events" | "Sports" | "Academics";
  image: string;
}

export const GALLERY: GalleryImage[] = [
  {
    id: 1,
    title: "School Campus",
    category: "Campus",
    image: "/images/gallery/1.jpg",
  },
  {
    id: 2,
    title: "Science Exhibition",
    category: "Academics",
    image: "/images/gallery/2.jpg",
  },
  {
    id: 3,
    title: "Annual Gathering",
    category: "Events",
    image: "/images/gallery/3.jpg",
  },
  {
    id: 4,
    title: "Sports Day",
    category: "Sports",
    image: "/images/gallery/4.jpg",
  },
  {
    id: 5,
    title: "Computer Lab",
    category: "Academics",
    image: "/images/gallery/5.jpg",
  },
  {
    id: 6,
    title: "Library",
    category: "Campus",
    image: "/images/gallery/6.jpg",
  },
];