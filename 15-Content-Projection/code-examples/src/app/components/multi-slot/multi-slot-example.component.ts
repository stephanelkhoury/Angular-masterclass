import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot-example',
  template: `
    <div class="example-container">
      <p>
        Multi-slot content projection allows us to project content into specific parts of a component
        using the <code>select</code> attribute on <code>ng-content</code> elements.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-fancy-card&gt;
  &lt;div card-header&gt;
    &lt;h3&gt;Card Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div card-body&gt;
    &lt;p&gt;This is the main content of the card.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div card-footer&gt;
    &lt;button&gt;Action Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/app-fancy-card&gt;</pre>
      </div>
      
      <div class="example-grid">
        <!-- Example 1: Full card with header, body, and footer -->
        <app-fancy-card [elevated]="true">
          <div card-header>
            <h3>Complete Card</h3>
          </div>
          <div card-body>
            <p>This card has all three sections: header, body, and footer.</p>
            <p>Each section is projected into a specific slot in the component.</p>
          </div>
          <div card-footer>
            <div class="footer-actions">
              <button class="primary-btn">Save</button>
              <button class="secondary-btn">Cancel</button>
            </div>
          </div>
        </app-fancy-card>
        
        <!-- Example 2: Card with just header and body -->
        <app-fancy-card>
          <div card-header>
            <h3>Header & Body Only</h3>
          </div>
          <div card-body>
            <p>This card only has a header and body, but no footer.</p>
            <p>The component will automatically hide the footer section.</p>
            <img src="assets/images/placeholder.jpg" alt="Placeholder image" style="max-width: 100%; margin-top: 10px;">
          </div>
        </app-fancy-card>
        
        <!-- Example 3: Card with just body and footer -->
        <app-fancy-card>
          <div card-body>
            <h3>Body & Footer Only</h3>
            <p>This card has no header, just a body and footer.</p>
            <p>The component automatically adjusts its layout.</p>
          </div>
          <div card-footer>
            <div class="progress-bar">
              <div class="progress" style="width: 70%;"></div>
            </div>
            <div class="footer-text">70% Complete</div>
          </div>
        </app-fancy-card>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
    }
    
    .example-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .code-example {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 20px;
      overflow-x: auto;
    }
    
    pre {
      margin: 0;
      white-space: pre-wrap;
    }
    
    .footer-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    
    button {
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      border: none;
    }
    
    .primary-btn {
      background-color: #3f51b5;
      color: white;
    }
    
    .secondary-btn {
      background-color: #e0e0e0;
      color: #333;
    }
    
    .progress-bar {
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 8px;
    }
    
    .progress {
      height: 100%;
      background-color: #4caf50;
    }
    
    .footer-text {
      font-size: 14px;
      color: #666;
      text-align: right;
    }
  `]
})
export class MultiSlotExampleComponent {}
