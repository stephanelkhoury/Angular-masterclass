import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <header class="bg-dark text-white py-3 mb-4">
        <div class="container">
          <h1>Advanced Component Patterns in Angular</h1>
          <p class="lead mb-0">Exploring advanced patterns for building scalable and maintainable Angular applications</p>
        </div>
      </header>

      <div class="container mb-5">
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header bg-primary text-white">
                <h2 class="mb-0">Component Design Patterns</h2>
              </div>
              <div class="card-body">
                <p>
                  This demo showcases three powerful component design patterns that help 
                  create maintainable Angular applications with clear separation of concerns:
                </p>
                <ul>
                  <li><strong>Smart/Container & Presentational Pattern</strong> - Separates data management from UI rendering</li>
                  <li><strong>Compound Component Pattern</strong> - Creates cohesive component groups with shared state</li>
                  <li><strong>Higher-Order Component (HOC) Pattern</strong> - Enhances components with additional functionality</li>
                </ul>
                <p>
                  Each pattern helps solve different architectural challenges in Angular applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pattern Demos -->
        <section class="mb-5">
          <app-user-container></app-user-container>
        </section>

        <section class="mb-5">
          <app-accordion>
            <app-accordion-item title="What are Component Design Patterns?">
              Component design patterns are reusable solutions to common problems that arise 
              when building UI components. They help organize code, improve reusability, and 
              create a consistent development experience across teams.
            </app-accordion-item>
            
            <app-accordion-item title="When to Use Smart/Presentational Pattern">
              Use the Smart/Presentational pattern when you want to separate the concerns of 
              data fetching and business logic from UI rendering. This makes components more 
              reusable, easier to test, and improves maintainability.
            </app-accordion-item>
            
            <app-accordion-item title="When to Use Compound Components">
              Use Compound Components when you have a group of components that need to share state
              and work together as a cohesive unit. Examples include tabs, accordions, form components,
              and other complex UI elements with internal state.
            </app-accordion-item>
            
            <app-accordion-item title="When to Use Higher-Order Components">
              Use HOCs when you need to add cross-cutting concerns to multiple components, such as
              loading states, authentication checks, or logging. HOCs let you extract and reuse this
              logic across your application.
            </app-accordion-item>
          </app-accordion>
        </section>

        <section class="mb-5">
          <app-high-order-example></app-high-order-example>
        </section>

      </div>

      <footer class="bg-light py-3 mt-5">
        <div class="container">
          <p class="text-center mb-0">
            Angular Advanced Component Patterns Demo
          </p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
    section {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
    }
  `]
})
export class AppComponent {
  title = 'Component Design Patterns';
}