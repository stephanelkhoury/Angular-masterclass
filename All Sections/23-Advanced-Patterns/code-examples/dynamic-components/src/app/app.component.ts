import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid py-4">
      <div class="container">
        <header class="mb-5 text-center">
          <h1>Dynamic Components in Angular</h1>
          <p class="lead">Advanced techniques for creating dynamic UIs</p>
        </header>

        <!-- Tabs for different dynamic component techniques -->
        <ul class="nav nav-tabs mb-4" id="dynamicTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="content-tab" data-bs-toggle="tab" 
                    data-bs-target="#content" type="button" role="tab" 
                    aria-controls="content" aria-selected="true"
                    (click)="activeTab = 'content'">
              Dynamic Content
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="modal-tab" data-bs-toggle="tab"
                    data-bs-target="#modal" type="button" role="tab"
                    aria-controls="modal" aria-selected="false"
                    (click)="activeTab = 'modal'">
              Dynamic Modals
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="form-tab" data-bs-toggle="tab"
                    data-bs-target="#form" type="button" role="tab"
                    aria-controls="form" aria-selected="false"
                    (click)="activeTab = 'form'">
              Dynamic Forms
            </button>
          </li>
        </ul>

        <!-- Tab content -->
        <div class="tab-content" id="dynamicTabContent">
          <div class="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-tab">
            <app-dynamic-content *ngIf="activeTab === 'content'"></app-dynamic-content>
          </div>
          <div class="tab-pane fade" id="modal" role="tabpanel" aria-labelledby="modal-tab">
            <app-dynamic-modal *ngIf="activeTab === 'modal'"></app-dynamic-modal>
          </div>
          <div class="tab-pane fade" id="form" role="tabpanel" aria-labelledby="form-tab">
            <app-dynamic-form *ngIf="activeTab === 'form'"></app-dynamic-form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
    .container {
      max-width: 1200px;
    }
    header {
      padding: 2rem 0;
    }
    .nav-tabs .nav-link {
      color: #495057;
      font-weight: 500;
    }
    .nav-tabs .nav-link.active {
      font-weight: 700;
      color: #007bff;
    }
  `]
})
export class AppComponent {
  activeTab = 'content';
}
