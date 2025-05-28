import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [ngClass]="{ 'card-bordered': bordered }">
      <div class="card-header" *ngIf="title">
        <h3>{{ title }}</h3>
        <div class="card-actions" *ngIf="hasActions">
          <ng-content select="[card-actions]"></ng-content>
        </div>
      </div>
      
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      
      <div class="card-footer" *ngIf="hasFooter">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      overflow: hidden;
    }
    
    .card-bordered {
      border: 1px solid #e0e0e0;
    }
    
    .card-header {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .card-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }
    
    .card-body {
      padding: 16px;
    }
    
    .card-footer {
      padding: 16px;
      border-top: 1px solid #f0f0f0;
      background-color: #fafafa;
    }
  `]
})
export class CardComponent {
  @Input() title?: string;
  @Input() bordered = true;
  
  get hasActions(): boolean {
    // To be populated by ContentChild query
    return true;
  }
  
  get hasFooter(): boolean {
    // To be populated by ContentChild query
    return true;
  }
}
