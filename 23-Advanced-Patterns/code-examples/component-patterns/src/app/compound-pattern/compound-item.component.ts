import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Child component in the Compound Component Pattern
 * Works together with AccordionComponent
 */
@Component({
  selector: 'app-accordion-item',
  template: `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button 
          class="accordion-button" 
          type="button" 
          [class.collapsed]="!expanded"
          (click)="toggleExpanded()">
          {{ title }}
        </button>
      </h2>
      <div 
        class="accordion-collapse collapse" 
        [class.show]="expanded">
        <div class="accordion-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .accordion-button:not(.collapsed) {
      color: #0c63e4;
      background-color: #e7f1ff;
      box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
    }
    .accordion-button {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem 1.25rem;
      font-size: 1rem;
      color: #212529;
      text-align: left;
      background-color: #fff;
      border: 0;
      border-radius: 0;
      overflow-anchor: none;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;
    }
    .accordion-button.collapsed {
      border-bottom-width: 0;
    }
    .accordion-body {
      padding: 1rem 1.25rem;
    }
  `]
})
export class CompoundItemComponent {
  @Input() title: string = '';
  @Input() expanded: boolean = false;
  
  @Output() toggle = new EventEmitter<void>();
  
  toggleExpanded() {
    this.expanded = !this.expanded;
    this.toggle.emit();
  }
}