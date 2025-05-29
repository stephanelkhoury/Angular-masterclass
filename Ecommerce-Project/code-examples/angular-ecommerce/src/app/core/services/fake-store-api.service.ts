import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product, Category, PaginatedResponse } from '../models/product.model';

// Fake Store API interfaces
export interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FakeStoreCategory {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  // Get all products from Fake Store API
  getProducts(options: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    category?: string;
    search?: string;
  } = {}): Observable<PaginatedResponse<Product>> {
    
    let url = `${this.baseUrl}/products`;
    
    // Handle category filtering
    if (options.category && options.category !== 'all') {
      url = `${this.baseUrl}/products/category/${encodeURIComponent(options.category)}`;
    }
    
    // Add query parameters
    const params = new URLSearchParams();
    if (options.limit) {
      params.append('limit', options.limit.toString());
    }
    if (options.sortBy) {
      params.append('sort', options.order || 'asc');
    }
    
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    console.log('FakeStoreApiService: Making request to:', url);

    return this.http.get<FakeStoreProduct[]>(url).pipe(
      map(products => {
        console.log('FakeStoreApiService: Received response:', products);
        return this.transformToAppProducts(products, options);
      }),
      catchError(error => {
        console.error('FakeStoreApiService: Error fetching products:', error);
        return of(this.getEmptyResponse());
      })
    );
  }

  // Get product by ID
  getProductById(id: string): Observable<Product | null> {
    const url = `${this.baseUrl}/products/${id}`;
    console.log('FakeStoreApiService: Getting product by ID from:', url);
    
    return this.http.get<FakeStoreProduct>(url).pipe(
      map(product => {
        console.log('FakeStoreApiService: Received product:', product);
        return this.transformSingleProduct(product);
      }),
      catchError(error => {
        console.error('FakeStoreApiService: Error fetching product by ID:', error);
        return of(null);
      })
    );
  }

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`).pipe(
      map(categories => this.transformToAppCategories(categories)),
      catchError(error => {
        console.error('Error fetching categories:', error);
        return of([]);
      })
    );
  }

  // Get products in a specific category
  getProductsByCategory(categoryName: string, limit?: number): Observable<Product[]> {
    let url = `${this.baseUrl}/products/category/${encodeURIComponent(categoryName)}`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<FakeStoreProduct[]>(url).pipe(
      map(products => products.map(p => this.transformSingleProduct(p))),
      catchError(error => {
        console.error('Error fetching products by category:', error);
        return of([]);
      })
    );
  }

  // Transform Fake Store API product to your app's Product interface
  private transformSingleProduct(fakeProduct: FakeStoreProduct): Product {
    return {
      id: fakeProduct.id.toString(),
      name: fakeProduct.title,
      description: fakeProduct.description,
      price: fakeProduct.price,
      imageUrl: fakeProduct.image,
      images: [{ id: '1', url: fakeProduct.image, altText: fakeProduct.title }],
      category: {
        id: fakeProduct.category,
        name: this.capitalizeCategory(fakeProduct.category)
      },
      categoryId: fakeProduct.category,
      stock: Math.floor(Math.random() * 100) + 1, // Random stock since API doesn't provide
      stockQuantity: Math.floor(Math.random() * 100) + 1,
      rating: fakeProduct.rating.rate,
      brand: this.generateBrandFromCategory(fakeProduct.category),
      sku: `FS-${fakeProduct.id}`,
      createdAt: new Date(),
      featured: Math.random() > 0.7, // Randomly mark some as featured
      regularPrice: fakeProduct.price * 1.2, // Simulate original price
      discountPrice: Math.random() > 0.5 ? fakeProduct.price : undefined,
      availabilityStatus: 'in-stock' as const,
      freeShipping: Math.random() > 0.6,
      fastDelivery: Math.random() > 0.7,
      reviews: this.generateMockReviews(fakeProduct.id.toString(), fakeProduct.rating.count)
    };
  }

  // Transform multiple products
  private transformToAppProducts(
    fakeProducts: FakeStoreProduct[], 
    options: any
  ): PaginatedResponse<Product> {
    let products = fakeProducts.map(p => this.transformSingleProduct(p));
    
    // Apply search filter if provided
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category?.name.toLowerCase().includes(searchTerm)
      );
    }

    // Calculate pagination
    const page = options.page || 1;
    const limit = options.limit || products.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return {
      items: paginatedProducts,
      totalCount: products.length,
      page: page,
      limit: limit,
      totalPages: Math.ceil(products.length / limit)
    };
  }

  // Transform categories
  private transformToAppCategories(categories: string[]): Category[] {
    return categories.map(cat => ({
      id: cat,
      name: this.capitalizeCategory(cat),
      featured: Math.random() > 0.5 // Randomly mark some as featured
    }));
  }

  // Helper methods
  private capitalizeCategory(category: string): string {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private generateBrandFromCategory(category: string): string {
    const brandMap: { [key: string]: string[] } = {
      'electronics': ['Apple', 'Samsung', 'Sony', 'LG', 'Microsoft'],
      'jewelery': ['Tiffany & Co.', 'Cartier', 'Pandora', 'Swarovski'],
      "men's clothing": ['Nike', 'Adidas', 'Levi\'s', 'Calvin Klein', 'Tommy Hilfiger'],
      "women's clothing": ['Zara', 'H&M', 'Forever 21', 'ASOS', 'Mango']
    };

    const brands = brandMap[category] || ['Generic Brand'];
    return brands[Math.floor(Math.random() * brands.length)];
  }

  private generateMockReviews(productId: string, count: number): any[] {
    // Generate a few mock reviews based on the count
    const maxReviews = Math.min(count, 5);
    const reviews = [];
    
    for (let i = 0; i < maxReviews; i++) {
      reviews.push({
        id: `${productId}-review-${i}`,
        productId: productId,
        userId: `user-${i}`,
        userName: `Customer ${i + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        comment: 'Great product! Highly recommended.',
        createdAt: new Date()
      });
    }
    
    return reviews;
  }

  private getEmptyResponse(): PaginatedResponse<Product> {
    return {
      items: [],
      totalCount: 0,
      page: 1,
      limit: 10,
      totalPages: 0
    };
  }
}
