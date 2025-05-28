import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CompoundItemComponent } from './compound-item.component';

/**
 * Compound Component Pattern - Accordion
 *
 * This pattern creates a component group that works together where:
 * - The parent component manages shared state and behavior
 * - The child components communicate through the parent
 * - The components form a cohesive API when used together
 */
@Component({
  selector: 'app-accordion',
  template: `
    <div class="accordion-component">
      <h2>Accordion (Compound Component Pattern)</h2>

      <div class="description-box mb-4">
        <h3>Pattern Description</h3>
        <p>
          The Compound Component pattern creates components that work together to form a cohesive unit with shared state:
        </p>
        <ul>
          <li>Parent component manages state and coordinates behavior</li>
          <li>Child components communicate through the parent component</li>
          <li>Components offer a clear API when used together</li>
          <li>Implementation details are hidden from the consumer</li>
        </ul>
        <p>
          Benefits: Improves component composition, simplifies state management, and creates intuitive APIs.
        </p>
      </div>

      <div class="accordion">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .accordion-component {
      padding: 20px;
    }
    .description-box {
      background-color: #f8f9fa;
      border-left: 4px solid #6f42c1;
      padding: 15px;
      border-radius: 4px;
    }
    .accordion {
      border: 1px solid #dee2e6;
      border-radius: 0.25rem;
    }
  `]
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(CompoundItemComponent) items!: QueryList<CompoundItemComponent>;
  
  ngAfterContentInit() {
    // Set initial state - first item expanded
    if (this.items && this.items.length > 0) {
      const itemsArray = this.items.toArray();
      itemsArray[0].expanded = true;
      
      // Setup communication between items
      this.items.forEach(item => {
        item.toggle.subscribe(() => this.toggleItem(item));
      });
    }
  }
  
  toggleItem(selectedItem: CompoundItemComponent) {
    // Close all other items when one is toggled
    this.items.forEach(item => {
      if (item !== selectedItem) {
        item.expanded = false;
      }
    });
  }
}