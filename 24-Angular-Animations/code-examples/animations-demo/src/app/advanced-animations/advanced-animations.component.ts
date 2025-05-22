import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-animations',
  template: `
    <div class="row">
      <div class="col-md-3">
        <div class="list-group mb-4">
          <a routerLink="callbacks" routerLinkActive="active" class="list-group-item list-group-item-action">
            Animation Callbacks
          </a>
          <a routerLink="conditional" routerLinkActive="active" class="list-group-item list-group-item-action">
            Conditional Animations
          </a>
          <a routerLink="parallel-sequential" routerLinkActive="active" class="list-group-item list-group-item-action">
            Parallel & Sequential
          </a>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .active {
      background-color: #0d6efd !important;
      color: white !important;
      border-color: #0d6efd !important;
    }
  `]
})
export class AdvancedAnimationsComponent {}
