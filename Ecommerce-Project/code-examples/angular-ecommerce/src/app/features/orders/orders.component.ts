import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: `
    <div class="orders-container">
      <h2>My Orders</h2>
      <div class="orders-content">
        <p>Order history coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .orders-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class OrdersComponent {}
