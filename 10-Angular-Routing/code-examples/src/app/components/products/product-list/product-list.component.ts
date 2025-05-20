// components/products/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  searchTerm: string = '';
  currentPage: number = 1;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    // Get query params from the URL
    this.route.queryParamMap.subscribe(params => {
      this.currentPage = Number(params.get('page')) || 1;
      this.selectedCategory = params.get('category');
      this.searchTerm = params.get('search') || '';
      
      this.loadProducts();
    });
  }
  
  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      
      // Extract unique categories
      this.categories = [...new Set(products.map(p => p.category))];
      
      // Apply filters
      this.applyFilters();
    });
  }
  
  filterByCategory(category: string | null): void {
    this.selectedCategory = category;
    
    // Update the URL query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 
        category: category,
        page: 1 // Reset to first page when changing category
      },
      queryParamsHandling: 'merge'
    });
    
    this.applyFilters();
  }
  
  search(): void {
    // Update the URL query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 
        search: this.searchTerm,
        page: 1 // Reset to first page when searching
      },
      queryParamsHandling: 'merge'
    });
    
    this.applyFilters();
  }
  
  private applyFilters(): void {
    let filtered = [...this.products];
    
    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }
    
    // Apply search filter
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }
    
    this.filteredProducts = filtered;
  }
}
