import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/products.reducer';

export const selectProductsState = createFeatureSelector<State>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  state => state.items
);

export const selectProductsTotal = createSelector(
  selectProductsState,
  state => state.total
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  state => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  state => state.error
);

export const selectCurrentProduct = createSelector(
  selectProductsState,
  state => state.currentProduct
);

export const selectAllCategories = createSelector(
  selectProductsState,
  state => state.categories
);

export const selectProductReviews = createSelector(
  selectProductsState,
  state => state.reviews
);

export const selectAverageRating = createSelector(
  selectProductReviews,
  reviews => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((total: number, review: any) => total + review.rating, 0);
    return sum / reviews.length;
  }
);

export const selectRatingDistribution = createSelector(
  selectProductReviews,
  reviews => {
    if (!reviews || reviews.length === 0) return {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    
    const distribution: {[key: number]: number} = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    
    reviews.forEach((review: any) => {
      distribution[review.rating]++;
    });
    
    return distribution;
  }
);
