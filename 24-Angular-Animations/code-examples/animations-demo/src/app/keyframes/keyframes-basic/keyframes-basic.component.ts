import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-keyframes-basic',
  template: `
    <h2>Basic Keyframes Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Bounce Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerBounce()">
        Bounce
      </button>
      
      <div [@bounce]="bounceState" class="demo-box mt-3 bg-primary">
        <p>Bounce animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Shake Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerShake()">
        Shake
      </button>
      
      <div [@shake]="shakeState" class="demo-box mt-3 bg-danger">
        <p>Shake animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Pulse Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerPulse()">
        Pulse
      </button>
      
      <div [@pulse]="pulseState" class="demo-box mt-3 bg-success">
        <p>Pulse animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Swing Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerSwing()">
        Swing
      </button>
      
      <div [@swing]="swingState" class="demo-box mt-3 bg-warning">
        <p>Swing animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Flash Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerFlash()">
        Flash
      </button>
      
      <div [@flash]="flashState" class="demo-box mt-3 bg-info">
        <p>Flash animation</p>
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
    trigger('bounce', [
      state('inactive', style({
        transform: 'translateY(0)'
      })),
      state('active', style({
        transform: 'translateY(0)'
      })),
      transition('inactive => active', [
        animate('1s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-20px)', offset: 0.2 }),
          style({ transform: 'translateY(0)', offset: 0.4 }),
          style({ transform: 'translateY(-10px)', offset: 0.6 }),
          style({ transform: 'translateY(0)', offset: 0.8 }),
          style({ transform: 'translateY(-5px)', offset: 0.9 }),
          style({ transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ]),
    
    trigger('shake', [
      state('inactive', style({
        transform: 'translateX(0)'
      })),
      state('active', style({
        transform: 'translateX(0)'
      })),
      transition('inactive => active', [
        animate('0.6s', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.5 }),
          style({ transform: 'translateX(10px)', offset: 0.6 }),
          style({ transform: 'translateX(-10px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(-5px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ]),
    
    trigger('pulse', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', [
        animate('0.7s', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),
    
    trigger('swing', [
      state('inactive', style({
        transform: 'rotate(0)',
        transformOrigin: 'top center'
      })),
      state('active', style({
        transform: 'rotate(0)',
        transformOrigin: 'top center'
      })),
      transition('inactive => active', [
        animate('1s', keyframes([
          style({ transform: 'rotate(0)', offset: 0 }),
          style({ transform: 'rotate(15deg)', offset: 0.2 }),
          style({ transform: 'rotate(-10deg)', offset: 0.4 }),
          style({ transform: 'rotate(5deg)', offset: 0.6 }),
          style({ transform: 'rotate(-5deg)', offset: 0.8 }),
          style({ transform: 'rotate(0)', offset: 1 })
        ]))
      ])
    ]),
    
    trigger('flash', [
      state('inactive', style({
        opacity: 1
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', [
        animate('0.8s', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 0.25 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0, offset: 0.75 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class KeyframesBasicComponent {
  bounceState = 'inactive';
  shakeState = 'inactive';
  pulseState = 'inactive';
  swingState = 'inactive';
  flashState = 'inactive';
  
  triggerBounce() {
    this.bounceState = 'active';
    setTimeout(() => this.bounceState = 'inactive', 1100);
  }
  
  triggerShake() {
    this.shakeState = 'active';
    setTimeout(() => this.shakeState = 'inactive', 700);
  }
  
  triggerPulse() {
    this.pulseState = 'active';
    setTimeout(() => this.pulseState = 'inactive', 800);
  }
  
  triggerSwing() {
    this.swingState = 'active';
    setTimeout(() => this.swingState = 'inactive', 1100);
  }
  
  triggerFlash() {
    this.flashState = 'active';
    setTimeout(() => this.flashState = 'inactive', 900);
  }
}
