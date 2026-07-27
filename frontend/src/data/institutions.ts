export interface Institution {
  id: number;
  slug: string;

  name: string;
  type: string;

  established: string;
  affiliation: string;

  principal: string;

  address: string;

  students: string;
  staff: string;

  contact: string;
  email: string;

  image: string;

  description: string;

  facilities: string[];

  gallery: string[];
}

export const INSTITUTIONS: Institution[] = [
  {
    id: 1,
    slug: "kai-babaraoji-dhonde-kendriya-ashram-shala",

    name: "Kai Babaraoji Dhonde Kendriya Ashram Shala",

    type: "Std. 1 - 10 Ashram School",

    established: "1998",

    affiliation: "Government of Maharashtra",

    principal: "Mahesh Sir",

    address: "Shewadi Ba., Tq. Loha, Dist. Nanded",

    students: "300+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/kbd-school.jpg",

    description:
      "Government-aided Ashram School committed to providing free, quality education for rural students with a strong focus on academics, sports, discipline and overall personality development.",

    facilities: [
      "Library",
      "Science Laboratory",
      "Computer Lab",
      "Hostel",
      "Sports Ground",
      "Career Guidance",
      "CCTV Surveillance",
      "Separate Toilets"
    ],

    gallery: [
      "/images/gallery/1.jpg",
      "/images/gallery/2.jpg",
      "/images/gallery/3.jpg"
    ]
  },

  {
    id: 2,
    slug: "minatai-thackeray-school",

    name: "Minatai Thackeray School",

    type: "Std. 1 - 8 School",

    established: "1999",

    affiliation: "Government of Maharashtra",

    principal: "Pidge Sir",

    address: "Risangaon, Tq. Loha, Dist. Nanded",

    students: "300+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/minatai-school.jpg",

    description:
      "Providing quality primary education while nurturing values, creativity and confidence among students.",

    facilities: [
      "Library",
      "Science Lab",
      "Sports",
      "Hostel",
      "Playground",
      "Career Guidance",
      "CCTV",
      "Separate Toilets"
    ],

    gallery: [
      "/images/gallery/1.jpg",
      "/images/gallery/2.jpg",
      "/images/gallery/3.jpg"
    ]
  },

  {
    id: 3,
    slug: "jijamata-prathamik-shala",

    name: "Jijamata Prathamik Shala",

    type: "Std. 1 - 10 School",

    established: "1998",

    affiliation: "Government of Maharashtra",

    principal: "Mahesh Hande Sir",

    address: "Tehra Nagar, Dist. Nanded",

    students: "300+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/jijamata-school.jpg",

    description:
      "Dedicated to providing accessible and holistic education for every child in the region.",

    facilities: [
      "Library",
      "Computer Lab",
      "Sports",
      "Career Guidance",
      "Hostel",
      "Playground",
      "CCTV",
      "Separate Toilets"
    ],

    gallery: [
      "/images/gallery/1.jpg",
      "/images/gallery/2.jpg"
    ]
  },

  {
    id: 4,
    slug: "mahatma-basveshwar-junior-college",

    name: "Mahatma Basveshwar Mahavidyalaya",

    type: "Junior College (11th & 12th)",

    established: "2020",

    affiliation: "Government of Maharashtra",

    principal: "Hande Sir",

    address: "Tehra Nagar, Dist. Nanded",

    students: "100+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/basveshwar-jr-college.jpg",

    description:
      "Preparing students for higher education with excellent teaching and career-focused guidance.",

    facilities: [
      "Library",
      "Science Lab",
      "Computer Lab",
      "Career Guidance",
      "Sports",
      "Hostel",
      "CCTV"
    ],

    gallery: [
      "/images/gallery/4.jpg",
      "/images/gallery/5.jpg"
    ]
  },

  {
    id: 5,
    slug: "mahatma-basveshwar-college",

    name: "Mahatma Basveshwar College",

    type: "Degree College",

    established: "1998",

    affiliation: "Government of Maharashtra",

    principal: "Shirale Sir",

    address: "Osmannagar, Dist. Nanded",

    students: "300+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/basveshwar-college.jpg",

    description:
      "Offering undergraduate education in multiple disciplines with emphasis on academic excellence and social responsibility.",

    facilities: [
      "Library",
      "Computer Lab",
      "Science Lab",
      "Sports",
      "Hostel",
      "Career Guidance",
      "CCTV"
    ],

    gallery: [
      "/images/gallery/5.jpg",
      "/images/gallery/6.jpg"
    ]
  },

  {
    id: 6,
    slug: "prathamik-shala-rui",

    name: "Prathamik Shala Rui",

    type: "Std. 1 - 7 School",

    established: "1998",

    affiliation: "Government of Maharashtra",

    principal: "Patil Sir",

    address: "Rui, Tq. Loha, Dist. Nanded",

    students: "200+",

    staff: "12",

    contact: "9822225335",

    email: "info@ssmspm.org",

    image: "/images/institutions/rui-school.jpg",

    description:
      "Focused on providing strong primary education while ensuring equal learning opportunities for every student.",

    facilities: [
      "Library",
      "Sports",
      "Playground",
      "Career Guidance",
      "Hostel",
      "CCTV",
      "Separate Toilets"
    ],

    gallery: [
      "/images/gallery/2.jpg",
      "/images/gallery/3.jpg"
    ]
  }
];