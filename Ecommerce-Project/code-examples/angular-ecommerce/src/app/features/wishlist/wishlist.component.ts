import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  template: `
    <div class="wishlist-container">
      <h2>My Wishlist</h2>
      <div class="wishlist-content">
        <p>Wishlist functionality coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .wishlist-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class WishlistComponent {}
