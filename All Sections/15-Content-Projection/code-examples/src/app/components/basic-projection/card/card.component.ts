import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [ngClass]="{'card-elevated': elevated}">
      <div class="card-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 16px;
      background-color: white;
      transition: all 0.3s ease;
    }
    
    .card-elevated {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class CardComponent {
  @Input() elevated: boolean = false;
}
