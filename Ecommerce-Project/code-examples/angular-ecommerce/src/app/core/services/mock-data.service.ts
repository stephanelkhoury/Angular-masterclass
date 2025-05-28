import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { Product, Category, Review } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  private categories: Category[] = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Latest electronic devices and gadgets',
      image: 'assets/images/categories/electronics.jpg',
      featured: true
    },
    {
      id: 'smartphones',
      name: 'Smartphones',
      description: 'Latest smartphones and mobile devices',
      image: 'assets/images/categories/smartphones.jpg',
      parentId: 'electronics',
      featured: true
    },
    {
      id: 'laptops',
      name: 'Laptops',
      description: 'Powerful laptops for work and gaming',
      image: 'assets/images/categories/laptops.jpg',
      parentId: 'electronics',
      featured: true
    },
    {
      id: 'fashion',
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      image: 'assets/images/categories/fashion.jpg',
      featured: true
    },
    {
      id: 'mens-clothing',
      name: "Men's Clothing",
      description: 'Stylish clothing for men',
      image: 'assets/images/categories/mens-clothing.jpg',
      parentId: 'fashion'
    },
    {
      id: 'womens-clothing',
      name: "Women's Clothing",
      description: 'Fashionable clothing for women',
      image: 'assets/images/categories/womens-clothing.jpg',
      parentId: 'fashion'
    },
    {
      id: 'home-kitchen',
      name: 'Home & Kitchen',
      description: 'Everything for your home and kitchen',
      image: 'assets/images/categories/home-kitchen.jpg',
      featured: true
    },
    {
      id: 'books',
      name: 'Books',
      description: 'Books across all genres',
      image: 'assets/images/categories/books.jpg'
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      description: 'Sports equipment and outdoor gear',
      image: 'assets/images/categories/sports.jpg'
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      description: 'Beauty products and personal care items',
      image: 'assets/images/categories/beauty.jpg'
    }
  ];

  private products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      description: 'The ultimate iPhone with the most advanced Pro camera system ever.',
      longDescription: 'Experience the power of the A17 Pro chip with groundbreaking performance and efficiency. The iPhone 15 Pro Max features a stunning Super Retina XDR display, advanced camera system with 5x optical zoom, and all-day battery life. Built with aerospace-grade titanium for incredible durability and a lighter feel.',
      price: 1199.00,
      regularPrice: 1299.00,
      discountPrice: 1199.00,
      stock: 25,
      stockQuantity: 25,
      rating: 4.8,
      reviewCount: 1247,
      images: [
        'assets/images/products/iphone-15-pro-max-1.jpg',
        'assets/images/products/iphone-15-pro-max-2.jpg',
        'assets/images/products/iphone-15-pro-max-3.jpg'
      ],
      imageUrl: 'assets/images/products/iphone-15-pro-max-1.jpg',
      categoryId: 'smartphones',
      category: { id: 'smartphones', name: 'Smartphones', description: 'Mobile phones and smartphones', image: 'assets/images/categories/smartphones.jpg' },
      sku: 'IPH15PM-256-NT',
      brand: 'Apple',
      keyFeatures: [
        'A17 Pro chip with 6-core GPU',
        '256GB storage capacity',
        '5x optical zoom camera',
        'All-day battery life'
      ],
      featured: true,
      specifications: {
        'Display': '6.7-inch Super Retina XDR',
        'Chip': 'A17 Pro',
        'Storage': '256GB',
        'Camera': 'Pro camera system with 5x optical zoom',
        'Battery': 'Up to 29 hours video playback',
        'Material': 'Titanium'
      },
      tags: ['smartphone', 'apple', 'premium', 'camera', 'titanium'],
      freeShipping: true,
      fastDelivery: true,
      createdAt: '2024-09-15T10:00:00Z',
      updatedAt: '2024-12-01T15:30:00Z'
    },
    {
      id: '2',
      name: 'MacBook Pro 16" M3 Max',
      description: 'Supercharged for pros with the most powerful MacBook Pro ever.',
      longDescription: 'Built for professionals who push the limits of what\'s possible. With the M3 Max chip, stunning Liquid Retina XDR display, and advanced connectivity including Thunderbolt 4 and HDMI, this MacBook Pro delivers unprecedented performance for video editing, 3D rendering, and demanding workflows.',
      price: 3999.00,
      regularPrice: 4299.00,
      stock: 12,
      stockQuantity: 12,
      rating: 4.9,
      reviewCount: 892,
      images: [
        'assets/images/products/macbook-pro-16-1.jpg',
        'assets/images/products/macbook-pro-16-2.jpg',
        'assets/images/products/macbook-pro-16-3.jpg',
        'assets/images/products/macbook-pro-16-4.jpg'
      ],
      imageUrl: 'assets/images/products/macbook-pro-16-1.jpg',
      categoryId: 'laptops',
      category: { id: 'laptops', name: 'Laptops', description: 'Portable computers and notebooks', image: 'assets/images/categories/laptops.jpg' },
      sku: 'MBP16-M3MAX-1TB',
      brand: 'Apple',
      keyFeatures: [
        'M3 Max chip with 16-core CPU',
        '48GB unified memory',
        '1TB SSD storage',
        '16.2" Liquid Retina XDR display'
      ],
      featured: true,
      specifications: {
        'Chip': 'Apple M3 Max',
        'Memory': '48GB unified memory',
        'Storage': '1TB SSD',
        'Display': '16.2-inch Liquid Retina XDR',
        'Graphics': '40-core GPU',
        'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
      },
      tags: ['laptop', 'apple', 'professional', 'creative', 'm3'],
      freeShipping: true,
      fastDelivery: true,
      createdAt: '2024-11-01T10:00:00Z',
      updatedAt: '2024-12-01T15:30:00Z'
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      description: 'Industry-leading noise canceling with exceptional sound quality.',
      longDescription: 'Experience unrivaled noise canceling performance with two processors controlling 8 microphones. The WH-1000XM5 offers premium comfort with soft leather and excellent call quality with precise voice pickup. Enjoy up to 30 hours of battery life with quick charge capability.',
      price: 399,
      stock: 45,
      stockQuantity: 45,
      rating: 4.7,
      reviewCount: 2156,
      images: [
        'assets/images/products/sony-wh1000xm5-1.jpg',
        'assets/images/products/sony-wh1000xm5-2.jpg',
        'assets/images/products/sony-wh1000xm5-3.jpg'
      ],
      imageUrl: 'assets/images/products/sony-wh1000xm5-1.jpg',
      categoryId: 'electronics',
      category: { id: 'electronics', name: 'Electronics', description: 'Electronic devices and gadgets', image: 'assets/images/categories/electronics.jpg' },
      sku: 'SONY-WH1000XM5-BLK',
      brand: 'Sony',
      keyFeatures: [
        'Industry-leading noise canceling',
        '30-hour battery life',
        'Multipoint connection',
        'Speak-to-chat technology'
      ],
      specifications: {
        'Driver': '30mm',
        'Frequency Response': '4Hz-40kHz',
        'Battery Life': 'Up to 30 hours',
        'Charging': 'USB-C quick charge',
        'Weight': '250g',
        'Connectivity': 'Bluetooth 5.2, NFC'
      },
      tags: ['headphones', 'wireless', 'noise-canceling', 'sony', 'premium'],
      freeShipping: true,
      fastDelivery: true,
      createdAt: '2024-05-15T10:00:00Z',
      updatedAt: '2024-11-20T15:30:00Z'
    },
    {
      id: '4',
      name: 'Samsung 55" OLED 4K Smart TV',
      description: 'Stunning 4K OLED display with vibrant colors and deep blacks.',
      longDescription: 'Immerse yourself in brilliant picture quality with Quantum Dot OLED technology. This smart TV features Neural Quantum Processor 4K for upscaling, Dolby Atmos sound, and a comprehensive smart platform with all your favorite streaming apps. Gaming features include 4K@120Hz and Variable Refresh Rate.',
      price: 1799,
      regularPrice: 2199,
      stock: 18,
      stockQuantity: 18,
      rating: 4.6,
      reviewCount: 743,
      images: [
        'assets/images/products/samsung-oled-tv-1.jpg',
        'assets/images/products/samsung-oled-tv-2.jpg',
        'assets/images/products/samsung-oled-tv-3.jpg'
      ],
      imageUrl: 'assets/images/products/samsung-oled-tv-1.jpg',
      categoryId: 'electronics',
      category: { id: 'electronics', name: 'Electronics', description: 'Electronic devices and gadgets', image: 'assets/images/categories/electronics.jpg' },
      sku: 'SAM-OLED55-4K',
      brand: 'Samsung',
      keyFeatures: [
        'Quantum Dot OLED technology',
        'Neural Quantum Processor 4K',
        'Dolby Atmos sound',
        '4K@120Hz gaming'
      ],
      specifications: {
        'Screen Size': '55 inches',
        'Resolution': '4K Ultra HD (3840 x 2160)',
        'Display Technology': 'Quantum Dot OLED',
        'HDR': 'HDR10+, Dolby Vision',
        'Refresh Rate': '120Hz',
        'Smart Platform': 'Tizen OS'
      },
      tags: ['tv', 'oled', '4k', 'smart-tv', 'samsung', 'gaming'],
      freeShipping: true,
      createdAt: '2024-08-10T10:00:00Z',
      updatedAt: '2024-11-25T15:30:00Z'
    },
    {
      id: '5',
      name: 'Nike Air Max 270 Running Shoes',
      description: 'Comfortable running shoes with Max Air cushioning technology.',
      longDescription: 'Step into comfort with the Nike Air Max 270. Featuring the largest heel Air unit yet, these shoes deliver exceptional all-day comfort. The engineered mesh upper provides breathability, while the rubber outsole offers durable traction for any surface.',
      price: 150,
      stock: 67,
      stockQuantity: 67,
      rating: 4.4,
      reviewCount: 1824,
      images: [
        'assets/images/products/nike-air-max-270-1.jpg',
        'assets/images/products/nike-air-max-270-2.jpg',
        'assets/images/products/nike-air-max-270-3.jpg'
      ],
      imageUrl: 'assets/images/products/nike-air-max-270-1.jpg',
      categoryId: 'sports',
      category: { id: 'sports', name: 'Sports & Outdoors', description: 'Sports equipment and outdoor gear', image: 'assets/images/categories/sports.jpg' },
      sku: 'NIKE-AM270-BLK-10',
      brand: 'Nike',
      keyFeatures: [
        'Max Air heel unit',
        'Engineered mesh upper',
        'Rubber outsole',
        'All-day comfort'
      ],
      specifications: {
        'Upper Material': 'Engineered mesh',
        'Midsole': 'Foam with Max Air unit',
        'Outsole': 'Rubber',
        'Closure': 'Lace-up',
        'Weight': '12.5 oz',
        'Support Type': 'Neutral'
      },
      tags: ['shoes', 'running', 'nike', 'air-max', 'sports', 'comfort'],
      freeShipping: true,
      createdAt: '2024-06-20T10:00:00Z',
      updatedAt: '2024-10-15T15:30:00Z'
    },
    {
      id: '6',
      name: 'KitchenAid Stand Mixer',
      description: 'Professional-grade stand mixer for all your baking needs.',
      longDescription: 'The iconic KitchenAid Stand Mixer combines form and function with a powerful motor that can handle everything from whipping cream to kneading bread dough. Includes multiple attachments and offers over 10 optional attachments to expand your culinary possibilities.',
      price: 449,
      regularPrice: 529,
      stock: 23,
      stockQuantity: 23,
      rating: 4.8,
      reviewCount: 3421,
      images: [
        'assets/images/products/kitchenaid-mixer-1.jpg',
        'assets/images/products/kitchenaid-mixer-2.jpg',
        'assets/images/products/kitchenaid-mixer-3.jpg'
      ],
      imageUrl: 'assets/images/products/kitchenaid-mixer-1.jpg',
      categoryId: 'home-kitchen',
      category: { id: 'home-kitchen', name: 'Home & Kitchen', description: 'Home appliances and kitchen essentials', image: 'assets/images/categories/home-kitchen.jpg' },
      sku: 'KA-SM-RED-5QT',
      brand: 'KitchenAid',
      keyFeatures: [
        '5-quart stainless steel bowl',
        '10 mixing speeds',
        'Tilt-head design',
        'Multiple attachments included'
      ],
      featured: true,
      specifications: {
        'Bowl Capacity': '5 quarts',
        'Motor': '325 watts',
        'Speeds': '10',
        'Material': 'Die-cast metal',
        'Attachments': 'Flat beater, dough hook, wire whip',
        'Dimensions': '14.1" x 8.7" x 13.9"'
      },
      tags: ['kitchen', 'mixer', 'baking', 'kitchenaid', 'appliance'],
      freeShipping: true,
      createdAt: '2024-03-12T10:00:00Z',
      updatedAt: '2024-11-30T15:30:00Z'
    },
    {
      id: '7',
      name: "Levi's 501 Original Jeans",
      description: 'Classic straight-leg jeans that never go out of style.',
      longDescription: "The original blue jean since 1873. Levi's 501 Original jeans are a blank canvas for self-expression. Made with premium denim and featuring the classic straight leg fit, button fly, and signature styling that has made them an icon for generations.",
      price: 89,
      stock: 156,
      stockQuantity: 156,
      rating: 4.5,
      reviewCount: 5672,
      images: [
        'assets/images/products/levis-501-1.jpg',
        'assets/images/products/levis-501-2.jpg',
        'assets/images/products/levis-501-3.jpg'
      ],
      imageUrl: 'assets/images/products/levis-501-1.jpg',
      categoryId: 'mens-clothing',
      category: { id: 'mens-clothing', name: 'Men\'s Clothing', description: 'Fashion and apparel for men', image: 'assets/images/categories/mens-clothing.jpg' },
      sku: 'LEVIS-501-IND-32x32',
      brand: "Levi's",
      keyFeatures: [
        'Original straight leg fit',
        'Button fly closure',
        '100% cotton denim',
        'Classic 5-pocket styling'
      ],
      specifications: {
        'Material': '100% Cotton',
        'Fit': 'Straight leg',
        'Rise': 'Mid rise',
        'Closure': 'Button fly',
        'Care': 'Machine wash',
        'Origin': 'Made in USA'
      },
      tags: ['jeans', 'denim', 'levis', 'mens', 'clothing', 'classic'],
      freeShipping: true,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-09-20T15:30:00Z'
    },
    {
      id: '8',
      name: 'Instant Pot Duo 7-in-1 Pressure Cooker',
      description: 'Multi-functional electric pressure cooker for faster, easier cooking.',
      longDescription: 'The Instant Pot Duo combines 7 appliances in one: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. With smart programming and safety features, it makes cooking meals 70% faster while preserving nutrients and flavors.',
      price: 99,
      regularPrice: 129,
      stock: 89,
      stockQuantity: 89,
      rating: 4.7,
      reviewCount: 12847,
      images: [
        'assets/images/products/instant-pot-duo-1.jpg',
        'assets/images/products/instant-pot-duo-2.jpg',
        'assets/images/products/instant-pot-duo-3.jpg'
      ],
      imageUrl: 'assets/images/products/instant-pot-duo-1.jpg',
      categoryId: 'home-kitchen',
      category: { id: 'home-kitchen', name: 'Home & Kitchen', description: 'Home appliances and kitchen essentials', image: 'assets/images/categories/home-kitchen.jpg' },
      sku: 'IP-DUO-6QT-7IN1',
      brand: 'Instant Pot',
      keyFeatures: [
        '7 appliances in 1',
        '14 smart programs',
        '6-quart capacity',
        '10+ safety features'
      ],
      featured: true,
      specifications: {
        'Capacity': '6 quarts',
        'Functions': '7-in-1 (Pressure Cook, Slow Cook, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer)',
        'Programs': '14 smart programs',
        'Material': 'Stainless steel inner pot',
        'Safety Features': '10+',
        'Dimensions': '13.43" x 12.6" x 12.6"'
      },
      tags: ['pressure-cooker', 'kitchen', 'instant-pot', 'multi-cooker', 'appliance'],
      freeShipping: true,
      fastDelivery: true,
      createdAt: '2024-02-28T10:00:00Z',
      updatedAt: '2024-11-15T15:30:00Z'
    },
    {
      id: '9',
      name: 'The Silent Patient - Hardcover',
      description: 'Bestselling psychological thriller by Alex Michaelides.',
      longDescription: 'A woman\'s act of violence against her husband and her refusal to speak sends shockwaves through London. The silent patient is a gripping psychological thriller that will keep you guessing until the final page. Winner of multiple literary awards.',
      price: 16.99,
      stock: 234,
      stockQuantity: 234,
      rating: 4.3,
      reviewCount: 18293,
      images: [
        'assets/images/products/silent-patient-book-1.jpg',
        'assets/images/products/silent-patient-book-2.jpg'
      ],
      imageUrl: 'assets/images/products/silent-patient-book-1.jpg',
      categoryId: 'books',
      category: { id: 'books', name: 'Books', description: 'Books across all genres', image: 'assets/images/categories/books.jpg' },
      sku: 'BOOK-SP-HC-ENG',
      keyFeatures: [
        'Bestselling thriller',
        'Hardcover edition',
        '368 pages',
        'Award-winning author'
      ],
      specifications: {
        'Format': 'Hardcover',
        'Pages': '368',
        'Publisher': 'Celadon Books',
        'Language': 'English',
        'ISBN': '978-1250301697',
        'Dimensions': '6.4" x 1.4" x 9.6"'
      },
      tags: ['book', 'thriller', 'psychological', 'bestseller', 'fiction'],
      freeShipping: true,
      createdAt: '2024-01-05T10:00:00Z',
      updatedAt: '2024-08-10T15:30:00Z'
    },
    {
      id: '10',
      name: 'Fenty Beauty Pro Filter Foundation',
      description: 'Soft-matte, buildable foundation with medium to full coverage.',
      longDescription: 'Fenty Beauty\'s Pro Filter Foundation provides a smooth, poreless-looking finish that\'s so stunning, it\'s like hitting the soft-focus filter on your complexion but IRL. Available in 50 shades, this climate-adaptive, soft-matte foundation is buildable from medium to full coverage.',
      price: 39,
      stock: 78,
      stockQuantity: 78,
      rating: 4.6,
      reviewCount: 4821,
      images: [
        'assets/images/products/fenty-foundation-1.jpg',
        'assets/images/products/fenty-foundation-2.jpg',
        'assets/images/products/fenty-foundation-3.jpg'
      ],
      imageUrl: 'assets/images/products/fenty-foundation-1.jpg',
      categoryId: 'beauty',
      category: { id: 'beauty', name: 'Beauty & Personal Care', description: 'Beauty products and personal care items', image: 'assets/images/categories/beauty.jpg' },
      sku: 'FENTY-PF-150',
      brand: 'Fenty Beauty',
      keyFeatures: [
        '50 inclusive shades',
        'Soft-matte finish',
        'Buildable coverage',
        'Climate-adaptive formula'
      ],
      specifications: {
        'Coverage': 'Medium to full',
        'Finish': 'Soft-matte',
        'Size': '32ml / 1.08 fl oz',
        'Skin Type': 'All skin types',
        'Key Ingredients': 'Climate-adaptive technology',
        'Cruelty-free': 'Yes'
      },
      tags: ['foundation', 'makeup', 'fenty', 'beauty', 'inclusive', 'coverage'],
      freeShipping: true,
      createdAt: '2024-04-18T10:00:00Z',
      updatedAt: '2024-10-22T15:30:00Z'
    }
  ];

  private reviews: Review[] = [
    {
      id: 'r1',
      productId: '1',
      userId: 'u1',
      userName: 'Sarah Johnson',
      userAvatar: 'assets/images/users/sarah.jpg',
      rating: 5,
      title: 'Amazing camera quality!',
      comment: 'The camera on this iPhone is absolutely incredible. The 5x optical zoom and night mode work perfectly.',
      createdAt: '2024-11-15T14:30:00Z',
      updatedAt: '2024-11-15T14:30:00Z'
    },
    {
      id: 'r2',
      productId: '1',
      userId: 'u2',
      userName: 'Mike Chen',
      userAvatar: 'assets/images/users/mike.jpg',
      rating: 4,
      title: 'Great phone, expensive but worth it',
      comment: 'Love the titanium build and the performance is top-notch. Battery life could be better.',
      createdAt: '2024-11-10T09:15:00Z',
      updatedAt: '2024-11-10T09:15:00Z'
    }
  ];

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
    
    let filteredProducts = [...this.products];
    
    // Apply filters
    if (options.category) {
      filteredProducts = filteredProducts.filter(p => 
        p.categoryId === options.category || p.category.name.toLowerCase().includes(options.category!.toLowerCase())
      );
    }
    
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brand?.toLowerCase().includes(searchTerm)
      );
    }
    
    if (options.minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= options.minPrice!);
    }
    
    if (options.maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= options.maxPrice!);
    }
    
    // Apply sorting
    if (options.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue, bValue;
        
        switch (options.sortBy) {
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'name':
            aValue = a.name;
            bValue = b.name;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'created':
            aValue = new Date(a.createdAt).getTime();
            bValue = new Date(b.createdAt).getTime();
            break;
          default:
            return 0;
        }
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return options.order === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        }
        
        return options.order === 'desc' ? (bValue as number) - (aValue as number) : (aValue as number) - (bValue as number);
      });
    }
    
    const totalCount = filteredProducts.length;
    const page = options.page || 1;
    const limit = options.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return of({
      products: paginatedProducts,
      totalCount,
      page,
      limit
    }).pipe(delay(500)); // Simulate network delay
  }
  
  getProductById(id: string): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return of(product).pipe(delay(300));
  }
  
  getCategories(): Observable<Category[]> {
    return of(this.categories).pipe(delay(200));
  }
  
  getFeaturedProducts(limit = 8): Observable<Product[]> {
    const featured = this.products.filter(p => p.featured).slice(0, limit);
    return of(featured).pipe(delay(300));
  }
  
  getProductReviews(productId: string, page = 1, limit = 10): Observable<{ reviews: Review[]; totalCount: number }> {
    const productReviews = this.reviews.filter(r => r.productId === productId);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedReviews = productReviews.slice(startIndex, endIndex);
    
    return of({
      reviews: paginatedReviews,
      totalCount: productReviews.length
    }).pipe(delay(400));
  }
  
  getRelatedProducts(productId: string, limit = 4): Observable<Product[]> {
    const product = this.products.find(p => p.id === productId);
    if (!product) {
      return of([]);
    }
    
    const related = this.products
      .filter(p => p.id !== productId && p.categoryId === product.categoryId)
      .slice(0, limit);
      
    return of(related).pipe(delay(300));
  }
}
