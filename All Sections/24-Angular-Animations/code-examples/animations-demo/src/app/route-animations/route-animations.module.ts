import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RouteAnimationsComponent } from './route-animations.component';
import { RouteChildOneComponent } from './route-child-one/route-child-one.component';
import { RouteChildTwoComponent } from './route-child-two/route-child-two.component';
import { RouteChildThreeComponent } from './route-child-three/route-child-three.component';

const routes: Routes = [
  {
    path: '',
    component: RouteAnimationsComponent,
    children: [
      { path: 'one', component: RouteChildOneComponent, data: { animation: 'One' } },
      { path: 'two', component: RouteChildTwoComponent, data: { animation: 'Two' } },
      { path: 'three', component: RouteChildThreeComponent, data: { animation: 'Three' } },
      { path: '', redirectTo: 'one', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    RouteAnimationsComponent,
    RouteChildOneComponent,
    RouteChildTwoComponent,
    RouteChildThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteAnimationsModule { }
