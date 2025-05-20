import { Injectable } from '@angular/core';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class PerformanceMonitorService {
  private metrics: Map<string, PerformanceMetric> = new Map();
  
  constructor() {
    // Listen for performance-related events
    this.setupPerformanceObserver();
  }
  
  /**
   * Start measuring a performance metric
   */
  startMeasure(name: string): void {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}_start`);
    }
  }
  
  /**
   * End measuring a performance metric and store the result
   */
  endMeasure(name: string): number {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}_end`);
      
      try {
        performance.measure(name, `${name}_start`, `${name}_end`);
        const entries = performance.getEntriesByName(name);
        
        if (entries.length > 0) {
          const duration = entries[0].duration;
          this.storeMetric(name, duration);
          
          // Clean up the marks we created
          performance.clearMarks(`${name}_start`);
          performance.clearMarks(`${name}_end`);
          performance.clearMeasures(name);
          
          return duration;
        }
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    }
    
    return 0;
  }
  
  /**
   * Get all captured metrics
   */
  getMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }
  
  /**
   * Set up a PerformanceObserver to monitor long tasks
   */
  private setupPerformanceObserver(): void {
    if (typeof PerformanceObserver !== 'undefined') {
      try {
        // Monitor long tasks that could cause jank
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.storeMetric('long-task', entry.duration);
          });
        });
        
        observer.observe({ entryTypes: ['longtask'] });
        
        // Setup observer for other performance metrics
        const navigationObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            // Store key performance metrics
            if (entry.name === 'first-contentful-paint') {
              this.storeMetric('FCP', entry.startTime);
            }
            
            if (entry.name === 'largest-contentful-paint') {
              this.storeMetric('LCP', entry.startTime);
            }
          });
        });
        
        navigationObserver.observe({
          entryTypes: ['paint', 'largest-contentful-paint']
        });
      } catch (error) {
        console.warn('PerformanceObserver not supported or permission denied', error);
      }
    }
  }
  
  /**
   * Store a performance metric
   */
  private storeMetric(name: string, value: number): void {
    this.metrics.set(name, {
      name,
      value,
      timestamp: Date.now()
    });
    
    console.debug(`Performance metric: ${name} = ${Math.round(value)}ms`);
  }
}
