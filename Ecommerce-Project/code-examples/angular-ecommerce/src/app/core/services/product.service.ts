import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { NotificationService } from './notification.service';
import { MockDataService } from './mock-data.service';
import { FakeStoreApiService } from './fake-store-api.service';
import { Product, Category, Review, PaginatedResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;
  private categoriesUrl = `${environment.apiUrl}/categories`;
  
  // This local mockProducts is likely not used if mockDataService is primary for mocks.
  // private mockProducts: Product[] = [ ... ]; 
  
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private mockDataService: MockDataService,
    private fakeStoreApiService: FakeStoreApiService
  ) {}

  getProducts(options: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    category?: string; // This could be category ID or name
    subcategory?: string; 
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  } = {}): Observable<PaginatedResponse<Product>> { // Changed return type
    
    console.log('ProductService: getProducts called with options:', options);
    console.log('ProductService: Environment flags:', {
      useFakeStoreApi: environment.useFakeStoreApi,
      useMockData: environment.useMockData
    });
    
    // Check if we should use Fake Store API
    if (environment.useFakeStoreApi) {
      console.log('ProductService: Using Fake Store API');
      return this.fakeStoreApiService.getProducts(options);
    }
    
    if (environment.useMockData) {
      console.log('ProductService: Using Mock Data');
      // Assuming mockDataService.getProducts returns PaginatedResponse<Product>
      return this.mockDataService.getProducts(options); 
    }
    
    console.log('ProductService: Using real API');
    
    let params = new HttpParams();
    
    if (options.page) params = params.set('_page', options.page.toString()); // Common API convention
    if (options.limit) params = params.set('_limit', options.limit.toString()); // Common API convention
    if (options.sortBy) params = params.set('_sort', options.sortBy);
    if (options.order) params = params.set('_order', options.order);
    if (options.category) params = params.set('categoryId', options.category); // Assuming API filters by categoryId
    if (options.subcategory) params = params.set('subcategoryName', options.subcategory); // Example: API might filter by subcategoryName
    if (options.minPrice) params = params.set('price_gte', options.minPrice.toString());
    if (options.maxPrice) params = params.set('price_lte', options.maxPrice.toString());
    if (options.search) params = params.set('q', options.search); // Common API convention for search
    
    // For a real API, the response might already be PaginatedResponse or you might need to map it.
    // If API returns Product[] and headers for totalCount:
    return this.http.get<Product[]>(this.apiUrl, { params, observe: 'response' }).pipe(
      map(response => {
        const items = response.body || [];
        const totalCountHeader = response.headers.get('X-Total-Count');
        const totalCount = totalCountHeader ? +totalCountHeader : items.length;
        return {
          items: items,
          totalCount: totalCount,
          page: options.page || 1,
          limit: options.limit || items.length, // Or a default limit
          totalPages: options.limit ? Math.ceil(totalCount / options.limit) : 1
        };
      }),
      catchError(this.handleError('Failed to load products'))
    );
  }

  getProductById(id: string): Observable<Product> {
    console.log('ProductService: getProductById called with id:', id);
    console.log('ProductService: Environment flags:', {
      useFakeStoreApi: environment.useFakeStoreApi,
      useMockData: environment.useMockData
    });
    
    // Check if we should use Fake Store API
    if (environment.useFakeStoreApi) {
      console.log('ProductService: Using Fake Store API for product by ID');
      return this.fakeStoreApiService.getProductById(id).pipe(
        map(product => {
          if (!product) {
            throw new Error('Product not found');
          }
          return product;
        })
      );
    }
    
    // Use mock data in development
    if (environment.useMockData) {
      return this.mockDataService.getProductById(id).pipe(
        map(product => {
          if (!product) {
            throw new Error('Product not found');
          }
          return product;
        })
      );
    }
    
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError('Failed to load product details'))
    );
  }

  getCategories(): Observable<Category[]> {
    // Check if we should use Fake Store API
    if (environment.useFakeStoreApi) {
      return this.fakeStoreApiService.getCategories();
    }
    
    // Use mock data in development
    if (environment.useMockData) {
      return this.mockDataService.getCategories();
    }
    
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      map(categories => this.buildCategoryTree(categories)),
      catchError(this.handleError('Failed to load categories'))
    );
  }

  getProductReviews(productId: string, page = 1, limit = 10): Observable<{ reviews: Review[]; totalCount: number }> {
    // Use mock data in development
    if (environment.useMockData) {
      return this.mockDataService.getProductReviews(productId, page, limit);
    }
    
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    
    return this.http.get<{ reviews: Review[]; totalCount: number }>(
      `${this.apiUrl}/${productId}/reviews`,
      { params }
    ).pipe(
      catchError(this.handleError('Failed to load product reviews'))
    );
  }

  addProductReview(productId: string, review: { rating: number; title: string; comment: string }): Observable<Review> {
    return this.http.post<Review>(
      `${this.apiUrl}/${productId}/reviews`,
      review
    ).pipe(
      catchError(this.handleError('Failed to submit your review'))
    );
  }

  getFeaturedProducts(limit = 8): Observable<Product[]> { // This typically returns just an array
    if (environment.useMockData) {
      return this.mockDataService.getFeaturedProducts(limit);
    }
    
    const params = new HttpParams().set('_limit', limit.toString()).set('featured', 'true');
    
    // Assuming API returns Product[] directly for this specific endpoint
    return this.http.get<Product[]>(this.apiUrl, { params }).pipe(
      catchError(this.handleError('Failed to load featured products'))
    );
  }

  getRelatedProducts(productId: string, limit = 4): Observable<Product[]> {
    const params = new HttpParams().set('limit', limit.toString());
    
    return this.http.get<Product[]>(`${this.apiUrl}/${productId}/related`, { params }).pipe(
      catchError(this.handleError('Failed to load related products'))
    );
  }

  private buildCategoryTree(categories: Category[]): Category[] {
    // Create a map for faster lookup
    const categoryMap = new Map<string, Category>();
    categories.forEach(category => {
      categoryMap.set(category.id, { ...category, children: [] });
    });
    
    // Identify top-level categories and build hierarchy
    const rootCategories: Category[] = [];
    categoryMap.forEach(category => {
      if (!category.parentId) {
        rootCategories.push(category);
      } else {
        const parent = categoryMap.get(category.parentId);
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(category);
        }
      }
    });
    
    return rootCategories;
  }

  private handleError(message: string) {
    return (error: any): Observable<never> => {
      this.notificationService.error(message);
      throw error;
    };
  }

  // Store management methods
  loadProducts(): Observable<PaginatedResponse<Product>> { // Align with getProducts return type
    return this.getProducts(); // Now returns PaginatedResponse
  }

  loadCategories(): Observable<Category[]> {
    return this.getCategories();
  }

  loadProductById(id: string): Observable<Product> {
    return this.getProductById(id);
  }
}
