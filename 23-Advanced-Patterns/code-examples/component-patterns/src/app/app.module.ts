import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskListContainerComponent } from './smart-presentational/container/task-list-container.component';
import { TaskListPresentationComponent } from './smart-presentational/presentation/task-list-presentation.component';
import { TaskListItemComponent } from './smart-presentational/presentation/task-list-item.component';
import { CompoundComponent } from './compound-pattern/compound.component';
import { CompoundItemComponent } from './compound-pattern/compound-item.component';
import { HighOrderComponent } from './high-order/high-order.component';
import { withLoading } from './high-order/with-loading.hoc';

@NgModule({
  declarations: [
    AppComponent,
    TaskListContainerComponent,
    TaskListPresentationComponent,
    TaskListItemComponent,
    CompoundComponent,
    CompoundItemComponent,
    HighOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
