import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() chartData: any;
  @Input() chartType: ChartType = 'line';
  @Input() chartOptions: any;
  
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  chart: Chart | null = null;
  
  constructor() {}
  
  ngAfterViewInit(): void {
    this.createChart();
  }
  
  createChart(): void {
    if (!this.chartCanvas || !this.chartData) {
      return;
    }
    
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      return;
    }
    
    // Default chart options
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false
        }
      }
    };
    
    const options = this.chartOptions ? { ...defaultOptions, ...this.chartOptions } : defaultOptions;
    
    // Create chart
    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: options
    });
  }
  
  downloadChart(format: string): void {
    if (!this.chart) {
      return;
    }
    
    const link = document.createElement('a');
    link.download = `${this.title.replace(/\s+/g, '-').toLowerCase()}-chart.${format}`;
    
    if (format === 'png') {
      link.href = this.chart.toBase64Image();
    } else {
      // For other formats, you would need additional libraries or server-side processing
      console.log('Only PNG download is supported in this demo');
      return;
    }
    
    link.click();
  }
}
