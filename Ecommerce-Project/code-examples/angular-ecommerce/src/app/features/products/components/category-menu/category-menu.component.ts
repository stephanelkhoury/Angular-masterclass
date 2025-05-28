import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-category-menu',
  template: `
    <div class="category-menu">
      <div class="category-item" 
           [class.active]="!selectedCategory"
           (click)="onCategorySelect(null)">
        All Categories
      </div>
      <div class="category-item" 
           *ngFor="let category of categories"
           [class.active]="selectedCategory === category.id"
           (click)="onCategorySelect(category.id)">
        {{ category.name }}
      </div>
    </div>
  `,
  styles: [`
    .category-menu {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }
    
    .category-item {
      padding: 8px 16px;
      border: 1px solid #ddd;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: white;
    }
    
    .category-item:hover {
      background-color: #f5f5f5;
    }
    
    .category-item.active {
      background-color: #3f51b5;
      color: white;
      border-color: #3f51b5;
    }
  `]
})
export class CategoryMenuComponent {
  @Input() categories: Category[] | null = [];
  @Input() selectedCategory: string | null = null;
  @Output() categorySelected = new EventEmitter<string | null>();

  onCategorySelect(categoryId: string | null): void {
    this.categorySelected.emit(categoryId);
  }
}
