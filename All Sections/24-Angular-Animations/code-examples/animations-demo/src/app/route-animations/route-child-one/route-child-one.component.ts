import { Component } from '@angular/core';

@Component({
  selector: 'app-route-child-one',
  template: `
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h3>Page One</h3>
      </div>
      <div class="card-body">
        <h4>Route Animation Demo</h4>
        <p>
          This is the first page demonstrating route animations.
          Navigate between pages to see different transition effects.
        </p>
        <div class="alert alert-info">
          <strong>Animation Info:</strong> Moving from Page One to Page Two will use a slide left animation.
        </div>
        <p>
          Animations make your application feel more fluid and provide visual feedback to users as they navigate.
        </p>
      </div>
    </div>
  `
})
export class RouteChildOneComponent { }
