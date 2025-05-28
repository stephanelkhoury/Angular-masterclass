export interface CartItem {
  id?: number;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartAddItemRequest {
  productId: string;
  quantity: number;
}

export interface CartUpdateItemRequest {
  itemId: string;
  quantity: number;
}
