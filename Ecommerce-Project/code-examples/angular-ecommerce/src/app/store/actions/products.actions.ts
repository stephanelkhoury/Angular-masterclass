import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/models/category.model';
import { Review } from '../../core/models/review.model';

// Load Products
export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ 
    page?: number; 
    limit?: number; 
    sort?: string; 
    categoryId?: number;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
  }>()
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[]; total: number }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

// Load Product Detail
export const loadProductDetail = createAction(
  '[Products] Load Product Detail',
  props<{ productId: number }>()
);

export const loadProductDetailSuccess = createAction(
  '[Products] Load Product Detail Success',
  props<{ product: Product }>()
);

export const loadProductDetailFailure = createAction(
  '[Products] Load Product Detail Failure',
  props<{ error: any }>()
);

// Load Categories
export const loadCategories = createAction(
  '[Products] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Products] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Products] Load Categories Failure',
  props<{ error: any }>()
);

// Reviews
export const loadProductReviews = createAction(
  '[Products] Load Product Reviews',
  props<{ productId: number }>()
);

export const loadProductReviewsSuccess = createAction(
  '[Products] Load Product Reviews Success',
  props<{ reviews: Review[] }>()
);

export const loadProductReviewsFailure = createAction(
  '[Products] Load Product Reviews Failure',
  props<{ error: any }>()
);

export const addProductReview = createAction(
  '[Products] Add Product Review',
  props<{ productId: number; review: Omit<Review, 'id' | 'date'> }>()
);

export const addProductReviewSuccess = createAction(
  '[Products] Add Product Review Success',
  props<{ review: Review }>()
);

export const addProductReviewFailure = createAction(
  '[Products] Add Product Review Failure',
  props<{ error: any }>()
);
