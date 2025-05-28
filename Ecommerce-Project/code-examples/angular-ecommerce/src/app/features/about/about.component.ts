import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h2>About Us</h2>
      <div class="about-content">
        <p>Welcome to our e-commerce store!</p>
        <p>We are dedicated to providing quality products and excellent service.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AboutComponent {}
