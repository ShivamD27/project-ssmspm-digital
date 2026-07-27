export interface Camera {
  id: number;
  institution: string;
  location: string;
  status: "Online" | "Offline";
  lastUpdated: string;
  thumbnail: string;
  streamUrl: string;
}

export const CAMERAS: Camera[] = [
  {
    id: 1,
    institution: "Kai Babaraoji Dhonde Kendriya Ashram Shala",
    location: "Main Entrance",
    status: "Online",
    lastUpdated: "2 mins ago",
    thumbnail: "/images/cctv/camera-placeholder.jpg",
    streamUrl: "#",
  },
  {
    id: 2,
    institution: "Kai Babaraoji Dhonde Kendriya Ashram Shala",
    location: "Playground",
    status: "Online",
    lastUpdated: "1 min ago",
    thumbnail: "/images/cctv/camera-placeholder.jpg",
    streamUrl: "#",
  },
  {
    id: 3,
    institution: "Minatai Thackeray School",
    location: "School Gate",
    status: "Offline",
    lastUpdated: "10 mins ago",
    thumbnail: "/images/cctv/camera-placeholder.jpg",
    streamUrl: "#",
  },
  {
    id: 4,
    institution: "Mahatma Basveshwar College",
    location: "Library",
    status: "Online",
    lastUpdated: "Just Now",
    thumbnail: "/images/cctv/camera-placeholder.jpg",
    streamUrl: "#",
  },
];