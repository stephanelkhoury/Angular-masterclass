import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  template: `
    <div class="quantity-selector">
      <button mat-icon-button color="primary" 
              [disabled]="quantity <= min || disabled"
              (click)="decreaseQuantity()">
        <mat-icon>remove</mat-icon>
      </button>
      
      <span class="quantity">{{ quantity }}</span>
      
      <button mat-icon-button color="primary" 
              [disabled]="quantity >= max || disabled"
              (click)="increaseQuantity()">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .quantity-selector {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .quantity {
      margin: 0 10px;
      min-width: 30px;
      text-align: center;
      font-weight: 500;
    }
    
    button {
      line-height: 30px;
      height: 30px;
      width: 30px;
    }
    
    button ::ng-deep .mat-icon {
      font-size: 18px;
      line-height: 18px;
      height: 18px;
      width: 18px;
    }
  `]
})
export class QuantitySelectorComponent {
  @Input() quantity: number = 1;
  @Input() value: number = 1;
  @Input() min: number = 1;
  @Input() max: number = 99;
  @Input() disabled: boolean = false;
  
  @Output() quantityChange = new EventEmitter<number>();
  @Output() valueChange = new EventEmitter<number>();
  
  increaseQuantity(): void {
    if (this.quantity < this.max && !this.disabled) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
      this.valueChange.emit(this.quantity);
    }
  }
  
  decreaseQuantity(): void {
    if (this.quantity > this.min && !this.disabled) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
      this.valueChange.emit(this.quantity);
    }
  }
}