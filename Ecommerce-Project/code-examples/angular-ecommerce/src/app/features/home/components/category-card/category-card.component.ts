import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-card',
  template: `
    <div class="category-card" [style.background-image]="'url(' + category.imageUrl + ')'" (click)="onClick()">
      <div class="category-overlay">
        <h3>{{ category.name }}</h3>
        <span class="product-count">{{ category.productCount || 0 }} Products</span>
      </div>
    </div>
  `,
  styles: [`
    .category-card {
      position: relative;
      height: 180px;
      border-radius: 8px;
      background-size: cover;
      background-position: center;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .category-card:hover {
      transform: translateY(-5px);
    }
    
    .category-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 15px;
      background: linear-gradient(transparent, rgba(0,0,0,0.7));
      color: white;
      text-align: center;
    }
    
    h3 {
      margin: 0 0 5px 0;
      font-size: 1.2rem;
    }
    
    .product-count {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  `]
})
export class CategoryCardComponent {
  @Input() category: any;
  @Output() categorySelected = new EventEmitter<any>();
  
  onClick() {
    this.categorySelected.emit(this.category);
  }
}
