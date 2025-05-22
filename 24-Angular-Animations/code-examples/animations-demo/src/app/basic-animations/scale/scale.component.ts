import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-scale',
  template: `
    <h2>Scale Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Simple Scale</h4>
      <button class="btn btn-primary me-2" (click)="toggleScale()">
        {{ isScaleVisible ? 'Hide' : 'Show' }}
      </button>
      
      <div [@simpleScale]="isScaleVisible ? 'visible' : 'hidden'" class="demo-box mt-3 bg-primary">
        <p>Simple scale animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Scale from Origin</h4>
      <div class="btn-group mb-2">
        <button class="btn btn-outline-primary" (click)="setOrigin('center')">Center</button>
        <button class="btn btn-outline-primary" (click)="setOrigin('top left')">Top Left</button>
        <button class="btn btn-outline-primary" (click)="setOrigin('top right')">Top Right</button>
        <button class="btn btn-outline-primary" (click)="setOrigin('bottom left')">Bottom Left</button>
        <button class="btn btn-outline-primary" (click)="setOrigin('bottom right')">Bottom Right</button>
      </div>
      <div>
        <button class="btn btn-primary me-2" (click)="toggleOriginScale()">
          {{ isOriginScaleVisible ? 'Hide' : 'Show' }}
        </button>
      </div>
      
      <div 
        [@originScale]="{value: isOriginScaleVisible ? 'visible' : 'hidden', params: {origin: scaleOrigin}}" 
        class="demo-box mt-3 bg-success"
        [style.transform-origin]="scaleOrigin">
        <p>Scaling from {{ scaleOrigin }}</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Bounce Effect</h4>
      <button class="btn btn-primary me-2" (click)="triggerBounce()">
        Bounce
      </button>
      
      <div [@bounceEffect]="bounceState" class="demo-box mt-3 bg-warning">
        <p>Bounce scale effect</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Pulse Effect</h4>
      <button class="btn btn-primary me-2" (click)="togglePulse()">
        {{ isPulsing ? 'Stop' : 'Start' }} Pulsing
      </button>
      
      <div [@pulseEffect]="isPulsing ? 'pulse' : 'noPulse'" class="demo-box mt-3 bg-danger">
        <p>Pulsing scale effect</p>
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
    trigger('simpleScale', [
      state('visible', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.3s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ])
    ]),
    
    trigger('originScale', [
      state('visible', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('hidden => visible', [
        animate('0.5s ease-out')
      ]),
      transition('visible => hidden', [
        animate('0.3s ease-in')
      ])
    ]),
    
    trigger('bounceEffect', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      state('active', style({
        transform: 'scale(1)',
      })),
      transition('inactive => active', [
        animate('0.5s', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.2)', offset: 0.3 }),
          style({ transform: 'scale(0.9)', offset: 0.6 }),
          style({ transform: 'scale(1.05)', offset: 0.8 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),
    
    trigger('pulseEffect', [
      state('noPulse', style({
        transform: 'scale(1)'
      })),
      state('pulse', style({
        transform: 'scale(1)'
      })),
      transition('noPulse => pulse', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ]),
      transition('pulse => pulse', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ScaleComponent {
  isScaleVisible = true;
  isOriginScaleVisible = true;
  scaleOrigin = 'center';
  bounceState = 'inactive';
  isPulsing = false;
  
  toggleScale() {
    this.isScaleVisible = !this.isScaleVisible;
  }
  
  toggleOriginScale() {
    this.isOriginScaleVisible = !this.isOriginScaleVisible;
  }
  
  setOrigin(origin: string) {
    this.scaleOrigin = origin;
    if (!this.isOriginScaleVisible) {
      this.isOriginScaleVisible = true;
    }
  }
  
  triggerBounce() {
    this.bounceState = 'active';
    setTimeout(() => {
      this.bounceState = 'inactive';
    }, 600);
  }
  
  togglePulse() {
    this.isPulsing = !this.isPulsing;
  }
}
