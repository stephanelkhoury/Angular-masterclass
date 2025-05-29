import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  reviewCount?: number; // Add this property
  isNew?: boolean;
  discount?: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  slug?: string; // Add this property
  active?: boolean;
}

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  @Output() search = new EventEmitter<string>();
  @Output() categoryFilter = new EventEmitter<string>();
  @Output() addToCart = new EventEmitter<Product>();
  
  searchControl = new FormControl('');
  
  // Search functionality
  showSearchSuggestions = false;
  searchSuggestions: { text: string; trending?: boolean }[] = [
    { text: 'Wireless Headphones', trending: true },
    { text: 'Gaming Laptop', trending: false },
    { text: 'Smart Phone', trending: true },
    { text: 'Fitness Tracker', trending: false },
    { text: 'Coffee Maker', trending: false }
  ];
  
  // Popular categories for quick access
  popularCategories: { name: string; icon: string; slug: string }[] = [
    { name: 'Electronics', icon: 'fas fa-laptop', slug: 'electronics' },
    { name: 'Fashion', icon: 'fas fa-tshirt', slug: 'fashion' },
    { name: 'Home & Garden', icon: 'fas fa-home', slug: 'home-garden' },
    { name: 'Sports', icon: 'fas fa-dumbbell', slug: 'sports' },
    { name: 'Books', icon: 'fas fa-book', slug: 'books' }
  ];
  
  // Featured products for showcase
  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 234,
      reviewCount: 234, // Add reviewCount
      isNew: true,
      discount: 20
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      category: 'Wearables',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 187,
      reviewCount: 187, // Add reviewCount
      isNew: false
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      price: 459.99,
      originalPrice: 599.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 156,
      reviewCount: 156, // Add reviewCount
      discount: 23
    }
  ];
  
  // Category filters
  categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: 'fas fa-th-large', slug: 'all', active: true },
    { id: 'electronics', name: 'Electronics', icon: 'fas fa-laptop', slug: 'electronics' },
    { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt', slug: 'fashion' },
    { id: 'home', name: 'Home & Garden', icon: 'fas fa-home', slug: 'home-garden' },
    { id: 'sports', name: 'Sports', icon: 'fas fa-dumbbell', slug: 'sports' },
    { id: 'books', name: 'Books', icon: 'fas fa-book', slug: 'books' }
  ];
  
  // Popular search tags
  popularTags: string[] = [
    'Wireless Headphones',
    'Smartphones',
    'Laptops',
    'Gaming',
    'Home Decor',
    'Fitness Equipment'
  ];
  
  // Trust indicators
  trustIndicators = [
    {
      icon: 'fas fa-shipping-fast',
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50. Fast and reliable shipping worldwide.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption. Your data is always protected.'
    },
    {
      icon: 'fas fa-undo',
      title: 'Easy Returns',
      description: '30-day hassle-free returns. No questions asked return policy.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support via chat, email, and phone.'
    }
  ];

  constructor() {}

  onSearch(): void {
    const searchTerm = this.searchControl.value || '';
    if (searchTerm.trim()) {
      this.search.emit(searchTerm);
      this.searchControl.setValue('');
    }
  }

  onCategoryFilter(categoryId: string): void {
    // Update active category
    this.categories.forEach(cat => cat.active = cat.id === categoryId);
    this.categoryFilter.emit(categoryId);
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

  onPopularTagClick(tag: string): void {
    this.searchControl.setValue(tag);
    this.onSearch();
  }

  // Helper methods for templates
  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index < Math.floor(rating) ? 1 : 0);
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  calculateDiscount(originalPrice: number, currentPrice: number): number {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  }

  // Search suggestion methods
  hideSearchSuggestions(): void {
    setTimeout(() => {
      this.showSearchSuggestions = false;
    }, 150); // Delay to allow click events
  }

  selectSuggestion(suggestion: { text: string; trending?: boolean }): void {
    this.searchControl.setValue(suggestion.text);
    this.showSearchSuggestions = false;
    this.onSearch();
  }

  searchByCategory(category: { name: string; icon: string; slug: string }): void {
    this.categoryFilter.emit(category.slug);
  }

  selectCategory(categorySlug: string | undefined): void {
    if (categorySlug) {
      this.onCategoryFilter(categorySlug);
    }
  }

  scrollToCategories(): void {
    // Scroll to categories section or navigate to categories page
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
