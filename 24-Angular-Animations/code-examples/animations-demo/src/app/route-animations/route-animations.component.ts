import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Fade animation
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      style({ opacity: 1 })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1 }))
      ], { optional: true })
    ])
  ]),
  
  // Slide Left to Right animation
  transition('One => Two, Two => Three', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)' })
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0)' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ]),
  
  // Slide Right to Left animation
  transition('Three => Two, Two => One', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(-100%)' })
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0)' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-route-animations',
  template: `
    <h2>Route Animations</h2>
    <hr>
    
    <div class="row mb-4">
      <div class="col">
        <div class="btn-group">
          <a routerLink="one" routerLinkActive="active" class="btn btn-outline-primary">Page One</a>
          <a routerLink="two" routerLinkActive="active" class="btn btn-outline-primary">Page Two</a>
          <a routerLink="three" routerLinkActive="active" class="btn btn-outline-primary">Page Three</a>
        </div>
      </div>
    </div>
    
    <div class="route-container" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
    
    <div class="mt-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">How Route Animations Work</h5>
          <p class="card-text">
            Route animations in Angular use the animation system to create smooth transitions 
            between different routes. The animation is triggered when the route changes.
          </p>
          <ul>
            <li>Pages One → Two → Three: Slide left animation</li>
            <li>Pages Three → Two → One: Slide right animation</li>
            <li>Any other route change: Fade animation</li>
          </ul>
          <p class="card-text">
            Implementation details:
          </p>
          <ul>
            <li>Use <code>data</code> property in route configuration to define animation state</li>
            <li>Create animation trigger with transitions between states</li>
            <li>Access <code>RouterOutlet</code> activation data to determine current animation state</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .route-container {
      position: relative;
      overflow: hidden;
      min-height: 300px;
      padding: 20px;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      background-color: #f8f9fa;
    }
    
    .btn-group .active {
      background-color: #0d6efd !important;
      color: white !important;
    }
  `],
  animations: [slideInAnimation]
})
export class RouteAnimationsComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
