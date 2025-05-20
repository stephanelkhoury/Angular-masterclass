import { Component, OnInit } from '@angular/core';

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  increase?: boolean;
  percentage?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = false;
  
  // Sample data for stat cards
  statCards: StatCard[] = [
    {
      title: 'Total Sales',
      value: '$15,320',
      icon: 'attach_money',
      color: 'primary',
      increase: true,
      percentage: 12.5
    },
    {
      title: 'New Users',
      value: 340,
      icon: 'person_add',
      color: 'accent',
      increase: true,
      percentage: 5.3
    },
    {
      title: 'Engagement',
      value: '65%',
      icon: 'trending_up',
      color: 'primary',
      increase: true,
      percentage: 8.2
    },
    {
      title: 'Bounce Rate',
      value: '37%',
      icon: 'trending_down',
      color: 'warn',
      increase: false,
      percentage: 3.1
    }
  ];
  
  // Sample chart data
  lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: '#3f51b5',
        tension: 0.1
      }
    ]
  };
  
  barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: '#4CAF50'
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(244, 67, 54, 0.6)',
        borderColor: '#f44336'
      }
    ]
  };
  
  // Sample recent activities
  recentActivities = [
    {
      user: 'Alice Johnson',
      action: 'created a new project',
      object: 'Annual Report',
      time: new Date(new Date().getTime() - 25 * 60000),
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      user: 'Bob Smith',
      action: 'commented on',
      object: 'Q3 Performance Report',
      time: new Date(new Date().getTime() - 2 * 3600000),
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      user: 'Charlie Davis',
      action: 'completed task',
      object: 'Update client information',
      time: new Date(new Date().getTime() - 5 * 3600000),
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      user: 'Diana Miller',
      action: 'updated document',
      object: 'Marketing Strategy',
      time: new Date(new Date().getTime() - 24 * 3600000),
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    
    // Simulate loading data
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
