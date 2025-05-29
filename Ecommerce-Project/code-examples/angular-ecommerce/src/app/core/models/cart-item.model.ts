export interface CartItem {
  id?: string; // Changed from number to string to match cart.model.ts
  productId: string;
  name: string;
  price: number;
  unitPrice?: number; // Added optional unitPrice
  image: string;
  imageUrl?: string; // Added optional imageUrl
  quantity: number;
}
