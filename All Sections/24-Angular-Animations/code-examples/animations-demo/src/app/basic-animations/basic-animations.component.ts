import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-animations',
  template: `
    <div class="row">
      <div class="col-md-3">
        <div class="list-group mb-4">
          <a routerLink="fade" routerLinkActive="active" class="list-group-item list-group-item-action">
            Fade In/Out
          </a>
          <a routerLink="slide" routerLinkActive="active" class="list-group-item list-group-item-action">
            Slide Effects
          </a>
          <a routerLink="scale" routerLinkActive="active" class="list-group-item list-group-item-action">
            Scale Effects
          </a>
          <a routerLink="rotate" routerLinkActive="active" class="list-group-item list-group-item-action">
            Rotate Effects
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
export class BasicAnimationsComponent {}