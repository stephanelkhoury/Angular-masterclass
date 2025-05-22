import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { NotificationService } from './notification.service';
import { Product, Category, Review } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;
  private categoriesUrl = `${environment.apiUrl}/categories`;
  
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getProducts(options: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  } = {}): Observable<{ products: Product[]; totalCount: number; page: number; limit: number }> {
    let params = new HttpParams();
    
    if (options.page) params = params.set('page', options.page.toString());
    if (options.limit) params = params.set('limit', options.limit.toString());
    if (options.sortBy) params = params.set('sortBy', options.sortBy);
    if (options.order) params = params.set('order', options.order);
    if (options.category) params = params.set('category', options.category);
    if (options.minPrice) params = params.set('minPrice', options.minPrice.toString());
    if (options.maxPrice) params = params.set('maxPrice', options.maxPrice.toString());
    if (options.search) params = params.set('search', options.search);
    
    return this.http.get<{ products: Product[]; totalCount: number; page: number; limit: number }>(
      this.apiUrl,
      { params }
    ).pipe(
      catchError(this.handleError('Failed to load products'))
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError('Failed to load product details'))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      map(categories => this.buildCategoryTree(categories)),
      catchError(this.handleError('Failed to load categories'))
    );
  }

  getProductReviews(productId: string, page = 1, limit = 10): Observable<{ reviews: Review[]; totalCount: number }> {
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

  getFeaturedProducts(limit = 8): Observable<Product[]> {
    const params = new HttpParams().set('limit', limit.toString()).set('featured', 'true');
    
    return this.http.get<{ products: Product[] }>(this.apiUrl, { params }).pipe(
      map(response => response.products),
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
}
