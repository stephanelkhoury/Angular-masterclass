import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    StatCardComponent,
    RecentActivityComponent,
    DashboardChartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
