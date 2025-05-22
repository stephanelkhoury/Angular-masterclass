import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-list-stagger',
  template: `
    <div class="mb-4 mt-5">
      <h4>Advanced List Stagger Effects</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="listStaggerDirection" class="form-label">Stagger Direction:</label>
            <select class="form-select" id="listStaggerDirection" [(ngModel)]="staggerDirection">
              <option value="normal">Normal (Top to Bottom)</option>
              <option value="reverse">Reverse (Bottom to Top)</option>
              <option value="alternate">Alternate (Center Out)</option>
            </select>
          </div>
          
          <div class="input-group mb-3">
            <input type="text" class="form-control" 
                   placeholder="Add new item" 
                   [(ngModel)]="newItem"
                   (keydown.enter)="addItem()">
            <button class="btn btn-primary" (click)="addItem()">Add</button>
          </div>
          
          <div class="btn-group mb-3">
            <button class="btn btn-success" (click)="filterItems('')">All</button>
            <button class="btn btn-outline-primary" (click)="filterItems('important')">Important</button>
            <button class="btn btn-outline-secondary" (click)="filterItems('normal')">Normal</button>
          </div>
        </div>
      </div>
      
      <div class="list-container mt-3">
        <div [@listAnimation]="{value: items.length, params: {direction: staggerDirection}}" class="list-items-wrapper">
          <div class="list-item" *ngFor="let item of filteredItems; let i = index">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span [ngClass]="{'fw-bold': item.type === 'important'}">
                  {{ item.text }}
                </span>
                <span class="badge" 
                      [ngClass]="{'bg-danger': item.type === 'important', 'bg-secondary': item.type === 'normal'}" 
                      *ngIf="item.type">
                  {{ item.type }}
                </span>
              </div>
              <button class="btn btn-sm btn-outline-danger" (click)="removeItem(i)">
                &times;
              </button>
            </div>
          </div>
        </div>
        
        <div class="alert alert-info mt-3" *ngIf="filteredItems.length === 0">
          No items to display. Add some items!
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      max-width: 600px;
    }
    
    .list-item {
      border: 1px solid #dee2e6;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 10px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .badge {
      margin-left: 8px;
    }
  `],
  animations: [
    trigger('listAnimation', [
      // Items entering the DOM
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('70ms', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ]),
      
      // Alternate stagger pattern
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('70ms alternate', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ], { params: { direction: 'alternate' } }),
      
      // Reverse stagger pattern
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('-70ms', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ], { params: { direction: 'reverse' } }),
      
      // Items leaving the DOM
      transition('* => *', [
        query(':leave', [
          style({ opacity: 1 }),
          stagger('50ms', [
            animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ListStaggerComponent {
  staggerDirection = 'normal';
  newItem = '';
  items = [
    { text: 'Angular Animations Tutorial', type: 'important' },
    { text: 'Learn about stagger effects', type: 'important' },
    { text: 'Practice keyframe animations', type: 'normal' },
    { text: 'Read Angular docs', type: 'normal' },
    { text: 'Create animation library', type: 'normal' }
  ];
  filteredItems = [...this.items];
  currentFilter = '';
  
  addItem() {
    if (this.newItem.trim()) {
      const newItemType = this.newItem.startsWith('!') ? 'important' : 'normal';
      const text = this.newItem.startsWith('!') ? this.newItem.substring(1).trim() : this.newItem;
      
      this.items.push({ 
        text, 
        type: newItemType 
      });
      
      // Apply current filter
      this.filterItems(this.currentFilter);
      
      // Clear input
      this.newItem = '';
    }
  }
  
  removeItem(index: number) {
    const realIndex = this.items.indexOf(this.filteredItems[index]);
    if (realIndex !== -1) {
      this.items.splice(realIndex, 1);
      // Apply current filter
      this.filterItems(this.currentFilter);
    }
  }
  
  filterItems(filter: string) {
    this.currentFilter = filter;
    if (filter) {
      this.filteredItems = this.items.filter(item => item.type === filter);
    } else {
      this.filteredItems = [...this.items];
    }
  }
}
