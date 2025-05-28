import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, group, sequence } from '@angular/animations';

@Component({
  selector: 'app-parallel-sequential',
  template: `
    <h2>Parallel & Sequential Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Sequential Animation</h4>
      <button class="btn btn-primary me-2" (click)="toggleSequential()">
        {{ sequentialState === 'active' ? 'Reset' : 'Animate' }}
      </button>
      
      <div [@sequentialAnimation]="sequentialState" class="demo-box mt-3 bg-primary">
        <div class="inner-box bg-light"></div>
        <div class="inner-box bg-secondary"></div>
        <div class="inner-box bg-dark"></div>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Parallel Animation</h4>
      <button class="btn btn-primary me-2" (click)="toggleParallel()">
        {{ parallelState === 'active' ? 'Reset' : 'Animate' }}
      </button>
      
      <div [@parallelAnimation]="parallelState" class="demo-box mt-3 bg-success">
        <div class="inner-box bg-light"></div>
        <div class="inner-box bg-secondary"></div>
        <div class="inner-box bg-dark"></div>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Complex Animation</h4>
      <button class="btn btn-primary me-2" (click)="toggleComplex()">
        {{ complexState === 'active' ? 'Reset' : 'Animate' }}
      </button>
      
      <div [@complexAnimation]="complexState" class="demo-box complex-box mt-3 bg-warning">
        <div class="inner-box bg-light"></div>
        <div class="inner-box bg-secondary"></div>
        <div class="inner-box bg-dark"></div>
        <div class="inner-box-circle bg-danger"></div>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Custom Sequence</h4>
      <p class="text-muted">Select an animation pattern to see how different ordering affects the animation.</p>
      
      <div class="btn-group mb-3">
        <button class="btn btn-outline-primary" [class.active]="customSequenceType === 'all-parallel'" (click)="setCustomSequence('all-parallel')">
          All Parallel
        </button>
        <button class="btn btn-outline-primary" [class.active]="customSequenceType === 'all-sequence'" (click)="setCustomSequence('all-sequence')">
          All Sequential
        </button>
        <button class="btn btn-outline-primary" [class.active]="customSequenceType === 'mixed'" (click)="setCustomSequence('mixed')">
          Mixed
        </button>
      </div>
      <div>
        <button class="btn btn-primary me-2" (click)="triggerCustomSequence()">
          Run Animation
        </button>
      </div>
      
      <div [@customSequence]="{value: customSequenceState, params: {type: customSequenceType}}" class="demo-box custom-box mt-3 bg-info">
        <div class="inner-box-custom bg-light" data-index="0"></div>
        <div class="inner-box-custom bg-secondary" data-index="1"></div>
        <div class="inner-box-custom bg-dark" data-index="2"></div>
        <div class="inner-box-custom bg-danger" data-index="3"></div>
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
      min-height: 150px;
      position: relative;
    }
    
    .inner-box {
      width: 50px;
      height: 50px;
      margin: 10px;
      display: inline-block;
    }
    
    .inner-box-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 10px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    .complex-box {
      overflow: hidden;
    }
    
    .custom-box {
      height: 200px;
      position: relative;
    }
    
    .inner-box-custom {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 10px;
    }
    
    .inner-box-custom[data-index="0"] { left: 10px; }
    .inner-box-custom[data-index="1"] { left: 60px; }
    .inner-box-custom[data-index="2"] { left: 110px; }
    .inner-box-custom[data-index="3"] { left: 160px; }
    
    .btn-outline-primary.active {
      background-color: #0d6efd;
      color: white;
    }
  `],
  animations: [
    trigger('sequentialAnimation', [
      state('inactive', style({
        backgroundColor: '#0d6efd'
      })),
      state('active', style({
        backgroundColor: '#20c997'
      })),
      transition('inactive => active', [
        // Animate the container first
        animate('0.3s', style({ backgroundColor: '#20c997' })),
        
        // Then animate each box in sequence
        query('.inner-box', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          sequence([
            animate('0.3s', style({ opacity: 1, transform: 'translateX(0)' })),
            animate('0.2s', style({ backgroundColor: '#fd7e14' })),
            animate('0.2s', style({ backgroundColor: '*' }))
          ])
        ])
      ]),
      transition('active => inactive', [
        // Reset animation
        animate('0.3s')
      ])
    ]),
    
    trigger('parallelAnimation', [
      state('inactive', style({
        backgroundColor: '#198754'
      })),
      state('active', style({
        backgroundColor: '#ffc107'
      })),
      transition('inactive => active', [
        // Animate container and all boxes in parallel
        group([
          animate('0.5s', style({ backgroundColor: '#ffc107' })),
          query('.inner-box', [
            style({ opacity: 0, transform: 'scale(0.5)' }),
            animate('0.5s', style({ opacity: 1, transform: 'scale(1)' }))
          ]),
        ])
      ]),
      transition('active => inactive', [
        animate('0.3s')
      ])
    ]),
    
    trigger('complexAnimation', [
      state('inactive', style({
        backgroundColor: '#ffc107',
        borderRadius: '5px'
      })),
      state('active', style({
        backgroundColor: '#6610f2',
        borderRadius: '25px'
      })),
      transition('inactive => active', [
        // First, start changing the background
        animate('0.7s', style({ backgroundColor: '#6610f2' })),
        
        // In parallel, change border radius and animate boxes
        group([
          animate('0.5s', style({ borderRadius: '25px' })),
          
          // Animate first box immediately
          query('.inner-box:nth-child(1)', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s 0.1s ease-out', style({ transform: 'translateX(0)' }))
          ]),
          
          // Sequence the animation of the second and third boxes
          query('.inner-box:nth-child(2), .inner-box:nth-child(3)', [
            style({ transform: 'translateY(100%)' }),
            stagger('0.2s', [
              animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
            ])
          ]),
          
          // Animate the circle with a delay
          query('.inner-box-circle', [
            style({ transform: 'scale(0)' }),
            animate('0.5s 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'scale(1)' }))
          ])
        ])
      ]),
      transition('active => inactive', [
        animate('0.5s')
      ])
    ]),
    
    trigger('customSequence', [
      state('inactive', style({ /* default state */ })),
      state('sequence', style({ /* same as default */ })),
      state('parallel', style({ /* same as default */ })),
      state('mixed', style({ /* same as default */ })),
      
      // Dynamic transition based on parameter
      transition('inactive => *', [
        style({ /* reset style */ }),
        
        // All-parallel animation pattern
        group([
          // Container animation
          animate('0.5s ease-out', style({ backgroundColor: '#6610f2' })),
          
          // Each element can have different animations
          query('.inner-box-custom[data-index="0"]', [
            style({ transform: 'translateY(150px)', opacity: 0 }),
            animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="1"]', [
            style({ transform: 'scale(0)', opacity: 0 }),
            animate('0.7s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="2"]', [
            style({ transform: 'rotate(-90deg)', opacity: 0 }),
            animate('0.5s ease-out', style({ transform: 'rotate(0)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="3"]', [
            style({ transform: 'translateX(50px)', opacity: 0 }),
            animate('0.4s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ])
      ], { params: { type: 'all-parallel' }}),
      
      // All sequential pattern
      transition('inactive => *', [
        style({ /* reset style */ }),
        
        // First animate the container
        animate('0.3s ease-out', style({ backgroundColor: '#6610f2' })),
        
        // Then sequentially animate each element
        sequence([
          query('.inner-box-custom[data-index="0"]', [
            style({ transform: 'translateY(150px)', opacity: 0 }),
            animate('0.4s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="1"]', [
            style({ transform: 'scale(0)', opacity: 0 }),
            animate('0.4s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="2"]', [
            style({ transform: 'rotate(-90deg)', opacity: 0 }),
            animate('0.4s ease-out', style({ transform: 'rotate(0)', opacity: 1 }))
          ]),
          query('.inner-box-custom[data-index="3"]', [
            style({ transform: 'translateX(50px)', opacity: 0 }),
            animate('0.4s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ])
      ], { params: { type: 'all-sequence' }}),
      
      // Mixed pattern (some sequential, some parallel)
      transition('inactive => *', [
        style({ /* reset style */ }),
        
        // First animate the container
        animate('0.3s ease-out', style({ backgroundColor: '#6610f2' })),
        
        // Then mix sequential and parallel animations
        sequence([
          // First two elements in parallel
          group([
            query('.inner-box-custom[data-index="0"]', [
              style({ transform: 'translateY(150px)', opacity: 0 }),
              animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            query('.inner-box-custom[data-index="1"]', [
              style({ transform: 'scale(0)', opacity: 0 }),
              animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
            ])
          ]),
          
          // Then the next two elements in parallel
          group([
            query('.inner-box-custom[data-index="2"]', [
              style({ transform: 'rotate(-90deg)', opacity: 0 }),
              animate('0.5s ease-out', style({ transform: 'rotate(0)', opacity: 1 }))
            ]),
            query('.inner-box-custom[data-index="3"]', [
              style({ transform: 'translateX(50px)', opacity: 0 }),
              animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
            ])
          ])
        ])
      ], { params: { type: 'mixed' }})
    ])
  ]
})
export class ParallelSequentialComponent {
  sequentialState = 'inactive';
  parallelState = 'inactive';
  complexState = 'inactive';
  customSequenceType = 'all-parallel';
  customSequenceState = 'inactive';
  
  toggleSequential() {
    this.sequentialState = this.sequentialState === 'active' ? 'inactive' : 'active';
  }
  
  toggleParallel() {
    this.parallelState = this.parallelState === 'active' ? 'inactive' : 'active';
  }
  
  toggleComplex() {
    this.complexState = this.complexState === 'active' ? 'inactive' : 'active';
  }
  
  setCustomSequence(type: string) {
    this.customSequenceType = type;
  }
  
  triggerCustomSequence() {
    // Reset the state first to trigger the animation again
    this.customSequenceState = 'inactive';
    
    setTimeout(() => {
      this.customSequenceState = this.customSequenceType;
    }, 10);
  }
}
