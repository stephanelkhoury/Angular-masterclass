import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Core Components
import { AppComponent } from './app.component';

// Basic Content Projection Components
import { CardComponent } from './components/basic-projection/card/card.component';
import { BasicProjectionExampleComponent } from './components/basic-projection/basic-projection-example.component';

// Multi-slot Content Projection Components
import { FancyCardComponent } from './components/multi-slot/fancy-card/fancy-card.component';
import { MultiSlotExampleComponent } from './components/multi-slot/multi-slot-example.component';

// Conditional Content Projection Components
import { MessageComponent } from './components/conditional/message/message.component';
import { ConditionalExampleComponent } from './components/conditional/conditional-example.component';

// Advanced Content Projection Components
import { TabContainerComponent } from './components/advanced/tab-container/tab-container.component';
import { TabComponent } from './components/advanced/tab/tab.component';
import { AdvancedExampleComponent } from './components/advanced/advanced-example.component';

// Practical Examples Components
import { DataGridComponent } from './components/practical/data-grid/data-grid.component';
import { DataCellDirective } from './components/practical/data-grid/data-cell.directive';
import { DataHeaderDirective } from './components/practical/data-grid/data-header.directive';
import { PracticalExampleComponent } from './components/practical/practical-example.component';

@NgModule({
  declarations: [
    AppComponent,
    
    // Basic Content Projection
    CardComponent,
    BasicProjectionExampleComponent,
    
    // Multi-slot Content Projection
    FancyCardComponent,
    MultiSlotExampleComponent,
    
    // Conditional Content Projection
    MessageComponent,
    ConditionalExampleComponent,
    
    // Advanced Content Projection
    TabContainerComponent,
    TabComponent,
    AdvancedExampleComponent,
    
    // Practical Examples
    DataGridComponent,
    DataCellDirective,
    DataHeaderDirective,
    PracticalExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
