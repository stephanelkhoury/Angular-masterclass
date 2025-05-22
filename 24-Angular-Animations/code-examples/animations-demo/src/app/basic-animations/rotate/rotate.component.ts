import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-rotate',
  template: `
    <h2>Rotation Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Simple Rotation</h4>
      <button class="btn btn-primary me-2" (click)="toggleRotate()">
        {{ isRotated ? 'Reset' : 'Rotate' }}
      </button>
      
      <div [@simpleRotate]="isRotated ? 'rotated' : 'default'" class="demo-box mt-3 bg-primary">
        <p>Simple rotation animation</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Rotation with Scale</h4>
      <button class="btn btn-primary me-2" (click)="toggleRotateScale()">
        {{ isRotatedScaled ? 'Reset' : 'Animate' }}
      </button>
      
      <div [@rotateScale]="isRotatedScaled ? 'active' : 'inactive'" class="demo-box mt-3 bg-success">
        <p>Rotation with scale</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Custom Rotation Angle</h4>
      <div class="mb-2">
        <input 
          type="range" 
          class="form-range" 
          min="0" 
          max="360" 
          step="15" 
          [(ngModel)]="rotationDegree">
        <p>{{ rotationDegree }} degrees</p>
      </div>
      <button class="btn btn-primary me-2" (click)="applyCustomRotation()">
        Apply Rotation
      </button>
      
      <div [@customRotate]="{value: 'rotated', params: {degrees: customRotationAngle}}" class="demo-box mt-3 bg-info">
        <p>Custom rotation angle</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Flip Effect</h4>
      <div class="btn-group mb-2">
        <button class="btn btn-outline-primary" (click)="setFlipAxis('X')">Flip X</button>
        <button class="btn btn-outline-primary" (click)="setFlipAxis('Y')">Flip Y</button>
        <button class="btn btn-outline-primary" (click)="setFlipAxis('Z')">Flip Z</button>
      </div>
      <div>
        <button class="btn btn-primary me-2" (click)="toggleFlip()">
          {{ isFlipped ? 'Reset' : 'Flip' }}
        </button>
      </div>
      
      <div [@flipEffect]="{value: isFlipped ? 'flipped' : 'normal', params: {axis: flipAxis}}" 
           class="demo-box mt-3 bg-warning perspective-box">
        <p>Flip effect on {{ flipAxis }} axis</p>
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
    .perspective-box {
      perspective: 1000px;
    }
  `],
  animations: [
    trigger('simpleRotate', [
      state('default', style({
        transform: 'rotate(0deg)'
      })),
      state('rotated', style({
        transform: 'rotate(180deg)'
      })),
      transition('default => rotated', [
        animate('0.5s ease-out')
      ]),
      transition('rotated => default', [
        animate('0.5s ease-in')
      ])
    ]),
    
    trigger('rotateScale', [
      state('inactive', style({
        transform: 'rotate(0deg) scale(1)'
      })),
      state('active', style({
        transform: 'rotate(180deg) scale(1.2)'
      })),
      transition('inactive => active', [
        animate('0.5s ease-in')
      ]),
      transition('active => inactive', [
        animate('0.5s ease-out')
      ])
    ]),
    
    trigger('customRotate', [
      state('rotated', style({
        transform: 'rotate({{degrees}}deg)'
      }), { params: { degrees: 90 } }),
      transition('void => rotated', [
        style({ transform: 'rotate(0deg)' }),
        animate('0.5s ease-out')
      ]),
      transition('rotated => rotated', [
        animate('0.5s ease-out')
      ])
    ]),
    
    trigger('flipEffect', [
      state('normal', style({
        transform: 'rotate{{axis}}(0deg)'
      }), { params: { axis: 'X' } }),
      state('flipped', style({
        transform: 'rotate{{axis}}(180deg)'
      }), { params: { axis: 'X' } }),
      transition('normal => flipped', [
        animate('0.6s ease-in')
      ]),
      transition('flipped => normal', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class RotateComponent {
  isRotated = false;
  isRotatedScaled = false;
  rotationDegree = 90;
  customRotationAngle = 90;
  flipAxis = 'Y';
  isFlipped = false;
  
  toggleRotate() {
    this.isRotated = !this.isRotated;
  }
  
  toggleRotateScale() {
    this.isRotatedScaled = !this.isRotatedScaled;
  }
  
  applyCustomRotation() {
    this.customRotationAngle = this.rotationDegree;
  }
  
  setFlipAxis(axis: string) {
    this.flipAxis = axis;
    if (this.isFlipped) {
      // Trigger animation again
      this.isFlipped = false;
      setTimeout(() => {
        this.isFlipped = true;
      }, 10);
    }
  }
  
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
