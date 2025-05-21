import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <h1>Advanced Component Patterns in Angular</h1>
      
      <div class="card mt-4">
        <div class="card-header">
          <h2>Smart/Presentational Component Pattern</h2>
        </div>
        <div class="card-body">
          <p>
            This pattern separates components into "smart" container components that manage state 
            and business logic, and "presentational" components that are responsible for UI rendering.
          </p>
          <app-task-list-container></app-task-list-container>
        </div>
      </div>
      
      <div class="card mt-4">
        <div class="card-header">
          <h2>Compound Component Pattern</h2>
        </div>
        <div class="card-body">
          <p>
            Compound components allow you to create components that work together and share state 
            implicitly rather than through explicit prop drilling.
          </p>
          <app-compound>
            <app-compound-item title="Item 1" [active]="true">Content for item 1</app-compound-item>
            <app-compound-item title="Item 2">Content for item 2</app-compound-item>
            <app-compound-item title="Item 3">Content for item 3</app-compound-item>
          </app-compound>
        </div>
      </div>
      
      <div class="card mt-4">
        <div class="card-header">
          <h2>Higher-Order Component Pattern</h2>
        </div>
        <div class="card-body">
          <p>
            Higher-order components are functions that take a component and return a new component
            with additional functionality.
          </p>
          <app-high-order></app-high-order>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-header h2 {
      margin: 0;
      font-size: 1.5rem;
    }
  `]
})
export class AppComponent {
  title = 'component-patterns';
}
