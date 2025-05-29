export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  parentId?: string; // For building tree structures
  children?: Category[]; // For tree structures
  featured?: boolean; // If categories can be featured
}

export interface Review {
  id: string;
  productId: string; // Link review to a product
  userId: string;
  userName?: string; // Optional, denormalized for display
  userAvatar?: string; // Add missing userAvatar property
  rating: number;
  title?: string; // Add missing title property
  comment: string;
  createdAt: Date;
  updatedAt?: Date; // Add missing updatedAt property
}

export interface ProductImage {
  id?: string;
  url: string;
  altText?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Main image URL (can be the first from images array)
  images?: ProductImage[]; // Array of additional images
  additionalImages?: string[]; // Add missing additionalImages property

  category?: Category; // Changed from string to Category object
  categoryId?: string; // Keep if you also need a direct ID reference

  stock?: number; // General stock count
  stockQuantity?: number; // Alias for stock, or more specific if needed

  rating?: number; // Average rating
  reviews?: Review[]; // Array of reviews

  brand?: string;
  sku?: string;

  createdAt?: Date;
  updatedAt?: Date;

  featured?: boolean; // For featured products

  // Pricing related
  regularPrice?: number; // Original price if there's a discount
  discountPrice?: number; // Current discounted price (could be same as price if no discount)

  // Shipping & Availability
  freeShipping?: boolean;
  fastDelivery?: boolean;
  availabilityStatus?: 'in-stock' | 'out-of-stock' | 'pre-order' | 'low-stock';

  // Product specific details
  specifications?: Record<string, string>; // Properly typed as key-value pairs of strings
  longDescription?: string; // Add missing longDescription property
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    unit?: 'cm' | 'inch';
  };
  weight?: {
    value?: number;
    unit?: 'kg' | 'lb';
  };
  colorOptions?: string[];
  sizeOptions?: string[];
  keyFeatures?: string[]; // Array of key feature strings

  // Unit pricing
  unit?: string; // e.g., 'kg', 'liter', 'item'
  unitQuantity?: number; // e.g., if price is for 2kg, this would be 2

  // Add any other fields your application might need
  // e.g., tags, variants, relatedProductIds, etc.
}

// For paginated responses from services
export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages?: number;
}
