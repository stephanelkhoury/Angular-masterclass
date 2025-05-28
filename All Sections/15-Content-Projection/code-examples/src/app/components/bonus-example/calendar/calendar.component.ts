import { AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { CalendarDayDirective } from './calendar-day.directive';
import { CalendarEventDirective } from './calendar-event.directive';

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: string;
  description?: string;
}

@Component({
  selector: 'app-calendar',
  template: \`
    <div class="calendar-container">
      <div class="calendar-header">
        <button class="nav-button" (click)="previousMonth()">&lt;</button>
        <h2>{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
        <button class="nav-button" (click)="nextMonth()">&gt;</button>
      </div>
      
      <div class="calendar-weekdays">
        <div *ngFor="let day of weekdays" class="weekday">{{ day }}</div>
      </div>
      
      <div class="calendar-days">
        <!-- Empty cells for days before the 1st of the month -->
        <div 
          *ngFor="let _ of getDaysBeforeMonthStart()" 
          class="day-cell empty">
        </div>
        
        <!-- Actual days of the month -->
        <div 
          *ngFor="let day of getDaysArray()" 
          class="day-cell"
          [class.today]="isToday(day)"
          [class.has-events]="hasEvents(day)">
          
          <!-- Day number and custom day content -->
          <div class="day-header">
            <span class="day-number">{{ day }}</span>
            
            <!-- Projected custom day content -->
            <ng-container *ngFor="let dayTemplate of dayTemplates">
              <ng-container 
                *ngIf="dayTemplate.day === day"
                [ngTemplateOutlet]="dayTemplate.template"
                [ngTemplateOutletContext]="{ $implicit: { date: getDateForDay(day) } }">
              </ng-container>
            </ng-container>
          </div>
          
          <!-- Events for this day -->
          <div class="day-events" *ngIf="getEventsForDay(day).length">
            <ng-container *ngFor="let event of getEventsForDay(day)">
              <!-- Find matching template for this event type -->
              <ng-container *ngFor="let eventTemplate of eventTemplates">
                <ng-container 
                  *ngIf="eventTemplate.eventType === event.type || eventTemplate.eventType === '*'"
                  [ngTemplateOutlet]="eventTemplate.template"
                  [ngTemplateOutletContext]="{ $implicit: event }">
                </ng-container>
              </ng-container>
              
              <!-- Default template if no matching template is found -->
              <div 
                *ngIf="!hasTemplateForEventType(event.type)" 
                class="event-default"
                [attr.data-event-type]="event.type">
                {{ event.title }}
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  \`,
  styles: [\`
    .calendar-container {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: white;
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .calendar-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }
    
    .nav-button {
      background: none;
      border: 1px solid #ccc;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: bold;
    }
    
    .nav-button:hover {
      background-color: #e0e0e0;
    }
    
    .calendar-weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      border-bottom: 1px solid #e0e0e0;
    }
    
    .weekday {
      padding: 8px;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      color: #757575;
    }
    
    .calendar-days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-auto-rows: minmax(100px, auto);
    }
    
    .day-cell {
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      padding: 8px;
      min-height: 100px;
      position: relative;
    }
    
    .day-cell:nth-child(7n) {
      border-right: none;
    }
    
    .day-cell.empty {
      background-color: #f9f9f9;
    }
    
    .day-cell.today {
      background-color: #e3f2fd;
    }
    
    .day-cell.has-events .day-number {
      font-weight: 600;
      color: #3f51b5;
    }
    
    .day-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .day-number {
      font-size: 16px;
      font-weight: 500;
    }
    
    .day-events {
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow-y: auto;
      max-height: 80px;
    }
    
    .event-default {
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 12px;
      background-color: #f0f0f0;
      border-left: 3px solid #757575;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  \`]
})
export class CalendarComponent implements OnInit, AfterContentInit {
  @Input() events: CalendarEvent[] = [];
  
  // Current date tracking
  currentDate = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();
  
  // Calendar data
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Query all content projections
  @ContentChildren(CalendarDayDirective) customDayTemplates!: QueryList<CalendarDayDirective>;
  @ContentChildren(CalendarEventDirective) customEventTemplates!: QueryList<CalendarEventDirective>;
  
  // Store the templates
  dayTemplates: CalendarDayDirective[] = [];
  eventTemplates: CalendarEventDirective[] = [];
  
  constructor(private element: ElementRef) {}
  
  ngOnInit(): void {
    // Initialize with current month/year
  }
  
  ngAfterContentInit(): void {
    // Store templates for days and events
    this.dayTemplates = this.customDayTemplates ? this.customDayTemplates.toArray() : [];
    this.eventTemplates = this.customEventTemplates ? this.customEventTemplates.toArray() : [];
  }
  
  /**
   * Gets the days array for the current month
   */
  getDaysArray(): number[] {
    const daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
    return Array.from({length: daysInMonth}, (_, i) => i + 1);
  }
  
  /**
   * Gets the number of days in the month
   */
  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
  
  /**
   * Gets the number of empty cells needed before the 1st of the month
   */
  getDaysBeforeMonthStart(): number[] {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    return Array(firstDayOfMonth).fill(0);
  }
  
  /**
   * Navigate to the previous month
   */
  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }
  
  /**
   * Navigate to the next month
   */
  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }
  
  /**
   * Checks if the given day is today
   */
  isToday(day: number): boolean {
    const today = new Date();
    return day === today.getDate() && 
           this.currentMonth === today.getMonth() && 
           this.currentYear === today.getFullYear();
  }
  
  /**
   * Creates a date object for the given day
   */
  getDateForDay(day: number): Date {
    return new Date(this.currentYear, this.currentMonth, day);
  }
  
  /**
   * Checks if a day has any events
   */
  hasEvents(day: number): boolean {
    return this.getEventsForDay(day).length > 0;
  }
  
  /**
   * Gets all events for a specific day
   */
  getEventsForDay(day: number): CalendarEvent[] {
    const targetDate = new Date(this.currentYear, this.currentMonth, day);
    
    return this.events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === targetDate.getDate() &&
             eventDate.getMonth() === targetDate.getMonth() &&
             eventDate.getFullYear() === targetDate.getFullYear();
    });
  }
  
  /**
   * Checks if there's a template for a given event type
   */
  hasTemplateForEventType(type: string): boolean {
    return this.eventTemplates.some(template => 
      template.eventType === type || template.eventType === '*'
    );
  }
}
