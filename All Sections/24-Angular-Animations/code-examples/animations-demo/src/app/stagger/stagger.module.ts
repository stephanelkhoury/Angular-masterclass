import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StaggerComponent } from './stagger.component';
import { ListStaggerComponent } from './list-stagger/list-stagger.component';

const routes: Routes = [
  { path: '', component: StaggerComponent }
];

@NgModule({
  declarations: [
    StaggerComponent,
    ListStaggerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class StaggerModule { }
