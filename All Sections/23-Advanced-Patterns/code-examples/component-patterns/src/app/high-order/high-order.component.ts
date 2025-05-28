import { Component, Input } from '@angular/core';
import { withLoading } from './with-loading.hoc';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, mergeMap } from 'rxjs/operators';

// Define a basic data display component
@Component({
  selector: 'app-data-display',
  template: `
    <div class="card">
      <div class="card-header">
        Data Display Component
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ data?.title }}</h5>
        <p class="card-text">{{ data?.content }}</p>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let item of data?.items">
            {{ item }}
          </li>
        </ul>
        <p class="text-muted">This component receives data from HOC wrapper</p>
      </div>
    </div>
  `
})
export class DataDisplayComponent {
  @Input() data: any;
}

// Create an enhanced version of the component using the HOC
const DataDisplayWithLoading = withLoading(DataDisplayComponent);

/**
 * Component demonstrating Higher-Order Component pattern
 */
@Component({
  selector: 'app-high-order-example',
  template: `
    <div class="high-order-component">
      <h2>Higher-Order Component Pattern</h2>
      
      <div class="description-box mb-4">
        <h3>Pattern Description</h3>
        <p>
          The Higher-Order Component (HOC) pattern lets you enhance components with additional functionality:
        </p>
        <ul>
          <li>Creates a new component that wraps the original component</li>
          <li>Adds cross-cutting concerns like loading states, error handling, authentication, etc.</li>
          <li>Follows the principle of composition over inheritance</li>
          <li>Enables reusing component logic across multiple components</li>
        </ul>
        <p>
          Benefits: Code reuse, separation of concerns, and keeping components focused on their primary responsibility.
        </p>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h4>Fast Loading Example (500ms)</h4>
          <app-with-loading 
            [dataSource]="fastData$">
            <app-data-display [data]="fastDataResult"></app-data-display>
          </app-with-loading>
        </div>

        <div class="col-md-6">
          <h4>Slow Loading Example (3s)</h4>
          <app-with-loading 
            [dataSource]="slowData$">
            <app-data-display [data]="slowDataResult"></app-data-display>
          </app-with-loading>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <h4>Error Example</h4>
          <app-with-loading 
            [dataSource]="errorData$">
            <app-data-display [data]="errorDataResult"></app-data-display>
          </app-with-loading>
        </div>

        <div class="col-md-6">
          <h4>Controls</h4>
          <div class="card">
            <div class="card-body">
              <button class="btn btn-primary me-2" (click)="refreshFastData()">
                Refresh Fast Data
              </button>
              <button class="btn btn-secondary me-2" (click)="refreshSlowData()">
                Refresh Slow Data
              </button>
              <button class="btn btn-danger" (click)="refreshErrorData()">
                Refresh Error Data
              </button>
              <hr>
              <p class="text-muted">
                Note: The HOC pattern is implemented in Angular using composition and dependency injection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .high-order-component {
      padding: 20px;
    }
    .description-box {
      background-color: #f8f9fa;
      border-left: 4px solid #fd7e14;
      padding: 15px;
      border-radius: 4px;
    }
  `]
})
export class HighOrderExampleComponent {
  // Data sources with different behaviors
  fastData$!: Observable<any>;
  slowData$!: Observable<any>;
  errorData$!: Observable<any>;
  
  // Results to pass to child components
  fastDataResult: any;
  slowDataResult: any;
  errorDataResult: any;
  
  constructor() {
    this.refreshAllData();
  }
  
  refreshAllData(): void {
    this.refreshFastData();
    this.refreshSlowData();
    this.refreshErrorData();
  }
  
  refreshFastData(): void {
    this.fastData$ = this.getMockData(500).pipe(
      tap(data => this.fastDataResult = data)
    );
  }
  
  refreshSlowData(): void {
    this.slowData$ = this.getMockData(3000).pipe(
      tap(data => this.slowDataResult = data)
    );
  }
  
  refreshErrorData(): void {
    this.errorData$ = this.getErrorData(1000);
  }
  
  private getMockData(delayMs: number): Observable<any> {
    return of({
      title: `Data loaded after ${delayMs}ms delay`,
      content: 'This content was loaded through the HOC pattern',
      items: [
        'Item 1 - HOC adds loading indicators',
        'Item 2 - HOC handles errors',
        'Item 3 - Original component stays clean'
      ]
    }).pipe(delay(delayMs));
  }
  
  private getErrorData(delayMs: number): Observable<any> {
    return of(null).pipe(
      delay(delayMs),
      mergeMap(() => throwError(new Error('Failed to load data! This is a simulated error.')))
    );
  }
}