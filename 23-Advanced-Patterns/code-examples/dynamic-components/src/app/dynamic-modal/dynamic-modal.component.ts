import { Component, OnInit, Type, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ModalHostDirective } from '../directives/modal-host.directive';

interface ModalConfig {
  title: string;
  componentType: Type<any>;
  data?: any;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

@Component({
  selector: 'app-dynamic-modal',
  template: `
    <div class="dynamic-modal">
      <div class="description-box mb-4">
        <h2>Dynamic Modal System</h2>
        <p>
          This example demonstrates how to create a flexible modal system that can dynamically
          render different content components based on runtime requirements.
        </p>
        <ul>
          <li>Supports programmatic opening and closing of modals</li>
          <li>Can render any component inside the modal body</li>
          <li>Passes data to the modal content</li>
          <li>Handles modal sizes and display options</li>
        </ul>
      </div>

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              Modal Controls
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="openTextModal()">
                    Open Text Modal
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="openImageModal()">
                    Open Image Modal
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="openChartModal()">
                    Open Chart Modal
                  </button>
                </div>
                <div class="col-md-6 mb-3">
                  <button class="btn btn-outline-success w-100" (click)="openFormModal()">
                    Open Form Modal
                  </button>
                </div>
                <div class="col-md-6 mb-3">
                  <button class="btn btn-outline-warning w-100" (click)="openFullScreenModal()">
                    Open Full Screen Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal markup (would use Angular Material, NgBootstrap, etc. in real app) -->
      <div class="modal" [class.show]="isModalOpen" [style.display]="isModalOpen ? 'block' : 'none'">
        <div class="modal-backdrop" (click)="closeModal()"></div>
        <div class="modal-dialog" [class]="'modal-' + (currentModalConfig?.size || 'md')">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ currentModalConfig?.title }}</h5>
              <button *ngIf="currentModalConfig?.showCloseButton !== false" 
                      type="button" class="btn-close" (click)="closeModal()"></button>
            </div>
            <div class="modal-body">
              <ng-template modalHost></ng-template>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
              <button *ngIf="showActionButton" type="button" class="btn btn-primary" (click)="performAction()">
                {{ actionButtonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dynamic-modal {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    .description-box {
      background-color: #fff3e0;
      border-left: 4px solid #ff9800;
      padding: 15px;
      border-radius: 4px;
    }
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1040;
    }
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      z-index: 1050;
      pointer-events: none;
    }
    .modal-dialog {
      position: relative;
      width: auto;
      margin: 1.75rem auto;
      pointer-events: all;
    }
    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      border-radius: 0.3rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
      outline: 0;
    }
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #dee2e6;
    }
    .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: 1rem;
      min-height: 100px;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
      border-top: 1px solid #dee2e6;
      gap: 0.5rem;
    }
    .modal-sm { max-width: 300px; }
    .modal-md { max-width: 500px; }
    .modal-lg { max-width: 800px; }
    .modal-xl { max-width: 1140px; }
  `]
})
export class DynamicModalComponent implements OnInit {
  @ViewChild(ModalHostDirective, { static: true }) modalHost!: ModalHostDirective;
  
  isModalOpen = false;
  currentModalConfig: ModalConfig | null = null;
  showActionButton = false;
  actionButtonText = 'Save';
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  
  openModal(config: ModalConfig): void {
    this.currentModalConfig = {
      showCloseButton: true,
      size: 'md',
      ...config
    };
    
    this.showActionButton = false;
    this.renderComponent();
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      if (this.modalHost) {
        this.modalHost.viewContainerRef.clear();
      }
      this.currentModalConfig = null;
    }, 300);
  }
  
  performAction(): void {
    console.log('Action performed');
    this.closeModal();
  }
  
  openTextModal(): void {
    // Import would be dynamic in a real application
    import('../components/text-card/text-card.component').then(({ TextCardComponent }) => {
      this.openModal({
        title: 'Text Content Modal',
        componentType: TextCardComponent,
        data: {
          title: 'Dynamic Text Content',
          data: {
            content: 'This text content is being displayed inside a dynamically created modal.',
            author: 'Angular Masterclass',
            date: new Date()
          }
        }
      });
    });
  }
  
  openImageModal(): void {
    import('../components/image-card/image-card.component').then(({ ImageCardComponent }) => {
      this.openModal({
        title: 'Image View Modal',
        componentType: ImageCardComponent,
        size: 'lg',
        data: {
          title: 'Dynamic Image Content',
          data: {
            imageUrl: 'https://picsum.photos/800/400?random=' + Date.now(),
            caption: 'A beautiful landscape image loaded dynamically in a modal'
          }
        }
      });
    });
  }
  
  openChartModal(): void {
    import('../components/chart-card/chart-card.component').then(({ ChartCardComponent }) => {
      this.openModal({
        title: 'Data Visualization Modal',
        componentType: ChartCardComponent,
        size: 'lg',
        data: {
          title: 'Monthly Sales Data',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            values: [65, 59, 80, 81, 56]
          }
        }
      });
    });
  }
  
  openFormModal(): void {
    // In a real app, would import a form component
    this.openModal({
      title: 'User Information Form',
      componentType: TextCardComponent, // Placeholder
      size: 'md',
      data: {
        title: 'Please complete the form',
        data: {
          content: 'This would be a form component in a real application.',
          author: 'Form System',
          date: new Date()
        }
      }
    });
    this.showActionButton = true;
    this.actionButtonText = 'Submit';
  }
  
  openFullScreenModal(): void {
    import('../components/image-card/image-card.component').then(({ ImageCardComponent }) => {
      this.openModal({
        title: 'Full Screen Content',
        componentType: ImageCardComponent,
        size: 'xl',
        showCloseButton: true,
        data: {
          title: 'Immersive Content Experience',
          data: {
            imageUrl: 'https://picsum.photos/1200/600?random=' + Date.now(),
            caption: 'An immersive full-screen experience with dynamic content'
          }
        }
      });
    });
  }
  
  private renderComponent(): void {
    if (!this.currentModalConfig || !this.modalHost) {
      return;
    }
    
    const { componentType, data } = this.currentModalConfig;
    
    // Clear previous content
    this.modalHost.viewContainerRef.clear();
    
    // Create component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    
    // Create component
    const componentRef = this.modalHost.viewContainerRef.createComponent(componentFactory);
    
    // Pass data to component
    if (data) {
      (componentRef.instance as any).data = data;
    }
  }
}
