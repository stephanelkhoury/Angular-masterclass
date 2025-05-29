import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product, Category, Review, PaginatedResponse, ProductImage } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      description: 'The ultimate iPhone experience with A17 Bionic chip and Pro camera system.',
      price: 1199.99,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=iPhone+15+Pro',
      images: [
        { url: 'https://via.placeholder.com/600x600.png?text=iPhone+15+Pro+View+1' },
        { url: 'https://via.placeholder.com/600x600.png?text=iPhone+15+Pro+View+2' },
      ],
      category: { id: 'smartphones', name: 'Smartphones', parentId: 'electronics' },
      categoryId: 'smartphones',
      brand: 'Apple',
      stockQuantity: 150,
      rating: 4.8,
      reviews: [
        { id: 'r1p1', productId: '1', userId: 'u1', userName: 'TechReviewer', rating: 5, comment: 'Amazing device!', createdAt: new Date('2024-01-10T10:00:00Z') }
      ],
      featured: true,
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-05T10:00:00Z'),
      keyFeatures: ['A17 Bionic Chip', 'Pro Camera System', 'ProMotion Display'],
      freeShipping: true,
      availabilityStatus: 'in-stock',
    },
    {
      id: '2',
      name: 'MacBook Pro 16-inch',
      description: 'The most powerful MacBook Pro ever with M3 Max chip.',
      price: 2499.00,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=MacBook+Pro+16',
      images: [
        { url: 'https://via.placeholder.com/600x600.png?text=MacBook+Pro+16+View+1' },
      ],
      category: { id: 'laptops', name: 'Laptops', parentId: 'electronics' },
      categoryId: 'laptops',
      brand: 'Apple',
      stockQuantity: 75,
      rating: 4.9,
      reviews: [],
      featured: true,
      createdAt: new Date('2023-11-15T10:00:00Z'),
      updatedAt: new Date('2023-12-01T10:00:00Z'),
      keyFeatures: ['M3 Max Chip', 'Liquid Retina XDR Display', '1080p FaceTime HD Camera'],
      availabilityStatus: 'in-stock',
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5 Headphones',
      description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
      price: 348.00,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Sony+XM5',
      category: { id: 'audio', name: 'Audio', parentId: 'electronics' },
      categoryId: 'audio',
      brand: 'Sony',
      stockQuantity: 200,
      rating: 4.7,
      reviews: [],
      featured: false,
      createdAt: new Date('2023-05-01T10:00:00Z'),
      updatedAt: new Date('2023-05-01T10:00:00Z'),
      keyFeatures: ['Noise Canceling', '30-hour battery life', 'Multipoint connection'],
      fastDelivery: true,
      availabilityStatus: 'in-stock',
    },
    // Add more diverse mock products here, ensuring they conform to the Product model
     {
      id: '4', name: 'Men\'s Casual Shirt', description: 'Comfortable cotton casual shirt.', price: 45.00, 
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Casual+Shirt', 
      category: { id: 'mens-clothing', name: 'Men\'s Clothing', parentId: 'fashion'}, 
      categoryId: 'mens-clothing',
      stockQuantity: 120, rating: 4.0, brand: 'ClothCo', 
      createdAt: new Date('2023-03-01T10:00:00Z'), regularPrice: 50.00,
      availabilityStatus: 'in-stock',
    },
    {
      id: '5', name: 'Running Shoes', description: 'Lightweight running shoes for athletes.', price: 89.99, 
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Running+Shoes', 
      category: { id: 'footwear', name: 'Footwear', parentId: 'fashion'}, 
      categoryId: 'footwear',
      stockQuantity: 75, rating: 4.6, brand: 'FitGear', 
      createdAt: new Date('2023-02-10T10:00:00Z'),
      availabilityStatus: 'in-stock',
    },
    {
      id: '6', name: 'Coffee Maker Deluxe', description: 'Drip coffee maker with timer and grinder.', price: 79.95, 
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Coffee+Maker', 
      category: { id: 'kitchen-appliances', name: 'Kitchen Appliances', parentId: 'home-garden'}, 
      categoryId: 'kitchen-appliances',
      stockQuantity: 60, rating: 4.2, brand: 'HomeEase', 
      createdAt: new Date('2023-04-05T10:00:00Z'), keyFeatures: ['Programmable', 'Built-in Grinder'],
      availabilityStatus: 'low-stock',
    }
  ];

  private categories: Category[] = [
    { id: 'electronics', name: 'Electronics', description: 'Gadgets and devices', image: 'https://via.placeholder.com/300x200.png?text=Electronics', featured: true },
    { id: 'smartphones', name: 'Smartphones', parentId: 'electronics', image: 'https://via.placeholder.com/300x200.png?text=Smartphones' },
    { id: 'laptops', name: 'Laptops', parentId: 'electronics', image: 'https://via.placeholder.com/300x200.png?text=Laptops' },
    { id: 'audio', name: 'Audio', parentId: 'electronics', image: 'https://via.placeholder.com/300x200.png?text=Audio' },
    { id: 'fashion', name: 'Fashion', description: 'Apparel and accessories', image: 'https://via.placeholder.com/300x200.png?text=Fashion', featured: true },
    { id: 'mens-clothing', name: 'Men\'s Clothing', parentId: 'fashion', image: 'https://via.placeholder.com/300x200.png?text=Men%27s+Clothing' },
    { id: 'womens-clothing', name: 'Women\'s Clothing', parentId: 'fashion', image: 'https://via.placeholder.com/300x200.png?text=Women%27s+Clothing' },
    { id: 'footwear', name: 'Footwear', parentId: 'fashion', image: 'https://via.placeholder.com/300x200.png?text=Footwear' },
    { id: 'home-garden', name: 'Home & Garden', description: 'Items for your home', image: 'https://via.placeholder.com/300x200.png?text=Home+Garden' },
    { id: 'kitchen-appliances', name: 'Kitchen Appliances', parentId: 'home-garden', image: 'https://via.placeholder.com/300x200.png?text=Kitchen' },
  ];

  private reviews: Review[] = [
    { id: 'r1p1', productId: '1', userId: 'user123', userName: 'Jane D.', rating: 5, comment: 'Absolutely love this phone!', createdAt: new Date('2024-01-15T14:30:00Z') },
    { id: 'r2p1', productId: '1', userId: 'user456', userName: 'John S.', rating: 4, comment: 'Great features, a bit pricey.', createdAt: new Date('2024-01-17T09:15:00Z') },
    { id: 'r1p2', productId: '2', userId: 'user789', userName: 'Alice B.', rating: 5, comment: 'Perfect for my development work.', createdAt: new Date('2023-11-20T11:00:00Z') },
  ];

  constructor() {}

  getProducts(options: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    category?: string; // categoryId or categoryName
    subcategory?: string; // subcategoryName
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  } = {}): Observable<PaginatedResponse<Product>> {
    let filteredProducts = [...this.products];

    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brand?.toLowerCase().includes(searchTerm) ||
        p.category?.name.toLowerCase().includes(searchTerm)
      );
    }

    if (options.category) {
      const categoryFilter = options.category.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.category?.id.toLowerCase() === categoryFilter ||
        p.category?.name.toLowerCase() === categoryFilter ||
        p.categoryId?.toLowerCase() === categoryFilter
      );
    }
    
    if (options.subcategory) {
        const subCategoryTerm = options.subcategory.toLowerCase();
        // This is a simplified subcategory filter. 
        // A real app might have subcategories explicitly linked or as part of a category path.
        filteredProducts = filteredProducts.filter(p => 
           (p.description?.toLowerCase().includes(subCategoryTerm)) || 
           (p.name?.toLowerCase().includes(subCategoryTerm)) ||
           (p.keyFeatures && p.keyFeatures.some(kf => kf.toLowerCase().includes(subCategoryTerm))) ||
           (p.category?.name.toLowerCase().includes(subCategoryTerm)) // if subcat is part of main cat name
       );
    }


    if (options.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= options.minPrice!);
    }
    if (options.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= options.maxPrice!);
    }

    if (options.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        if (options.sortBy === 'price') {
          aValue = a.price;
          bValue = b.price;
        } else if (options.sortBy === 'name') {
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        } else if (options.sortBy === 'createdAt' && a.createdAt && b.createdAt) {
          aValue = a.createdAt.getTime();
          bValue = b.createdAt.getTime();
        } else if (options.sortBy === 'rating' && a.rating !== undefined && b.rating !== undefined) {
            aValue = a.rating;
            bValue = b.rating;
        } else {
          return 0; // No sort or unknown field
        }

        if (aValue < bValue) return options.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return options.order === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const page = options.page || 1;
    const limit = options.limit || 10;
    const totalCount = filteredProducts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const items = filteredProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalCount / limit);

    const response: PaginatedResponse<Product> = {
      items,
      totalCount,
      page,
      limit,
      totalPages
    };
    return of(response).pipe(delay(300)); // Simulate network delay
  }

  getProductById(id: string): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(100));
    }
    return of(undefined as any).pipe(delay(100)); // Simulate not found
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories).pipe(delay(100));
  }

  getProductReviews(productId: string, page = 1, limit = 5): Observable<{ reviews: Review[]; totalCount: number }> {
    const productReviews = this.reviews.filter(r => r.productId === productId);
    const totalCount = productReviews.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const items = productReviews.slice(startIndex, endIndex);
    
    return of({ reviews: items, totalCount }).pipe(delay(100));
  }
  
  getFeaturedProducts(limit = 8): Observable<Product[]> {
    const featured = this.products.filter(p => p.featured).slice(0, limit);
    return of(featured).pipe(delay(200));
  }
}
