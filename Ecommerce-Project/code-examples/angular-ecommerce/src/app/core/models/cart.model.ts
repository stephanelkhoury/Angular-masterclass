export interface CartItem {
  productId: string; // References the Product's ID
  quantity: number;
  // Optional: Store denormalized data for easier display in cart, but ensure it's updated if product changes.
  name?: string;
  price: number; // Required by selectors and effects
  unitPrice?: number; // Price at the time of adding to cart
  image: string; // Required by effects (imageUrl)
  imageUrl?: string; // Alternative name for image
  // You might also have a unique ID for the cart item itself if needed for backend DB
  id?: string; // e.g., if cart items have their own IDs in the backend
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  userId?: string; // Optional: if carts are user-specific
  lastUpdated?: Date;
}
