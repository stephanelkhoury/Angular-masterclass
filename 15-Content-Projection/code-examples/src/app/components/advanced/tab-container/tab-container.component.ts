import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  template: `
    <div class="tab-container">
      <div class="tab-header">
        <div 
          *ngFor="let tab of tabs; let i = index" 
          class="tab-label" 
          [class.active]="tab.active"
          (click)="selectTab(i)">
          <span *ngIf="tab.icon" class="tab-icon">{{ tab.icon }}</span>
          {{ tab.title }}
        </div>
      </div>
      
      <div class="tab-body">
        <ng-container *ngFor="let tab of tabs">
          <ng-container *ngIf="tab.active" [ngTemplateOutlet]="tab.content"></ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .tab-container {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      background-color: white;
    }
    
    .tab-header {
      display: flex;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .tab-label {
      padding: 12px 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      border-bottom: 2px solid transparent;
      user-select: none;
      display: flex;
      align-items: center;
    }
    
    .tab-label:hover {
      background-color: #eeeeee;
    }
    
    .tab-label.active {
      background-color: white;
      border-bottom-color: #3f51b5;
      color: #3f51b5;
      font-weight: 500;
    }
    
    .tab-icon {
      margin-right: 8px;
    }
    
    .tab-body {
      padding: 16px;
    }
    
    .tab-content {
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  
  ngAfterContentInit(): void {
    // Activate the first tab by default if no tab is active
    const activeTabs = this.tabs.filter(tab => tab.active);
    
    if (activeTabs.length === 0 && this.tabs.first) {
      this.selectTab(0);
    }
  }
  
  selectTab(index: number): void {
    this.tabs.forEach((tab, i) => {
      tab.active = i === index;
    });
  }
}
