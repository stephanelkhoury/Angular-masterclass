import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron text-center p-5 mb-4 bg-light rounded-3">
      <h1 class="display-4">Angular Animations</h1>
      <p class="lead">
        Explore the power of Angular's animation system with these comprehensive examples.
      </p>
    </div>

    <div class="row" [@listAnimation]="animationItems.length">
      <div class="col-md-4 mb-4" *ngFor="let item of animationItems">
        <div class="card h-100" (click)="navigateTo(item.route)">
          <div class="card-body text-center">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      cursor: pointer;
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  animationItems = [
    {
      title: 'Basic Animations',
      description: 'Learn the fundamentals of Angular animations including fade, slide, and scale effects.',
      route: '/basic'
    },
    {
      title: 'Advanced Animations',
      description: 'Explore complex animation sequences, callbacks, and conditional animations.',
      route: '/advanced'
    },
    {
      title: 'Keyframes',
      description: 'Create intricate multi-step animations with keyframe sequences.',
      route: '/keyframes'
    },
    {
      title: 'Stagger Effects',
      description: 'Apply cascading animations to lists and collections of elements.',
      route: '/stagger'
    },
    {
      title: 'Route Animations',
      description: 'Implement smooth transitions between different routes in your application.',
      route: '/route-animations'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}