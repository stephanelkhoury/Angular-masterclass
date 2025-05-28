import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Angular Animations Demo</a>
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/basic" routerLinkActive="active">Basic Animations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/advanced" routerLinkActive="active">Advanced Animations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/keyframes" routerLinkActive="active">Keyframes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/stagger" routerLinkActive="active">Stagger Effects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/route-animations" routerLinkActive="active">Route Animations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container py-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .active {
      font-weight: bold;
      color: white !important;
    }
  `]
})
export class AppComponent {
  title = 'animations-demo';
}