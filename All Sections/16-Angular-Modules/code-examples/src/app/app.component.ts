import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header></app-header>
      
      <div class="content-container">
        <app-sidebar></app-sidebar>
        
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .content-container {
      display: flex;
      flex: 1;
    }
    
    .main-content {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'Angular Modules Demo';
}
