import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-projection-example',
  template: `
    <div class="example-container">
      <p>
        Basic content projection allows us to create reusable containers like cards
        that can accept any content.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-card&gt;
  &lt;h3&gt;Card Title&lt;/h3&gt;
  &lt;p&gt;This content is projected into the card component.&lt;/p&gt;
&lt;/app-card&gt;</pre>
      </div>
      
      <div class="example-row">
        <app-card>
          <h3>Basic Card</h3>
          <p>This is a basic example of content projection. Any content placed between the app-card tags gets projected into the card.</p>
          <button>Click Me</button>
        </app-card>
      </div>
      
      <div class="example-row mt-4">
        <app-card [elevated]="true">
          <h3>Elevated Card</h3>
          <p>This card has the elevated property set to true.</p>
          <p>Content projection allows you to pass in <strong>any HTML content</strong>, including:</p>
          <ul>
            <li>Text and formatting</li>
            <li>Images and media</li>
            <li>Other components</li>
            <li>Interactive elements</li>
          </ul>
          <button>Learn More</button>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
    }
    
    .example-row {
      margin-bottom: 1rem;
    }
  `]
})
export class BasicProjectionExampleComponent {}
