export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';