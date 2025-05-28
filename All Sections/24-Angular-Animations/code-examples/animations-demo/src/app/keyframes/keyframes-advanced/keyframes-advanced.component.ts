import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-keyframes-advanced',
  template: `
    <h2>Advanced Keyframes Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Custom Keyframes Animation</h4>
      <div class="mb-3">
        <label for="customDuration" class="form-label">Duration: {{ customDuration }}ms</label>
        <input type="range" class="form-range" id="customDuration" min="500" max="3000" step="100" [(ngModel)]="customDuration">
      </div>
      <div class="mb-3">
        <label for="customEasing" class="form-label">Easing:</label>
        <select class="form-select" id="customEasing" [(ngModel)]="customEasing">
          <option value="linear">Linear</option>
          <option value="ease">Ease</option>
          <option value="ease-in">Ease In</option>
          <option value="ease-out">Ease Out</option>
          <option value="ease-in-out">Ease In Out</option>
          <option value="cubic-bezier(0.175, 0.885, 0.32, 1.275)">Bounce (Custom Cubic Bezier)</option>
        </select>
      </div>
      
      <button class="btn btn-primary me-2" (click)="triggerCustom()">
        Run Animation
      </button>
      
      <div [@customAnimation]="{value: customState, params: {duration: customDuration, easing: customEasing}}" 
           (@customAnimation.done)="onCustomDone()"
           class="demo-box mt-3 bg-primary">
        <p>Custom keyframes animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Path Animation</h4>
      <button class="btn btn-primary me-2" (click)="triggerPath()">
        Animate Path
      </button>
      
      <div class="path-container mt-3">
        <svg width="400" height="200">
          <path d="M10,100 C50,20 150,20 200,100 S350,180 390,100" stroke="#6c757d" stroke-width="2" fill="none" />
          <circle [@pathAnimation]="pathState" cx="10" cy="100" r="10" fill="#dc3545" />
        </svg>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Morph Animation</h4>
      <button class="btn btn-primary me-2" (click)="triggerMorph()">
        Morph Shape
      </button>
      
      <div class="morph-container mt-3">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <path [@morphAnimation]="morphState" 
                [attr.d]="currentPath" 
                fill="#198754" />
        </svg>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Stacked Keyframes</h4>
      <button class="btn btn-primary me-2" (click)="triggerStacked()">
        Run Stacked Animation
      </button>
      
      <div [@stackedAnimation]="stackedState" class="demo-box mt-3 bg-warning">
        <p>Multiple properties animated with keyframes</p>
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
    
    .path-container, .morph-container {
      background-color: #f8f9fa;
      border-radius: 5px;
      padding: 10px;
    }
    
    .morph-container svg {
      display: block;
      margin: 0 auto;
    }
  `],
  animations: [
    trigger('customAnimation', [
      state('inactive', style({
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      transition('inactive => active', [
        animate('{{ duration }}ms {{ easing }}', keyframes([
          style({ opacity: 1, transform: 'translateX(0) scale(1)', offset: 0 }),
          style({ opacity: 0.8, transform: 'translateX(50px) scale(1.2)', backgroundColor: '#6f42c1', offset: 0.2 }),
          style({ opacity: 0.6, transform: 'translateX(0) scale(0.8)', backgroundColor: '#20c997', offset: 0.4 }),
          style({ opacity: 0.8, transform: 'translateX(-50px) scale(1.2)', backgroundColor: '#fd7e14', offset: 0.6 }),
          style({ opacity: 0.9, transform: 'translateX(0) scale(0.9)', backgroundColor: '#0dcaf0', offset: 0.8 }),
          style({ opacity: 1, transform: 'translateX(0) scale(1)', backgroundColor: '#0d6efd', offset: 1.0 })
        ]))
      ], { params: { duration: 1000, easing: 'ease-in-out' } })
    ]),
    
    trigger('pathAnimation', [
      state('inactive', style({
        transform: 'translateX(0)'
      })),
      state('active', style({
        transform: 'translateX(380px)'
      })),
      transition('inactive => active', [
        animate('3s', keyframes([
          style({ offsetDistance: '0%', offset: 0 }),
          style({ offsetDistance: '20%', offset: 0.2 }),
          style({ offsetDistance: '40%', offset: 0.4 }),
          style({ offsetDistance: '60%', offset: 0.6 }),
          style({ offsetDistance: '80%', offset: 0.8 }),
          style({ offsetDistance: '100%', offset: 1 })
        ]))
      ]),
      transition('active => inactive', [
        animate('0s')
      ])
    ]),
    
    trigger('morphAnimation', [
      state('inactive', style({
        /* Style not needed as we're directly manipulating the path */
      })),
      state('active', style({
        /* Style not needed as we're directly manipulating the path */
      })),
      transition('inactive => active', [
        animate('1s ease-in-out')
      ]),
      transition('active => inactive', [
        animate('1s ease-in-out')
      ])
    ]),
    
    trigger('stackedAnimation', [
      state('inactive', style({
        backgroundColor: '#ffc107',
        transform: 'translateX(0) rotate(0)',
        borderRadius: '5px'
      })),
      state('active', style({
        backgroundColor: '#ffc107',
        transform: 'translateX(0) rotate(0)',
        borderRadius: '5px'
      })),
      transition('inactive => active', [
        animate('2s', keyframes([
          style({ 
            backgroundColor: '#ffc107', 
            transform: 'translateX(0) rotate(0)', 
            borderRadius: '5px',
            offset: 0 
          }),
          style({ 
            backgroundColor: '#0dcaf0', 
            transform: 'translateX(50px) rotate(45deg)', 
            borderRadius: '25px',
            offset: 0.25 
          }),
          style({ 
            backgroundColor: '#198754', 
            transform: 'translateX(0) rotate(90deg)', 
            borderRadius: '5px',
            offset: 0.5 
          }),
          style({ 
            backgroundColor: '#dc3545', 
            transform: 'translateX(-50px) rotate(135deg)', 
            borderRadius: '50%',
            offset: 0.75 
          }),
          style({ 
            backgroundColor: '#ffc107', 
            transform: 'translateX(0) rotate(180deg)', 
            borderRadius: '5px',
            offset: 1.0 
          })
        ]))
      ])
    ])
  ]
})
export class KeyframesAdvancedComponent {
  customState = 'inactive';
  customDuration = 1000;
  customEasing = 'ease-in-out';
  
  pathState = 'inactive';
  
  morphState = 'inactive';
  squarePath = 'M10,10 L90,10 L90,90 L10,90 Z';
  circlePath = 'M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10';
  starPath = 'M50,10 L61,35 L90,40 L70,60 L75,90 L50,75 L25,90 L30,60 L10,40 L39,35 Z';
  currentPath = this.squarePath;
  nextPath = this.circlePath;
  
  stackedState = 'inactive';
  
  triggerCustom() {
    this.customState = 'active';
    // Reset after animation to allow replaying
    setTimeout(() => this.customState = 'inactive', this.customDuration + 100);
  }
  
  onCustomDone() {
    // Animation complete
    console.log('Custom animation completed');
  }
  
  triggerPath() {
    this.pathState = 'inactive';
    setTimeout(() => {
      this.pathState = 'active';
    }, 10);
  }
  
  triggerMorph() {
    // Toggle between shapes
    this.currentPath = this.morphState === 'inactive' ? this.squarePath : this.nextPath;
    this.morphState = this.morphState === 'inactive' ? 'active' : 'inactive';
    
    // Cycle through shapes
    if (this.nextPath === this.circlePath) {
      this.nextPath = this.starPath;
    } else if (this.nextPath === this.starPath) {
      this.nextPath = this.squarePath;
    } else {
      this.nextPath = this.circlePath;
    }
  }
  
  triggerStacked() {
    this.stackedState = 'active';
    setTimeout(() => this.stackedState = 'inactive', 2100);
  }
}
