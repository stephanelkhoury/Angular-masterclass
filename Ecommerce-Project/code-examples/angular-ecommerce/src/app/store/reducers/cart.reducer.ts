import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../core/models/cart-item.model';
import * as CartActions from '../actions/cart.actions';

export interface State {
  items: CartItem[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  items: [],
  total: 0,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  
  // Add to cart
  on(CartActions.addToCart, (state, { item }) => {
    const existingItemIndex = state.items.findIndex(cartItem => cartItem.productId === item.productId);
    let updatedItems: CartItem[];
    
    if (existingItemIndex >= 0) {
      // Item exists, update quantity
      updatedItems = state.items.map((cartItem, index) => 
        index === existingItemIndex 
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      // New item, add to cart
      updatedItems = [...state.items, item];
    }
    
    return {
      ...state,
      items: updatedItems,
      total: calculateTotal(updatedItems)
    };
  }),
  
  // Remove from cart
  on(CartActions.removeFromCart, (state, { productId }) => {
    const updatedItems = state.items.filter(item => item.productId !== productId);
    return {
      ...state,
      items: updatedItems,
      total: calculateTotal(updatedItems)
    };
  }),
  
  // Update cart item quantity
  on(CartActions.updateCartItemQuantity, (state, { productId, quantity }) => {
    const updatedItems = state.items.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    );
    return {
      ...state,
      items: updatedItems,
      total: calculateTotal(updatedItems)
    };
  }),
  
  // Clear cart
  on(CartActions.clearCart, () => initialState),
  
  // Load cart
  on(CartActions.loadCart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  // Load cart success
  on(CartActions.loadCartSuccess, (state, { items }) => ({
    ...state,
    items,
    total: calculateTotal(items),
    loading: false,
    error: null
  })),
  
  // Load cart failure
  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: typeof error === 'string' ? error : 'Failed to load cart'
  }))
);

// Helper function to calculate total
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}
