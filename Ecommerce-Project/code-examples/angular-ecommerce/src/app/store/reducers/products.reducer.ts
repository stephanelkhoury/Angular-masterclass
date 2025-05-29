import { createReducer, on } from '@ngrx/store';
import { Product, Category, Review } from '../../core/models/product.model';
import * as ProductActions from '../actions/product.actions';

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

export interface ProductState extends State {} // Add alias for ProductState

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
  initialState,
  
  // Load Products
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ProductActions.loadProductsSuccess, (state, { paginatedResponse }) => ({
    ...state,
    items: paginatedResponse.items,
    total: paginatedResponse.totalCount,
    loading: false,
    error: null
  })),
  
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  
  // Load Product By ID
  on(ProductActions.loadProductById, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ProductActions.loadProductByIdSuccess, (state, { product }) => ({
    ...state,
    currentProduct: product,
    selectedProduct: product,
    loading: false,
    error: null
  })),
  
  on(ProductActions.loadProductByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  
  // Load Categories
  on(ProductActions.loadCategories, (state) => {
    console.log('Products Reducer: loadCategories action received');
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  
  on(ProductActions.loadCategoriesSuccess, (state, { categories }) => {
    console.log('Products Reducer: loadCategoriesSuccess action received', categories);
    return {
      ...state,
      categories: categories,
      loading: false,
      error: null
    };
  }),
  
  on(ProductActions.loadCategoriesFailure, (state, { error }) => {
    console.log('Products Reducer: loadCategoriesFailure action received', error);
    return {
      ...state,
      loading: false,
      error: error
    };
  })
);
