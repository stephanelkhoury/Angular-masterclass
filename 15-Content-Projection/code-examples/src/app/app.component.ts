import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header>
        <h1>Content Projection in Angular</h1>
        <p>This application showcases different techniques for content projection in Angular components.</p>
      </header>

      <main>
        <!-- Basic Content Projection -->
        <section id="basic-projection">
          <div class="example-header">
            <h2>Basic Content Projection</h2>
          </div>
          <app-basic-projection-example></app-basic-projection-example>
        </section>

        <!-- Multi-slot Content Projection -->
        <section id="multi-slot-projection">
          <div class="example-header">
            <h2>Multi-slot Content Projection</h2>
          </div>
          <app-multi-slot-example></app-multi-slot-example>
        </section>

        <!-- Conditional Content Projection -->
        <section id="conditional-projection">
          <div class="example-header">
            <h2>Conditional Content Projection</h2>
          </div>
          <app-conditional-example></app-conditional-example>
        </section>

        <!-- Advanced Content Projection -->
        <section id="advanced-projection">
          <div class="example-header">
            <h2>Advanced Content Projection - Tabs</h2>
          </div>
          <app-advanced-example></app-advanced-example>
        </section>

        <!-- Practical Content Projection Examples -->
        <section id="practical-examples">
          <div class="example-header">
            <h2>Practical Example - Data Grid</h2>
          </div>
          <app-practical-example></app-practical-example>
        </section>
        
        <!-- Bonus Content Projection Example -->
        <section id="bonus-example">
          <div class="example-header">
            <h2>Bonus Example - Interactive Calendar</h2>
          </div>
          <app-bonus-example></app-bonus-example>
        </section>
      </main>
    </div>
  `,
  styles: [`
    header {
      padding: 2rem 0;
      margin-bottom: 2rem;
      border-bottom: 1px solid #e0e0e0;
    }
    
    section {
      margin-bottom: 3rem;
    }
  `]
})
export class AppComponent {
  title = 'Content Projection Examples';
}
