import { Component, OnInit } from '@angular/core';
import { StatCardData } from './models/stat-card-data.model';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1 class="page-title">Dashboard</h1>
      
      <div class="stats-grid">
        <app-stat-card 
          *ngFor="let stat of stats" 
          [icon]="stat.icon" 
          [title]="stat.title" 
          [value]="stat.value"
          [change]="stat.change"
          [trend]="stat.trend">
        </app-stat-card>
      </div>
      
      <div class="dashboard-grid">
        <app-card title="Sales Overview">
          <app-dashboard-chart></app-dashboard-chart>
        </app-card>
        
        <app-card title="Recent Activity">
          <app-recent-activity></app-recent-activity>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
    }
    
    .page-title {
      margin-bottom: 24px;
      font-size: 28px;
      font-weight: 500;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .dashboard-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
    
    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  stats: StatCardData[] = [
    { 
      icon: '💰', 
      title: 'Revenue', 
      value: '$24,500', 
      change: '+12%',
      trend: 'up'
    },
    { 
      icon: '🛒', 
      title: 'Orders', 
      value: '856', 
      change: '+7%',
      trend: 'up'
    },
    { 
      icon: '👥', 
      title: 'Customers', 
      value: '3,428', 
      change: '+22%',
      trend: 'up'
    },
    { 
      icon: '📊', 
      title: 'Conversion', 
      value: '3.2%', 
      change: '-0.5%',
      trend: 'down'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Dashboard initialization logic
  }
}
