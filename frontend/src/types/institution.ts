export interface Institution {
  id: number;
  slug: string;

  name: string;
  shortName: string;

  established: number;

  type: string;

  affiliation: string;

  principal: string;

  address: string;

  students: number;

  staff: number;

  phone: string;

  email?: string;

  image: string;

  gallery: string[];

  facilities: string[];

  description: string;

  featured: boolean;
}