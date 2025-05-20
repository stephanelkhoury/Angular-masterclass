import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <div class="copyright">
        &copy; {{ currentYear }} Angular Modules Demo
      </div>
      
      <div class="links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  `,
  styles: [`
    .app-footer {
      background-color: #f5f5f5;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e0e0e0;
    }
    
    .links {
      display: flex;
      gap: 20px;
    }
    
    .links a {
      color: #3f51b5;
      text-decoration: none;
    }
  `]
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
