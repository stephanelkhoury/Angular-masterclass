import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  template: `
    <div class="filters-container">
      <h3>Filters</h3>
      
      <div class="filter-section">
        <h4>Price Range</h4>
        <div class="price-inputs">
          <div class="input-group">
            <label for="min-price">Min</label>
            <input 
              type="number" 
              id="min-price" 
              [ngModel]="minPrice" 
              (ngModelChange)="onMinPriceChange($event)"
              min="0"
            >
          </div>
          <div class="input-group">
            <label for="max-price">Max</label>
            <input 
              type="number" 
              id="max-price" 
              [ngModel]="maxPrice" 
              (ngModelChange)="onMaxPriceChange($event)"
              min="0"
            >
          </div>
        </div>
        <div class="price-slider">
          <input 
            type="range" 
            [min]="0" 
            [max]="maxPossiblePrice" 
            [ngModel]="minPrice"
            (ngModelChange)="onMinPriceChange($event)"
            class="slider min-slider"
          >
          <input 
            type="range" 
            [min]="0" 
            [max]="maxPossiblePrice" 
            [ngModel]="maxPrice"
            (ngModelChange)="onMaxPriceChange($event)"
            class="slider max-slider"
          >
        </div>
      </div>
      
      <div class="filter-section">
        <h4>Rating</h4>
        <div class="rating-filter">
          <div 
            *ngFor="let star of [5,4,3,2,1]" 
            class="rating-option"
            [class.selected]="rating === star"
            (click)="onRatingChange(star)"
          >
            <span class="stars">
              <span *ngFor="let i of [1,2,3,4,5]" class="star" [class.filled]="i <= star">★</span>
            </span>
            <span class="rating-text">{{ star }}+ stars</span>
          </div>
        </div>
      </div>
      
      <button class="clear-filters-btn" (click)="clearFilters()">Clear All Filters</button>
    </div>
  `,
  styles: [`
    .filters-container {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    h3 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.2rem;
      color: #333;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    
    .filter-section {
      margin-bottom: 25px;
    }
    
    h4 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 1rem;
      color: #555;
    }
    
    .price-inputs {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    
    .input-group {
      width: 48%;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 0.8rem;
      color: #777;
    }
    
    input[type="number"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .price-slider {
      position: relative;
      height: 30px;
    }
    
    .slider {
      position: absolute;
      width: 100%;
      top: 0;
      appearance: none;
      height: 2px;
      background: #ddd;
      outline: none;
    }
    
    .slider::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      z-index: 10;
      position: relative;
    }
    
    .rating-filter {
      display: flex;
      flex-direction: column;
    }
    
    .rating-option {
      display: flex;
      align-items: center;
      padding: 8px;
      cursor: pointer;
      border-radius: 4px;
      margin-bottom: 5px;
    }
    
    .rating-option:hover {
      background-color: #f5f5f5;
    }
    
    .rating-option.selected {
      background-color: #e3f2fd;
    }
    
    .stars {
      margin-right: 10px;
    }
    
    .star {
      color: #ddd;
      font-size: 1rem;
    }
    
    .star.filled {
      color: #FFD700;
    }
    
    .rating-text {
      font-size: 0.9rem;
      color: #666;
    }
    
    .clear-filters-btn {
      width: 100%;
      padding: 10px;
      background-color: transparent;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .clear-filters-btn:hover {
      background-color: #f5f5f5;
      border-color: #bbb;
    }
  `]
})
export class ProductFiltersComponent {
  @Input() minPrice: number = 0;
  @Input() maxPrice: number = 1000;
  @Input() rating: number = 0;
  
  @Output() priceRangeChanged = new EventEmitter<{min: number, max: number}>();
  @Output() ratingChanged = new EventEmitter<number>();
  @Output() filtersCleared = new EventEmitter<void>();
  
  maxPossiblePrice = 2000;
  
  onMinPriceChange(value: number) {
    const min = Math.min(value, this.maxPrice);
    this.priceRangeChanged.emit({min, max: this.maxPrice});
  }
  
  onMaxPriceChange(value: number) {
    const max = Math.max(value, this.minPrice);
    this.priceRangeChanged.emit({min: this.minPrice, max});
  }
  
  onRatingChange(rating: number) {
    this.ratingChanged.emit(rating);
  }
  
  clearFilters() {
    this.filtersCleared.emit();
  }
}
