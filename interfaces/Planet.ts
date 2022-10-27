export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
export interface IPlanetInterface {
  count: number;
  next: string;
  previous?: string;
  results: IPlanet[];
}
export interface IPagination {
  page: number,
  recordsPerPage: number
  total: number,
  totalPages: number
}