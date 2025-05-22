import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdvancedAnimationsComponent } from './advanced-animations.component';
import { AnimationCallbacksComponent } from './animation-callbacks/animation-callbacks.component';
import { ConditionalAnimationsComponent } from './conditional-animations/conditional-animations.component';
import { ParallelSequentialComponent } from './parallel-sequential/parallel-sequential.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedAnimationsComponent,
    children: [
      { path: 'callbacks', component: AnimationCallbacksComponent },
      { path: 'conditional', component: ConditionalAnimationsComponent },
      { path: 'parallel-sequential', component: ParallelSequentialComponent },
      { path: '', redirectTo: 'callbacks', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    AdvancedAnimationsComponent,
    AnimationCallbacksComponent,
    ConditionalAnimationsComponent,
    ParallelSequentialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdvancedAnimationsModule { }
