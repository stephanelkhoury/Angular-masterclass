import { createReducer, on } from '@ngrx/store';
import { Product, Category, Review } from '../../core/models/product.model';

export interface State {
  items: Product[];
  categories: Category[];
  reviews: Review[];
  selectedProduct: Product | null;
  currentProduct: Product | null;
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  items: [],
  categories: [],
  reviews: [],
  selectedProduct: null,
  currentProduct: null,
  total: 0,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState
  // Add actions later
);
