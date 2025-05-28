import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
  lastUpdated: Date;
}

@Component({
  selector: 'app-practical-example',
  template: `
    <div class="example-container">
      <p>
        This example demonstrates a practical application of content projection with a data grid 
        component that allows customized rendering of column headers and cells.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-data-grid [data]="products"&gt;
  &lt;ng-template appDataHeader="name"&gt;Product Name&lt;/ng-template&gt;
  &lt;ng-template appDataCell="name" let-product&gt;
    {{ product.name }}
  &lt;/ng-template&gt;
  
  &lt;ng-template appDataHeader="price"&gt;Price&lt;/ng-template&gt;
  &lt;ng-template appDataCell="price" let-product&gt;
    {{ product.price | currency }}
  &lt;/ng-template&gt;
&lt;/app-data-grid&gt;</pre>
      </div>
      
      <div class="controls">
        <div class="filter-container">
          <label for="category-filter">Filter by Category:</label>
          <select id="category-filter" [(ngModel)]="selectedCategory">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
          </select>
        </div>
        
        <div class="search-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            [(ngModel)]="searchTerm"
            (ngModelChange)="onSearchChange()">
        </div>
      </div>
      
      <app-data-grid 
        [data]="filteredProducts" 
        [pagination]="true"
        [pageSize]="5"
        [currentPage]="currentPage"
        [columnConfig]="columnConfig"
        (pageChange)="onPageChange($event)">
        
        <!-- Column Headers -->
        <ng-template appDataHeader="name">Product Name</ng-template>
        <ng-template appDataHeader="category">Category</ng-template>
        <ng-template appDataHeader="price">Price</ng-template>
        <ng-template appDataHeader="stock">Stock</ng-template>
        <ng-template appDataHeader="rating">Rating</ng-template>
        <ng-template appDataHeader="lastUpdated">Last Updated</ng-template>
        
        <!-- Column Cells -->
        <ng-template appDataCell="name" let-product>
          <div class="product-name">{{ product.name }}</div>
        </ng-template>
        
        <ng-template appDataCell="category" let-product>
          <div class="category-badge">{{ product.category }}</div>
        </ng-template>
        
        <ng-template appDataCell="price" let-product>
          {{ product.price | currency }}
        </ng-template>
        
        <ng-template appDataCell="stock" let-product>
          <span class="stock-indicator" [class.in-stock]="product.inStock" [class.out-of-stock]="!product.inStock">
            {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
          </span>
        </ng-template>
        
        <ng-template appDataCell="rating" let-product>
          <div class="star-rating">
            <div class="stars" [style.width.%]="product.rating * 20">★★★★★</div>
            <div class="stars-background">★★★★★</div>
          </div>
          <span class="rating-text">{{ product.rating }}/5</span>
        </ng-template>
        
        <ng-template appDataCell="lastUpdated" let-product>
          {{ product.lastUpdated | date:'MMM d, yyyy' }}
        </ng-template>
        
        <!-- No Data Template -->
        <div no-data>
          <div class="no-data-content">
            <div class="no-data-icon">🔍</div>
            <h3>No Products Found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        </div>
      </app-data-grid>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
    }
    
    .code-example {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 20px;
      overflow-x: auto;
    }
    
    pre {
      margin: 0;
      white-space: pre-wrap;
    }
    
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 20px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    .filter-container, .search-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    select, input {
      padding: 8px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      min-width: 200px;
    }
    
    .product-name {
      font-weight: 500;
    }
    
    .category-badge {
      display: inline-block;
      padding: 4px 8px;
      background-color: #f0f0f0;
      border-radius: 16px;
      font-size: 12px;
    }
    
    .stock-indicator {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .in-stock {
      background-color: #e8f5e9;
      color: #4caf50;
    }
    
    .out-of-stock {
      background-color: #ffebee;
      color: #f44336;
    }
    
    .star-rating {
      position: relative;
      display: inline-block;
      font-size: 18px;
      line-height: 1;
      vertical-align: middle;
    }
    
    .stars {
      position: absolute;
      top: 0;
      left: 0;
      color: #ffc107;
      overflow: hidden;
    }
    
    .stars-background {
      color: #e0e0e0;
    }
    
    .rating-text {
      margin-left: 8px;
      vertical-align: middle;
      font-size: 14px;
      color: #757575;
    }
    
    .no-data-content {
      padding: 32px;
      text-align: center;
    }
    
    .no-data-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    
    .no-data-content h3 {
      margin-top: 0;
      margin-bottom: 8px;
    }
    
    .no-data-content p {
      margin: 0;
      color: #757575;
    }
  `]
})
export class PracticalExampleComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Premium Laptop',
      category: 'Electronics',
      price: 1299.99,
      inStock: true,
      rating: 4.5,
      lastUpdated: new Date('2023-04-15')
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      inStock: true,
      rating: 4.8,
      lastUpdated: new Date('2023-03-20')
    },
    {
      id: 3,
      name: 'Cotton T-Shirt',
      category: 'Clothing',
      price: 24.99,
      inStock: true,
      rating: 4.2,
      lastUpdated: new Date('2023-05-10')
    },
    {
      id: 4,
      name: 'Stainless Steel Pot Set',
      category: 'Home & Kitchen',
      price: 89.99,
      inStock: false,
      rating: 4.7,
      lastUpdated: new Date('2023-02-28')
    },
    {
      id: 5,
      name: 'Bestselling Novel',
      category: 'Books',
      price: 14.99,
      inStock: true,
      rating: 4.9,
      lastUpdated: new Date('2023-05-05')
    },
    {
      id: 6,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 249.99,
      inStock: true,
      rating: 4.4,
      lastUpdated: new Date('2023-04-02')
    },
    {
      id: 7,
      name: 'Denim Jeans',
      category: 'Clothing',
      price: 59.99,
      inStock: true,
      rating: 4.3,
      lastUpdated: new Date('2023-03-15')
    },
    {
      id: 8,
      name: 'Coffee Maker',
      category: 'Home & Kitchen',
      price: 79.99,
      inStock: false,
      rating: 4.6,
      lastUpdated: new Date('2023-01-20')
    }
  ];
  
  selectedCategory: string = '';
  searchTerm: string = '';
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  
  columnConfig = {
    price: { class: 'numeric' },
    rating: { class: 'centered' }
  };
  
  constructor() {
    this.filteredProducts = [...this.products];
  }
  
  onSearchChange(): void {
    this.filterProducts();
    this.currentPage = 1;
  }
  
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      // Category filter
      if (this.selectedCategory && product.category !== this.selectedCategory) {
        return false;
      }
      
      // Search filter
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    });
  }
  
  onPageChange(event: {page: number, pageSize: number}): void {
    this.currentPage = event.page;
  }
}
