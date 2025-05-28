import { Component } from '@angular/core';

@Component({
  selector: 'app-route-child-three',
  template: `
    <div class="card">
      <div class="card-header bg-warning text-dark">
        <h3>Page Three</h3>
      </div>
      <div class="card-body">
        <h4>Final Page</h4>
        <p>
          This is the third page in our animation sequence.
          You've now seen all the route animations in this demo.
        </p>
        <div class="alert alert-info">
          <strong>Animation Info:</strong> 
          Moving from Page Three to Page Two will use a slide right animation.
        </div>
        <p>
          Route animations work with Angular's router to create a more engaging user experience.
          The animations help users understand the navigation flow and spatial relationship between pages.
        </p>
      </div>
    </div>
  `
})
export class RouteChildThreeComponent { }
