// services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.example.com/products'; // Replace with real API URL in production
  
  // Mock products for demo
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Smartphone X',
      description: 'Latest generation smartphone with high-resolution camera',
      price: 799.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'electronics'
    },
    {
      id: '2',
      name: 'Laptop Pro',
      description: 'Powerful laptop for professionals',
      price: 1299.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'electronics'
    },
    {
      id: '3',
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'electronics'
    },
    {
      id: '4',
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected',
      price: 249.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'wearables'
    },
    {
      id: '5',
      name: 'Tablet Ultra',
      description: 'Lightweight tablet with stunning display',
      price: 499.99,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'electronics'
    }
  ];

  constructor(private http: HttpClient) { }

  getProducts(category?: string): Observable<Product[]> {
    // In a real app, this would call the API with params
    // return this.http.get<Product[]>(this.apiUrl)
    
    // For the demo, we'll use mock data
    if (category) {
      return of(this.mockProducts.filter(p => p.category === category));
    }
    return of(this.mockProducts);
  }

  getProduct(id: string): Observable<Product> {
    // In a real app, this would call the API with the ID
    // return this.http.get<Product>(`${this.apiUrl}/${id}`)
    
    // For the demo, we'll use mock data
    const product = this.mockProducts.find(p => p.id === id);
    
    if (!product) {
      return of({} as Product);
    }
    
    return of(product);
  }

  addProduct(product: Product): Observable<Product> {
    // In a real app, this would call the API to add the product
    // return this.http.post<Product>(this.apiUrl, product)
    
    // For the demo, we'll simulate adding to mock data
    const newProduct = {
      ...product,
      id: (this.mockProducts.length + 1).toString()
    };
    this.mockProducts.push(newProduct);
    
    return of(newProduct);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    // In a real app, this would call the API to update the product
    // return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
    
    // For the demo, we'll simulate updating mock data
    const index = this.mockProducts.findIndex(p => p.id === id);
    
    if (index > -1) {
      this.mockProducts[index] = { ...product, id };
      return of(this.mockProducts[index]);
    }
    
    return of({} as Product);
  }

  deleteProduct(id: string): Observable<boolean> {
    // In a real app, this would call the API to delete the product
    // return this.http.delete(`${this.apiUrl}/${id}`).pipe(map(() => true))
    
    // For the demo, we'll simulate deleting from mock data
    const index = this.mockProducts.findIndex(p => p.id === id);
    
    if (index > -1) {
      this.mockProducts.splice(index, 1);
      return of(true);
    }
    
    return of(false);
  }
}
