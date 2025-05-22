import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-slide',
  template: `
    <h2>Slide Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Horizontal Slide</h4>
      <button class="btn btn-primary me-2" (click)="toggleHorizontalSlide()">
        {{ isHorizontalVisible ? 'Hide' : 'Show' }}
      </button>
      
      <div [@horizontalSlide]="isHorizontalVisible ? 'visible' : 'hidden'" class="demo-box mt-3 bg-primary">
        <p>Horizontal slide animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Vertical Slide</h4>
      <button class="btn btn-primary me-2" (click)="toggleVerticalSlide()">
        {{ isVerticalVisible ? 'Hide' : 'Show' }}
      </button>
      
      <div [@verticalSlide]="isVerticalVisible ? 'visible' : 'hidden'" class="demo-box mt-3 bg-secondary">
        <p>Vertical slide animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Slide with Fade</h4>
      <button class="btn btn-primary me-2" (click)="toggleSlideWithFade()">
        {{ isSlideWithFadeVisible ? 'Hide' : 'Show' }}
      </button>
      
      <div [@slideWithFade]="isSlideWithFadeVisible ? 'visible' : 'hidden'" class="demo-box mt-3 bg-danger">
        <p>Slide with fade animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Directional Slide</h4>
      <div class="btn-group mb-2">
        <button class="btn btn-outline-primary" (click)="setSlideDirection('left')">From Left</button>
        <button class="btn btn-outline-primary" (click)="setSlideDirection('right')">From Right</button>
        <button class="btn btn-outline-primary" (click)="setSlideDirection('top')">From Top</button>
        <button class="btn btn-outline-primary" (click)="setSlideDirection('bottom')">From Bottom</button>
      </div>
      <div>
        <button class="btn btn-primary me-2" (click)="toggleDirectionalSlide()">
          {{ isDirectionalVisible ? 'Hide' : 'Show' }}
        </button>
      </div>
      
      <div [@directionalSlide]="{value: isDirectionalVisible ? 'visible' : 'hidden', params: {direction: slideDirection}}" 
           class="demo-box mt-3 bg-success">
        <p>Sliding from {{ slideDirection }}</p>
      </div>
    </div>
  `,
  styles: [`
    .demo-box {
      padding: 20px;
      border-radius: 5px;
      color: white;
      margin: 10px 0;
      max-width: 400px;
    }
  `],
  animations: [
    trigger('horizontalSlide', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ])
    ]),
    
    trigger('verticalSlide', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ])
    ]),
    
    trigger('slideWithFade', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('hidden => visible', [
        group([
          animate('0.5s ease-out', style({
            transform: 'translateX(0)'
          })),
          animate('0.8s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('visible => hidden', [
        group([
          animate('0.5s ease-in', style({
            transform: 'translateX(-100%)'
          })),
          animate('0.3s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    
    trigger('directionalSlide', [
      state('visible', style({
        transform: 'translate(0, 0)',
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', [
        style({
          transform: "{{ direction === 'left' ? 'translateX(-100%)' : direction === 'right' ? 'translateX(100%)' : direction === 'top' ? 'translateY(-100%)' : 'translateY(100%)' }}",
          opacity: 0
        }),
        animate('0.5s ease-out')
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-in', style({
          transform: "{{ direction === 'left' ? 'translateX(-100%)' : direction === 'right' ? 'translateX(100%)' : direction === 'top' ? 'translateY(-100%)' : 'translateY(100%)' }}",
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SlideComponent {
  isHorizontalVisible = true;
  isVerticalVisible = true;
  isSlideWithFadeVisible = true;
  isDirectionalVisible = true;
  slideDirection = 'left';
  
  toggleHorizontalSlide() {
    this.isHorizontalVisible = !this.isHorizontalVisible;
  }
  
  toggleVerticalSlide() {
    this.isVerticalVisible = !this.isVerticalVisible;
  }
  
  toggleSlideWithFade() {
    this.isSlideWithFadeVisible = !this.isSlideWithFadeVisible;
  }
  
  toggleDirectionalSlide() {
    this.isDirectionalVisible = !this.isDirectionalVisible;
  }
  
  setSlideDirection(direction: string) {
    this.slideDirection = direction;
    if (!this.isDirectionalVisible) {
      this.isDirectionalVisible = true;
    }
  }
}