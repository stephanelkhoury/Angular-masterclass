import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-products',
  template: `
    <div class="products-container">
      <h2 i18n="@@productsTitle">{{ 'PRODUCTS.TITLE' | translate }}</h2>
      <p i18n="@@productsDescription">{{ 'PRODUCTS.DESCRIPTION' | translate }}</p>
      
      <div class="filter-section mb-4">
        <label for="category-filter" i18n="@@filterByCategory">{{ 'PRODUCTS.FILTER_BY_CATEGORY' | translate }}:</label>
        <select id="category-filter" class="form-select" [(ngModel)]="selectedCategory">
          <option value="all" i18n="@@allCategories">{{ 'PRODUCTS.ALL_CATEGORIES' | translate }}</option>
          <option *ngFor="let category of categories" [value]="category">
            {{ 'PRODUCTS.CATEGORIES.' + category.toUpperCase() | translate }}
          </option>
        </select>
      </div>
      
      <div class="row">
        <div *ngFor="let product of filteredProducts" class="col-md-4 mb-4">
          <div class="card">
            <img [src]="product.imageUrl" class="card-img-top" [alt]="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">
                <strong i18n="@@productPrice">{{ 'PRODUCTS.PRICE' | translate }}:</strong> 
                {{ product.price | currency:'USD':'symbol':'1.2-2' }}
              </p>
              <p class="card-text">
                <strong i18n="@@productCategory">{{ 'PRODUCTS.CATEGORY' | translate }}:</strong>
                {{ 'PRODUCTS.CATEGORIES.' + product.category.toUpperCase() | translate }}
              </p>
              <button class="btn btn-primary" i18n="@@addToCart">
                {{ 'PRODUCTS.ADD_TO_CART' | translate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .products-container {
      padding: 20px;
    }
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
  `]
})
export class ProductsComponent {
  selectedCategory = 'all';
  
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'High performance laptop with 16GB RAM and 512GB SSD.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Laptop',
      category: 'electronics'
    },
    {
      id: 2,
      name: 'Coffee Maker',
      price: 89.95,
      description: 'Premium coffee maker with built-in grinder.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
      category: 'home'
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 129.50,
      description: 'Comfortable running shoes with excellent support.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Running+Shoes',
      category: 'clothing'
    },
    {
      id: 4,
      name: 'Smartphone',
      price: 799.00,
      description: 'Latest smartphone with advanced camera system.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Smartphone',
      category: 'electronics'
    },
    {
      id: 5,
      name: 'Desk Chair',
      price: 249.99,
      description: 'Ergonomic desk chair for long work hours.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Desk+Chair',
      category: 'home'
    },
    {
      id: 6,
      name: 'Winter Jacket',
      price: 179.95,
      description: 'Warm winter jacket for extreme cold conditions.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Winter+Jacket',
      category: 'clothing'
    }
  ];
  
  get categories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
  
  get filteredProducts(): Product[] {
    return this.selectedCategory === 'all'
      ? this.products
      : this.products.filter(product => product.category === this.selectedCategory);
  }
  
  constructor(private translate: TranslateService) {}
}
