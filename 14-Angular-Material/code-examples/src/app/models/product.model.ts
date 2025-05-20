export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  category: string;
  stock: number;
  sku: string;
  featured: boolean;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}
