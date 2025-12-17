export interface Product {
  id: number;
  title: string;
  price: number; // float in API, number in TS
  description: string;
  category: string;
  image: string; // URI
}

export type SortType = "none" | "low" | "high";
