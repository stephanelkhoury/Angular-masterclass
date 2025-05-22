import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  template: `
    <div class="card mb-4">
      <div class="card-header">
        {{ data.title }}
      </div>
      <div class="card-body">
        <canvas #chartCanvas width="400" height="200"></canvas>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-outline-secondary" (click)="refresh()">Refresh Data</button>
        <button class="btn btn-sm btn-outline-primary ms-2" (click)="toggleChartType()">
          Change Chart Type
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  private chart: any;
  private chartType = 'bar';
  
  constructor() { }

  ngOnInit(): void {
    // Chart.js would be initialized here in a real application
  }
  
  ngAfterViewInit(): void {
    this.renderChart();
  }
  
  refresh(): void {
    // Generate new random data
    this.data.data.values = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    this.renderChart();
  }
  
  toggleChartType(): void {
    this.chartType = this.chartType === 'bar' ? 'line' : 'bar';
    this.renderChart();
  }
  
  private renderChart(): void {
    // In a real application, this would use Chart.js or another library
    // For demo purposes, we'll draw a simple visualization
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    
    const { labels, values } = this.data.data;
    const width = 400;
    const height = 200;
    const barWidth = width / (labels.length * 2);
    const maxValue = Math.max(...values, 100);
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw chart background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(40, 10);
    ctx.lineTo(40, height - 20);
    ctx.lineTo(width - 10, height - 20);
    ctx.strokeStyle = '#666';
    ctx.stroke();
    
    // Draw bars or line
    if (this.chartType === 'bar') {
      values.forEach((value, index) => {
        const barHeight = (value / maxValue) * (height - 40);
        const x = 60 + (index * barWidth * 2);
        const y = height - 20 - barHeight;
        
        ctx.fillStyle = `hsl(${210 + index * 20}, 70%, 60%)`;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth/2, height - 5);
        
        // Draw value
        ctx.fillText(value.toString(), x + barWidth/2, y - 5);
      });
    } else {
      // Line chart
      ctx.beginPath();
      values.forEach((value, index) => {
        const x = 60 + (index * barWidth * 2) + barWidth/2;
        const y = height - 20 - (value / maxValue) * (height - 40);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x, height - 5);
      });
      
      ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw points and values
      values.forEach((value, index) => {
        const x = 60 + (index * barWidth * 2) + barWidth/2;
        const y = height - 20 - (value / maxValue) * (height - 40);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(75, 192, 192, 1)';
        ctx.fill();
        
        // Draw value
        ctx.fillStyle = '#333';
        ctx.fillText(value.toString(), x, y - 10);
      });
    }
    
    // Draw chart title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.chartType === 'bar' ? 'Bar Chart' : 'Line Chart', width/2, 15);
  }
}
