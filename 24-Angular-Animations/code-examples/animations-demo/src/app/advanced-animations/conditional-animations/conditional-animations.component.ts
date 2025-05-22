import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-conditional-animations',
  template: `
    <h2>Conditional Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Disable Animations</h4>
      <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" id="animationsEnabled" [(ngModel)]="animationsEnabled">
        <label class="form-check-label" for="animationsEnabled">Animations {{ animationsEnabled ? 'Enabled' : 'Disabled' }}</label>
      </div>
      
      <button class="btn btn-primary me-2" (click)="toggleState()">
        Toggle State
      </button>
      
      <div [@conditionalAnimation]="{ value: currentState, params: { duration: animationsEnabled ? '0.5s' : '0s' }}" 
          class="demo-box mt-3 bg-primary">
        <p>Animation is {{ animationsEnabled ? 'enabled' : 'disabled' }}</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Reduced Motion Support</h4>
      <p class="text-muted">This respects the user's system settings for reduced motion preferences.</p>
      
      <button class="btn btn-primary me-2" (click)="toggleReducedMotion()">
        Toggle Element
      </button>
      
      <div [@reducedMotion]="reducedMotionState" class="demo-box mt-3 bg-success">
        <p>Uses alternate animation if reduced motion is preferred</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Dynamic Animation Control</h4>
      <button class="btn btn-primary me-2" (click)="playAnimation()">Play Animation</button>
      <button class="btn btn-secondary me-2" (click)="pauseAnimation()">Pause</button>
      <button class="btn btn-warning me-2" (click)="resumeAnimation()">Resume</button>
      <button class="btn btn-danger me-2" (click)="resetAnimation()">Reset</button>
      
      <div class="demo-box mt-3 bg-info" #animationEl>
        <p>Programmatically controlled animation</p>
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
    trigger('conditionalAnimation', [
      state('inactive', style({
        backgroundColor: '#0d6efd',
        transform: 'translateX(0)'
      })),
      state('active', style({
        backgroundColor: '#dc3545',
        transform: 'translateX(100px)'
      })),
      transition('inactive => active', [
        animate('{{duration}} ease-in')
      ], { params: { duration: '0.5s' }}),
      transition('active => inactive', [
        animate('{{duration}} ease-out')
      ], { params: { duration: '0.5s' }})
    ]),
    
    trigger('reducedMotion', [
      state('hidden', style({ 
        opacity: 0,
        height: 0,
        padding: 0,
        margin: 0
      })),
      state('visible', style({ 
        opacity: 1,
        height: '*',
        padding: '20px'
      })),
      // Standard animation
      transition('hidden => visible', [
        animate('0.5s ease', style({ 
          height: '*',
          padding: '20px' 
        })),
        animate('0.3s ease', style({ opacity: 1 }))
      ], { params: { duration: '0.5s' }}),
      // Reduced motion alternative
      transition('hidden => visible', [
        animate('0.001s', style({ 
          height: '*',
          padding: '20px', 
          opacity: 1 
        }))
      ], { params: { duration: '0.001s' }})
    ])
  ]
})
export class ConditionalAnimationsComponent {
  animationsEnabled = true;
  currentState = 'inactive';
  reducedMotionState = 'visible';
  private player: AnimationPlayer | null = null;
  
  constructor(private builder: AnimationBuilder) {}
  
  toggleState() {
    this.currentState = this.currentState === 'active' ? 'inactive' : 'active';
  }
  
  toggleReducedMotion() {
    this.reducedMotionState = this.reducedMotionState === 'visible' ? 'hidden' : 'visible';
  }
  
  playAnimation() {
    const animation = this.builder.build([
      style({ transform: 'translateX(0)' }),
      animate('1s ease-in-out', style({ transform: 'translateX(100px)' })),
      animate('1s ease-in-out', style({ transform: 'translateX(0)' }))
    ]);
    
    this.player = animation.create(document.querySelector('.bg-info'));
    this.player.play();
  }
  
  pauseAnimation() {
    if (this.player) {
      this.player.pause();
    }
  }
  
  resumeAnimation() {
    if (this.player) {
      this.player.play();
    }
  }
  
  resetAnimation() {
    if (this.player) {
      this.player.reset();
    }
  }
}
