import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ServiceTestsRoutingModule } from './service-tests-routing.module';
import { ServiceTestsComponent } from './service-tests.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    ServiceTestsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceTestsRoutingModule
  ],
  providers: []
})
export class ServiceTestsModule { }
