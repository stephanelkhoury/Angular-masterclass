import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-stagger',
  template: `
    <h2>Stagger Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Basic Stagger Effect</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="staggerDelay" class="form-label">Stagger Delay: {{ staggerDelay }}ms</label>
            <input type="range" class="form-range" id="staggerDelay" 
                  min="30" max="300" step="10" [(ngModel)]="staggerDelay">
          </div>
          
          <button class="btn btn-primary me-2" (click)="showGrid()">Show Grid</button>
          <button class="btn btn-danger me-2" (click)="hideGrid()">Hide Grid</button>
        </div>
      </div>
      
      <div class="grid-container mt-3" [@gridAnimation]="gridState">
        <div class="grid-item" *ngFor="let item of gridItems">{{ item }}</div>
      </div>
    </div>
    
    <app-list-stagger></app-list-stagger>
  `,
  styles: [`
    .grid-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      max-width: 600px;
    }
    
    .grid-item {
      background-color: #0d6efd;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
    }
  `],
  animations: [
    trigger('gridAnimation', [
      transition('void => *', [
        query('.grid-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('{{ delay }}ms', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ], { params: { delay: 50 } }),
      
      transition('* => void', [
        query('.grid-item', [
          style({ opacity: 1 }),
          stagger('{{ delay }}ms', [
            animate('0.3s ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ], { params: { delay: 50 } })
    ])
  ]
})
export class StaggerComponent {
  gridState = 'void';
  staggerDelay = 50;
  gridItems = Array.from({ length: 25 }, (_, i) => i + 1);
  
  showGrid() {
    this.gridState = 'visible';
  }
  
  hideGrid() {
    this.gridState = 'void';
  }
}
