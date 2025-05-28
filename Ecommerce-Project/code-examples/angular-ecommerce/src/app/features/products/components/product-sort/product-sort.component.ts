import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  template: `
    <div class="sort-container">
      <label for="sort-select">Sort By:</label>
      <select 
        id="sort-select" 
        [ngModel]="currentSort" 
        (ngModelChange)="onSortChange($event)"
      >
        <option value="featured">Featured</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="name-a-z">Name: A to Z</option>
        <option value="name-z-a">Name: Z to A</option>
        <option value="newest">Newest First</option>
        <option value="rating">Top Rated</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  `,
  styles: [`
    .sort-container {
      display: flex;
      align-items: center;
    }
    
    label {
      margin-right: 10px;
      font-size: 0.9rem;
      color: #666;
    }
    
    select {
      padding: 8px 30px 8px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: white;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 1em;
    }
    
    select:focus {
      outline: none;
      border-color: #1976d2;
    }
  `]
})
export class ProductSortComponent {
  @Input() currentSort: string = 'featured';
  @Output() sortChanged = new EventEmitter<string>();
  
  onSortChange(value: string) {
    this.sortChanged.emit(value);
  }
}
