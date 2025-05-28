import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Smart-Presentational Pattern
import { UserContainerComponent } from './smart-presentational/container/user-container.component';
import { UserListComponent } from './smart-presentational/presentation/user-list.component';
import { UserDetailComponent } from './smart-presentational/presentation/user-detail.component';

// Compound Component Pattern
import { AccordionComponent } from './compound-pattern/compound.component';
import { CompoundItemComponent } from './compound-pattern/compound-item.component';

// Higher-Order Component Pattern
import { HighOrderExampleComponent, DataDisplayComponent } from './high-order/high-order.component';
import { withLoading } from './high-order/with-loading.hoc';

const DataDisplayWithLoading = withLoading(DataDisplayComponent);

@NgModule({
  declarations: [
    AppComponent,
    // Smart-Presentational Pattern
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    // Compound Component Pattern
    AccordionComponent,
    CompoundItemComponent,
    // Higher-Order Component Pattern
    HighOrderExampleComponent,
    DataDisplayComponent,
    DataDisplayWithLoading
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }