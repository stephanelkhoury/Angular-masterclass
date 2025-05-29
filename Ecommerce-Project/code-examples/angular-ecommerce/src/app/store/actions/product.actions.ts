import { createAction, props } from '@ngrx/store';
import { Product, Category, PaginatedResponse } from '../../core/models/product.model';

// Load All Products
export const loadProducts = createAction(
  '[Products Page] Load Products',
  props<{ params?: any }>() // Optional params for filtering, pagination
);
export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ paginatedResponse: PaginatedResponse<Product> }>()
);
export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: any }>()
);

// Load Single Product
export const loadProductById = createAction(
  '[Product Details Page] Load Product By Id',
  props<{ productId: string }>()
);
export const loadProductByIdSuccess = createAction(
  '[Products API] Load Product By Id Success',
  props<{ product: Product }>()
);
export const loadProductByIdFailure = createAction(
  '[Products API] Load Product By Id Failure',
  props<{ error: any }>()
);

// Load Categories
export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Category API] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Category API] Load Categories Failure',
  props<{ error: any }>()
);
