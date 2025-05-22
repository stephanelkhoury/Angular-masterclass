import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-animation-callbacks',
  template: `
    <h2>Animation Callbacks</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Animation Events</h4>
      <button class="btn btn-primary me-2" (click)="toggleState()">
        {{ currentState === 'active' ? 'Deactivate' : 'Activate' }}
      </button>
      
      <div 
        [@animationState]="currentState"
        (@animationState.start)="onAnimationStart($event)" 
        (@animationState.done)="onAnimationDone($event)"
        class="demo-box mt-3 bg-primary">
        Current state: {{ currentState }}
      </div>
    </div>
    
    <div class="mt-4">
      <h5>Animation Log</h5>
      <div class="card">
        <div class="card-body bg-light">
          <ul class="list-group">
            <li *ngFor="let log of animationLog" class="list-group-item">
              {{ log }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="mb-4 mt-4">
      <h4>Animation Chain</h4>
      <button class="btn btn-primary me-2" (click)="startChain()">
        Start Animation Chain
      </button>
      
      <div class="row mt-3">
        <div class="col-md-4" *ngFor="let item of chainItems; let i = index">
          <div 
            [@chainState]="item.state"
            (@chainState.done)="onChainDone(i)"
            class="demo-box bg-success">
            Item {{ i + 1 }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="mb-4 mt-4">
      <h4>Animation Control</h4>
      <div class="mb-3">
        <label for="animationDuration" class="form-label">Animation Speed (ms): {{ animationDuration }}</label>
        <input type="range" class="form-range" id="animationDuration" min="200" max="2000" step="100" [(ngModel)]="animationDuration">
      </div>
      
      <button class="btn btn-primary me-2" (click)="toggleControlledAnimation()">
        {{ controlledState === 'active' ? 'Hide' : 'Show' }}
      </button>
      
      <div 
        [@controlledAnimation]="{value: controlledState, params: {duration: animationDuration}}"
        class="demo-box mt-3 bg-warning">
        Controlled animation
      </div>
    </div>
  `,
  styles: [`
    .demo-box {
      padding: 20px;
      border-radius: 5px;
      color: white;
      margin: 10px 0;
    }
  `],
  animations: [
    trigger('animationState', [
      state('inactive', style({
        backgroundColor: '#0d6efd',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#dc3545',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', [
        animate('0.5s ease-in')
      ]),
      transition('active => inactive', [
        animate('0.5s ease-out')
      ])
    ]),
    
    trigger('chainState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('inactive => active', [
        animate('0.5s ease-out')
      ]),
      transition('active => inactive', [
        animate('0.5s ease-in')
      ])
    ]),
    
    trigger('controlledAnimation', [
      state('inactive', style({
        opacity: 0,
        height: 0,
        padding: 0,
        overflow: 'hidden'
      })),
      state('active', style({
        opacity: 1,
        height: '*',
        padding: '20px'
      })),
      transition('inactive => active', [
        animate('{{duration}}ms ease-out')
      ], { params: { duration: 500 } }),
      transition('active => inactive', [
        animate('{{duration}}ms ease-in')
      ], { params: { duration: 500 } })
    ])
  ]
})
export class AnimationCallbacksComponent {
  currentState = 'inactive';
  animationLog: string[] = [];
  chainItems = [
    { state: 'inactive' },
    { state: 'inactive' },
    { state: 'inactive' }
  ];
  
  controlledState = 'inactive';
  animationDuration = 500;
  
  toggleState() {
    this.currentState = this.currentState === 'active' ? 'inactive' : 'active';
  }
  
  onAnimationStart(event: AnimationEvent) {
    this.animationLog.unshift(`Started: ${event.fromState} => ${event.toState} (${new Date().toLocaleTimeString()})`);
  }
  
  onAnimationDone(event: AnimationEvent) {
    this.animationLog.unshift(`Completed: ${event.fromState} => ${event.toState} (${new Date().toLocaleTimeString()})`);
    if (this.animationLog.length > 10) {
      this.animationLog.pop();
    }
  }
  
  startChain() {
    // Reset all items
    this.chainItems.forEach(item => item.state = 'inactive');
    
    // Start with the first item
    setTimeout(() => {
      this.chainItems[0].state = 'active';
    }, 100);
  }
  
  onChainDone(index: number) {
    if (this.chainItems[index].state === 'active' && index < this.chainItems.length - 1) {
      // Trigger the next item in the chain
      setTimeout(() => {
        this.chainItems[index + 1].state = 'active';
      }, 200);
    }
  }
  
  toggleControlledAnimation() {
    this.controlledState = this.controlledState === 'active' ? 'inactive' : 'active';
  }
}
