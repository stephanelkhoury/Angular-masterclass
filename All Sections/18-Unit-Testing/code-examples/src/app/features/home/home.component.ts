import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h2>Welcome to Angular Unit Testing</h2>
      
      <p class="intro">
        This application demonstrates various Angular testing techniques using Jasmine and Karma.
      </p>
      
      <div class="testing-categories">
        <div class="category-card" *ngFor="let category of testingCategories">
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <a [routerLink]="category.route" class="view-examples">View Examples</a>
        </div>
      </div>
      
      <div class="testing-facts">
        <h3>Why Unit Testing Matters</h3>
        <ul>
          <li>Tests verify your code works as expected</li>
          <li>Tests prevent regressions when code changes</li>
          <li>Tests document how components and services should be used</li>
          <li>Tests can improve code architecture</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .intro {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    
    .testing-categories {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    
    .category-card {
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    
    .category-card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-color: #ccc;
    }
    
    .category-card h3 {
      margin-top: 0;
      color: #333;
    }
    
    .view-examples {
      display: inline-block;
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #0066cc;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .testing-facts {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 4px;
    }
    
    .testing-facts ul {
      padding-left: 20px;
    }
    
    .testing-facts li {
      margin-bottom: 8px;
    }
  `]
})
export class HomeComponent {
  testingCategories = [
    {
      title: 'Component Testing',
      description: 'Learn how to test component classes, templates, and interactions.',
      route: '/component-tests'
    },
    {
      title: 'Service Testing',
      description: 'Test services, HTTP clients, and dependency injection.',
      route: '/service-tests'
    },
    {
      title: 'Pipe Testing',
      description: 'Learn to test pure and impure pipes effectively.',
      route: '/pipe-tests'
    },
    {
      title: 'Directive Testing',
      description: 'Test attribute and structural directives.',
      route: '/directive-tests'
    },
    {
      title: 'Form Testing',
      description: 'Test reactive forms and template-driven forms.',
      route: '/form-tests'
    }
  ];
}
