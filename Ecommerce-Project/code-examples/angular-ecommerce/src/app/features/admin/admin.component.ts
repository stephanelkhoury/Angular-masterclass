import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <div class="admin-container">
      <h2>Admin Panel</h2>
      <div class="admin-content">
        <p>Admin functionality coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .admin-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AdminComponent {}
