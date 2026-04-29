export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'prints' | 'frames' | 'gifts' | 'decor';
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  link: string;
}
