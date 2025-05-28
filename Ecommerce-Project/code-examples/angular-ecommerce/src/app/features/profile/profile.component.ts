import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile-container">
      <h2>User Profile</h2>
      <div class="profile-content">
        <p>Profile management coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class ProfileComponent {}
