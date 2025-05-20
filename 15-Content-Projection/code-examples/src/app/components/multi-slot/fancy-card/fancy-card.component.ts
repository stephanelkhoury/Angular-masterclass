import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  template: `
    <div class="fancy-card" [ngClass]="{'fancy-card-elevated': elevated}">
      <header class="card-header" *ngIf="hasHeader">
        <ng-content select="[card-header]"></ng-content>
      </header>
      <div class="card-body">
        <ng-content select="[card-body]"></ng-content>
      </div>
      <footer class="card-footer" *ngIf="hasFooter">
        <ng-content select="[card-footer]"></ng-content>
      </footer>
    </div>
  `,
  styles: [`
    .fancy-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: white;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .fancy-card-elevated {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
    
    .fancy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      padding: 16px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .card-body {
      padding: 16px;
    }
    
    .card-footer {
      padding: 12px 16px;
      background-color: #f5f5f5;
      border-top: 1px solid #e0e0e0;
    }
  `]
})
export class FancyCardComponent {
  @Input() elevated: boolean = false;
  
  // These getters determine if the respective section has content
  get hasHeader(): boolean {
    const element = this.element.nativeElement;
    return element.querySelector('[card-header]') !== null;
  }
  
  get hasFooter(): boolean {
    const element = this.element.nativeElement;
    return element.querySelector('[card-footer]') !== null;
  }
  
  constructor(private element: ElementRef) {}
}
