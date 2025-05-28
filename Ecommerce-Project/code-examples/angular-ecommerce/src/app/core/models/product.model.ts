export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  discountPrice?: number;
  regularPrice?: number;
  stock: number;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  images: string[];
  additionalImages?: string[];
  imageUrl: string;
  categoryId: string;
  category: Category;
  sku: string;
  brand?: string;
  features?: string[];
  keyFeatures?: string[];
  featured?: boolean;
  specifications?: Record<string, string>;
  tags?: string[];
  reviews?: Review[];
  unit?: string;
  unitQuantity?: number;
  freeShipping?: boolean;
  fastDelivery?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  parentId?: string;
  children?: Category[];
  featured?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
