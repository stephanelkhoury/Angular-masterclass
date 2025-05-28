import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BasicAnimationsComponent } from './basic-animations.component';
import { FadeInOutComponent } from './fade-in-out/fade-in-out.component';
import { SlideComponent } from './slide/slide.component';
import { ScaleComponent } from './scale/scale.component';
import { RotateComponent } from './rotate/rotate.component';

const routes: Routes = [
  {
    path: '',
    component: BasicAnimationsComponent,
    children: [
      { path: 'fade', component: FadeInOutComponent },
      { path: 'slide', component: SlideComponent },
      { path: 'scale', component: ScaleComponent },
      { path: 'rotate', component: RotateComponent },
      { path: '', redirectTo: 'fade', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    BasicAnimationsComponent,
    FadeInOutComponent,
    SlideComponent,
    ScaleComponent,
    RotateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BasicAnimationsModule { }