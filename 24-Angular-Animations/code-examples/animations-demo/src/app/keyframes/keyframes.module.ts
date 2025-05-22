import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { KeyframesComponent } from './keyframes.component';
import { KeyframesBasicComponent } from './keyframes-basic/keyframes-basic.component';
import { KeyframesAdvancedComponent } from './keyframes-advanced/keyframes-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: KeyframesComponent,
    children: [
      { path: 'basic', component: KeyframesBasicComponent },
      { path: 'advanced', component: KeyframesAdvancedComponent },
      { path: '', redirectTo: 'basic', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    KeyframesComponent,
    KeyframesBasicComponent,
    KeyframesAdvancedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KeyframesModule { }
