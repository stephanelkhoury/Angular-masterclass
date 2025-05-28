import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { ComponentTestsRoutingModule } from './component-tests-routing.module';
import { ComponentTestsComponent } from './component-tests.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentTestsComponent,
    CounterComponent,
    UserProfileComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentTestsRoutingModule
  ]
})
export class ComponentTestsModule { }
