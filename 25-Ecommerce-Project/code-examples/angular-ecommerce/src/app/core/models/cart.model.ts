export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product?: {
    id: string;
    name: string;
    price: number;
    discountPrice?: number;
    image: string;
  };
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
