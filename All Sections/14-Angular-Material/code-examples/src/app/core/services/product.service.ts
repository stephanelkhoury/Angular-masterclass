import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product, ProductCategory } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products';
  
  // Mock product data
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Laptop',
      description: 'High-performance laptop with the latest processor, ample memory, and a vivid display for professional use.',
      price: 1299.99,
      imageUrl: 'assets/images/products/laptop.jpg',
      category: 'Electronics',
      stock: 15,
      sku: 'LAPTOP-001',
      featured: true,
      rating: 4.5,
      reviews: 28,
      createdAt: new Date('2023-01-10'),
      updatedAt: new Date('2023-04-15')
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones with exceptional sound quality and long battery life.',
      price: 249.99,
      salePrice: 199.99,
      imageUrl: 'assets/images/products/headphones.jpg',
      category: 'Electronics',
      stock: 42,
      sku: 'AUDIO-002',
      featured: true,
      rating: 4.8,
      reviews: 156,
      createdAt: new Date('2023-02-05'),
      updatedAt: new Date('2023-04-10')
    },
    {
      id: '3',
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking, notifications, and customizable watch faces.',
      price: 199.99,
      imageUrl: 'assets/images/products/smartwatch.jpg',
      category: 'Wearables',
      stock: 30,
      sku: 'WATCH-003',
      featured: false,
      rating: 4.2,
      reviews: 89,
      createdAt: new Date('2023-03-12'),
      updatedAt: new Date('2023-04-05')
    },
    {
      id: '4',
      name: 'Portable SSD',
      description: '1TB high-speed external SSD with USB-C connectivity for fast file transfers.',
      price: 159.99,
      imageUrl: 'assets/images/products/ssd.jpg',
      category: 'Storage',
      stock: 55,
      sku: 'STORAGE-004',
      featured: false,
      rating: 4.7,
      reviews: 42,
      createdAt: new Date('2023-01-25'),
      updatedAt: new Date('2023-03-20')
    },
    {
      id: '5',
      name: '4K Monitor',
      description: '32-inch 4K UHD monitor with HDR support and adjustable stand for professional use.',
      price: 399.99,
      salePrice: 349.99,
      imageUrl: 'assets/images/products/monitor.jpg',
      category: 'Electronics',
      stock: 12,
      sku: 'DISPLAY-005',
      featured: true,
      rating: 4.6,
      reviews: 35,
      createdAt: new Date('2023-02-18'),
      updatedAt: new Date('2023-04-02')
    }
  ];

  private mockCategories: ProductCategory[] = [
    { id: '1', name: 'Electronics', description: 'Computers, phones, and other electronic devices' },
    { id: '2', name: 'Wearables', description: 'Smartwatches, fitness trackers, and other wearable tech' },
    { id: '3', name: 'Storage', description: 'Hard drives, SSDs, and other storage solutions' },
    { id: '4', name: 'Accessories', description: 'Cables, adapters, cases and other accessories' }
  ];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // In a real app, this would call the API
    // return this.http.get<Product[]>(this.apiUrl);
    
    return of(this.mockProducts).pipe(delay(800)); // Simulate network delay
  }

  getProductById(id: string): Observable<Product | undefined> {
    // In a real app, this would call the API
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
    
    const product = this.mockProducts.find(p => p.id === id);
    return of(product).pipe(delay(800)); // Simulate network delay
  }

  getCategories(): Observable<ProductCategory[]> {
    // In a real app, this would call the API
    // return this.http.get<ProductCategory[]>(`${this.apiUrl}/categories`);
    
    return of(this.mockCategories).pipe(delay(800)); // Simulate network delay
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    // In a real app, this would call the API
    // return this.http.post<Product>(this.apiUrl, product);
    
    const newProduct: Product = {
      id: Date.now().toString(),
      name: product.name || 'Untitled Product',
      description: product.description || '',
      price: product.price || 0,
      imageUrl: product.imageUrl || 'assets/images/products/placeholder.jpg',
      category: product.category || 'Uncategorized',
      stock: product.stock || 0,
      sku: product.sku || `SKU-${Date.now()}`,
      featured: product.featured || false,
      rating: 0,
      reviews: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...product
    };
    
    this.mockProducts.push(newProduct);
    
    return of(newProduct).pipe(delay(800)); // Simulate network delay
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    // In a real app, this would call the API
    // return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
    
    const index = this.mockProducts.findIndex(p => p.id === id);
    
    if (index !== -1) {
      const updatedProduct: Product = {
        ...this.mockProducts[index],
        ...product,
        updatedAt: new Date()
      };
      
      this.mockProducts[index] = updatedProduct;
      return of(updatedProduct).pipe(delay(800)); // Simulate network delay
    }
    
    throw new Error('Product not found');
  }

  deleteProduct(id: string): Observable<void> {
    // In a real app, this would call the API
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    
    const index = this.mockProducts.findIndex(p => p.id === id);
    
    if (index !== -1) {
      this.mockProducts.splice(index, 1);
    }
    
    return of(undefined).pipe(delay(800)); // Simulate network delay
  }
}
