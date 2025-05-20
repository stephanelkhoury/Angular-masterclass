import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="message" [ngClass]="type">
      <div class="message-icon" *ngIf="showIcon">
        <ng-content select="[message-icon]"></ng-content>
        <!-- Fallback icon if not provided -->
        <ng-container *ngIf="!hasCustomIcon">
          <span class="default-icon">{{ getDefaultIcon() }}</span>
        </ng-container>
      </div>
      <div class="message-content">
        <div class="message-title" *ngIf="title">{{ title }}</div>
        <div class="message-body">
          <ng-content></ng-content>
        </div>
      </div>
      <div class="message-close" *ngIf="dismissible">
        <button type="button" class="close-button" (click)="onDismiss()">×</button>
      </div>
    </div>
  `,
  styles: [`
    .message {
      display: flex;
      align-items: flex-start;
      padding: 12px 16px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    
    .info {
      background-color: #e3f2fd;
      border-left: 4px solid #2196f3;
    }
    
    .success {
      background-color: #e8f5e9;
      border-left: 4px solid #4caf50;
    }
    
    .warning {
      background-color: #fff8e1;
      border-left: 4px solid #ff9800;
    }
    
    .error {
      background-color: #ffebee;
      border-left: 4px solid #f44336;
    }
    
    .message-icon {
      flex-shrink: 0;
      margin-right: 12px;
    }
    
    .default-icon {
      font-size: 24px;
      line-height: 1;
      display: inline-block;
    }
    
    .info .default-icon {
      color: #2196f3;
    }
    
    .success .default-icon {
      color: #4caf50;
    }
    
    .warning .default-icon {
      color: #ff9800;
    }
    
    .error .default-icon {
      color: #f44336;
    }
    
    .message-content {
      flex-grow: 1;
    }
    
    .message-title {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .message-close {
      flex-shrink: 0;
      margin-left: 12px;
    }
    
    .close-button {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.6;
    }
    
    .close-button:hover {
      opacity: 1;
    }
  `]
})
export class MessageComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() title?: string;
  @Input() showIcon: boolean = true;
  @Input() dismissible: boolean = false;
  
  // Track if the message has been dismissed
  dismissed = false;
  
  // Element reference to check for projected content
  private element: HTMLElement;
  
  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }
  
  get hasCustomIcon(): boolean {
    return this.element.querySelector('[message-icon]') !== null;
  }
  
  getDefaultIcon(): string {
    switch (this.type) {
      case 'info': return 'ℹ️';
      case 'success': return '✓';
      case 'warning': return '⚠️';
      case 'error': return '!';
      default: return 'ℹ️';
    }
  }
  
  onDismiss(): void {
    this.dismissed = true;
  }
}
