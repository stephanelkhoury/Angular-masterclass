import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Angular Unit Testing Demo</h1>
      
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/component-tests">Component Tests</a></li>
          <li><a routerLink="/service-tests">Service Tests</a></li>
          <li><a routerLink="/pipe-tests">Pipe Tests</a></li>
          <li><a routerLink="/directive-tests">Directive Tests</a></li>
          <li><a routerLink="/form-tests">Form Tests</a></li>
        </ul>
      </nav>
      
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .main-nav ul {
      display: flex;
      list-style: none;
      padding: 0;
      background-color: #f0f0f0;
      border-radius: 4px;
    }
    
    .main-nav li {
      margin: 0;
      padding: 0;
    }
    
    .main-nav a {
      display: block;
      padding: 12px 15px;
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    
    .main-nav a:hover {
      background-color: #e0e0e0;
    }
    
    .content {
      margin-top: 20px;
      padding: 20px;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }
  `]
})
export class AppComponent {
  title = 'Angular Unit Testing';
}
