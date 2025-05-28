import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <div class="checkout-container">
      <h2>Checkout</h2>
      <div class="checkout-content">
        <p>Checkout functionality coming soon...</p>
        <button routerLink="/cart">Back to Cart</button>
      </div>
    </div>
  `,
  styles: [`
    .checkout-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class CheckoutComponent {}
