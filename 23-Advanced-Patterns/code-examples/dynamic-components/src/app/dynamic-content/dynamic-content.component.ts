import { Component, OnInit, ComponentRef, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { ComponentHostDirective } from '../directives/component-host.directive';
import { TextCardComponent } from '../components/text-card/text-card.component';
import { ImageCardComponent } from '../components/image-card/image-card.component';
import { ChartCardComponent } from '../components/chart-card/chart-card.component';

interface DynamicComponent {
  data: any;
  refresh?: () => void;
}

interface ComponentData {
  type: 'text' | 'image' | 'chart';
  title: string;
  data: any;
}

@Component({
  selector: 'app-dynamic-content',
  template: `
    <div class="dynamic-content">
      <div class="description-box mb-4">
        <h2>Dynamic Content Creation</h2>
        <p>
          This example demonstrates how to dynamically create and render different component types
          at runtime based on data configuration.
        </p>
        <ul>
          <li>Uses ViewContainerRef to programmatically create components</li>
          <li>Passes dynamic data to created components</li>
          <li>Maintains references to component instances for later interaction</li>
        </ul>
      </div>

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              Component Controls
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <button class="btn btn-outline-primary w-100" (click)="addComponent('text')">
                    Add Text Card
                  </button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-outline-primary w-100" (click)="addComponent('image')">
                    Add Image Card
                  </button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-outline-primary w-100" (click)="addComponent('chart')">
                    Add Chart Card
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button class="btn btn-outline-warning w-100" (click)="refreshAll()">
                    Refresh All Components
                  </button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-outline-danger w-100" (click)="clearAll()">
                    Clear All Components
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dynamic-components-container">
        <ng-template componentHost></ng-template>
      </div>
    </div>
  `,
  styles: [`
    .dynamic-content {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    .description-box {
      background-color: #e7f5ff;
      border-left: 4px solid #4dabf7;
      padding: 15px;
      border-radius: 4px;
    }
    .dynamic-components-container {
      margin-top: 20px;
      min-height: 200px;
    }
  `]
})
export class DynamicContentComponent implements OnInit {
  @ViewChild(ComponentHostDirective, { static: true }) componentHost!: ComponentHostDirective;
  
  // Keep references to created components
  private componentRefs: ComponentRef<DynamicComponent>[] = [];
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // Initial setup
  }

  addComponent(type: 'text' | 'image' | 'chart'): void {
    // Generate random data
    const data = this.generateComponentData(type);
    
    // Get the component class based on type
    const componentType = this.getComponentType(type);
    
    // Create the component
    const componentRef = this.createComponent(componentType, data);
    
    // Add to our references array
    this.componentRefs.push(componentRef);
  }
  
  refreshAll(): void {
    // Call refresh method on all component instances
    this.componentRefs.forEach(ref => {
      if (ref.instance.refresh) {
        ref.instance.refresh();
      }
    });
  }
  
  clearAll(): void {
    // Destroy all components and clear the viewContainer
    this.componentHost.viewContainerRef.clear();
    this.componentRefs = [];
  }
  
  private createComponent<T extends DynamicComponent>(component: Type<T>, data: any): ComponentRef<T> {
    // Get the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    
    // Create the component using the ViewContainerRef
    const componentRef = this.componentHost.viewContainerRef.createComponent<T>(componentFactory);
    
    // Set input data
    componentRef.instance.data = data;
    
    return componentRef;
  }
  
  private getComponentType(type: string): Type<any> {
    switch (type) {
      case 'text':
        return TextCardComponent;
      case 'image':
        return ImageCardComponent;
      case 'chart':
        return ChartCardComponent;
      default:
        return TextCardComponent;
    }
  }
  
  private generateComponentData(type: 'text' | 'image' | 'chart'): ComponentData {
    const baseData = {
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Component #${this.componentRefs.length + 1}`
    };
    
    switch (type) {
      case 'text':
        return {
          ...baseData,
          data: {
            content: 'This is dynamically generated text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: `Author ${Math.floor(Math.random() * 100)}`,
            date: new Date()
          }
        };
        
      case 'image':
        return {
          ...baseData,
          data: {
            imageUrl: `https://picsum.photos/400/200?random=${Date.now()}`,
            caption: 'Dynamically loaded random image'
          }
        };
        
      case 'chart':
        return {
          ...baseData,
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            values: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
          }
        };
        
      default:
        return { ...baseData, data: {} };
    }
  }
}
