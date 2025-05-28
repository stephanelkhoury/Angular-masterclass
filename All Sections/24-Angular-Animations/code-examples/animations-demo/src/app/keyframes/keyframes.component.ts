import { Component } from '@angular/core';

@Component({
  selector: 'app-keyframes',
  template: `
    <div class="row">
      <div class="col-md-3">
        <div class="list-group mb-4">
          <a routerLink="basic" routerLinkActive="active" class="list-group-item list-group-item-action">
            Basic Keyframes
          </a>
          <a routerLink="advanced" routerLinkActive="active" class="list-group-item list-group-item-action">
            Advanced Keyframes
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
export class KeyframesComponent {}
