import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter-container">
      <h3>{{ label }}</h3>
      <div class="counter-value">{{ counter }}</div>
      <div class="counter-controls">
        <button class="counter-button" (click)="decrement()" [disabled]="counter <= 0">-</button>
        <button class="counter-button" (click)="increment()">+</button>
      </div>
      <button class="reset-button" (click)="reset()">Reset</button>
    </div>
  `,
  styles: [`
    .counter-container {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      max-width: 300px;
      text-align: center;
    }
    
    .counter-value {
      font-size: 48px;
      font-weight: bold;
      padding: 15px 0;
    }
    
    .counter-controls {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 15px;
    }
    
    .counter-button {
      width: 40px;
      height: 40px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #0066cc;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .counter-button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    
    .reset-button {
      padding: 8px 15px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class CounterComponent {
  @Input() label: string = 'Counter';
  @Input() initialValue: number = 0;
  @Output() counterChange = new EventEmitter<number>();
  
  counter: number = 0;
  
  ngOnInit() {
    this.counter = this.initialValue;
  }
  
  increment(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
  
  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
      this.counterChange.emit(this.counter);
    }
  }
  
  reset(): void {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }
}
