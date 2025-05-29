import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/products.reducer';
import { Category, Product } from '../../core/models/product.model'; // Import Product

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.items
);

export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);

export const selectFeaturedProducts = createSelector(
  selectAllProducts,
  (products: Product[]) => products.filter((product: Product) => product.featured)
);

export const selectProductById = (productId: string) => createSelector(
  selectAllProducts,
  (products: Product[]) => products.find((product: Product) => product.id === productId)
);

// Category Selectors (assuming categories are part of product state or their own feature state)
export const selectAllCategories = createSelector(
    selectProductState, // Or a dedicated category state selector
    (state: ProductState) => state.categories || [] // Assuming categories are loaded here
);

export const selectFeaturedCategories = createSelector(
    selectAllCategories,
    (categories: Category[]) => categories.filter(category => category.featured)
);
