
export enum Category {
  REMERAS = 'Remeras',
  MUSCULOSAS = 'Musculosas',
  CAMISAS = 'Camisas',
  JEANS = 'Jeans',
  BERMUDAS = 'Bermudas',
  BUZOS = 'Buzos',
  SUETERES = 'Suéteres',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  images: string[];
  sizes: string[];
  isOversized?: boolean;
}

export type View = 'home' | 'catalog' | 'detail' | 'faq' | 'location' | 'about';
