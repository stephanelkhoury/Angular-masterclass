import { Component } from '@angular/core';

@Component({
  selector: 'app-route-child-two',
  template: `
    <div class="card">
      <div class="card-header bg-success text-white">
        <h3>Page Two</h3>
      </div>
      <div class="card-body">
        <h4>Middle Page</h4>
        <p>
          This is the second page in our route animation sequence.
          Navigation direction determines the animation used.
        </p>
        <div class="alert alert-info">
          <strong>Animation Info:</strong> 
          Moving from Page Two to Page One will use a slide right animation.
          Moving from Page Two to Page Three will use a slide left animation.
        </div>
        <p>
          Route animations enhance user experience by providing visual context for navigation.
        </p>
      </div>
    </div>
  `
})
export class RouteChildTwoComponent { }
