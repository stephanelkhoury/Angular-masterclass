import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reducers and Effects
import { reducers, metaReducers } from './core/state/reducers';
import { TaskEffects } from './core/state/effects/task.effects';

// Environment
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { TaskListComponent } from './features/tasks/task-list/task-list.component';
import { TaskItemComponent } from './features/tasks/task-item/task-item.component';
import { TaskFormComponent } from './features/tasks/task-form/task-form.component';
import { TaskFiltersComponent } from './features/tasks/task-filters/task-filters.component';
import { TaskStatsComponent } from './features/tasks/task-stats/task-stats.component';
import { TaskDetailComponent } from './features/tasks/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskFiltersComponent,
    TaskStatsComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // NgRx Store setup
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    
    // NgRx Effects
    EffectsModule.forRoot([TaskEffects]),
    
    // Store DevTools - only in development
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retain last 25 states
      logOnly: environment.production
    }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
