import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-example',
  template: `
    <div class="example-container">
      <p>
        Conditional content projection allows components to decide whether to render
        projected content based on certain conditions.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-message type="info" title="Information" [showIcon]="true"&gt;
  &lt;span message-icon&gt;🔔&lt;/span&gt;
  This is an informational message with a custom icon.
&lt;/app-message&gt;</pre>
      </div>
      
      <div class="controls">
        <div class="control-group">
          <label>
            <input type="checkbox" [(ngModel)]="showIcons" />
            Show Icons
          </label>
        </div>
        <div class="control-group">
          <label>
            <input type="checkbox" [(ngModel)]="dismissible" />
            Dismissible
          </label>
        </div>
      </div>
      
      <div class="messages-container">
        <!-- Info message with custom icon -->
        <app-message 
          type="info" 
          title="Information Message" 
          [showIcon]="showIcons"
          [dismissible]="dismissible"
          *ngIf="!infoMessageDismissed">
          <span message-icon>🔔</span>
          This is an informational message with a custom icon. Icons can be conditionally shown or hidden.
        </app-message>
        
        <!-- Success message with default icon -->
        <app-message 
          type="success" 
          title="Success Message" 
          [showIcon]="showIcons"
          [dismissible]="dismissible"
          *ngIf="!successMessageDismissed">
          This operation was completed successfully. This message uses the default icon.
        </app-message>
        
        <!-- Warning message with custom HTML content -->
        <app-message 
          type="warning" 
          title="Warning Message" 
          [showIcon]="showIcons"
          [dismissible]="dismissible"
          *ngIf="!warningMessageDismissed">
          <span message-icon>⚡</span>
          <strong>Attention required!</strong> This message contains:
          <ul>
            <li>Custom HTML content</li>
            <li>A custom icon</li>
            <li>Conditional rendering</li>
          </ul>
        </app-message>
        
        <!-- Error message -->
        <app-message 
          type="error" 
          title="Error Message" 
          [showIcon]="showIcons"
          [dismissible]="dismissible"
          *ngIf="!errorMessageDismissed">
          <span message-icon>❌</span>
          An error occurred while processing your request. Please try again later.
        </app-message>
      </div>
      
      <div class="reset-container" *ngIf="anyMessageDismissed">
        <button (click)="resetMessages()">Reset All Messages</button>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
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
    
    .controls {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      padding: 12px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    .control-group {
      display: flex;
      align-items: center;
    }
    
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }
    
    input[type="checkbox"] {
      margin-right: 8px;
    }
    
    .messages-container {
      display: flex;
      flex-direction: column;
    }
    
    .reset-container {
      margin-top: 16px;
      text-align: center;
    }
    
    button {
      padding: 8px 16px;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #e0e0e0;
    }
  `]
})
export class ConditionalExampleComponent {
  showIcons = true;
  dismissible = true;
  
  // Message dismissal state
  infoMessageDismissed = false;
  successMessageDismissed = false;
  warningMessageDismissed = false;
  errorMessageDismissed = false;
  
  get anyMessageDismissed(): boolean {
    return this.infoMessageDismissed || 
           this.successMessageDismissed || 
           this.warningMessageDismissed || 
           this.errorMessageDismissed;
  }
  
  resetMessages(): void {
    this.infoMessageDismissed = false;
    this.successMessageDismissed = false;
    this.warningMessageDismissed = false;
    this.errorMessageDismissed = false;
  }
}
