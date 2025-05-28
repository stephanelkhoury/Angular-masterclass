import { Component } from '@angular/core';

// Calendar event interface
interface Event {
  id: string;
  title: string;
  date: Date;
  type: string;
  description?: string;
}

@Component({
  selector: 'app-bonus-example',
  template: `
    <div class="example-container">
      <h2>Bonus Example: Calendar Component with Content Projection</h2>
      
      <p>
        This example showcases a more complex calendar component that uses content projection 
        to allow customization of both day cells and event rendering.
      </p>
      
      <div class="code-example">
        <pre>&lt;app-calendar [events]="events"&gt;
  &lt;!-- Custom template for special days --&gt;
  &lt;ng-template calendarDay="15" let-data&gt;
    &lt;span class="special-day"&gt;Important&lt;/span&gt;
  &lt;/ng-template&gt;
  
  &lt;!-- Custom template for meeting events --&gt;
  &lt;ng-template calendarEvent="meeting" let-event&gt;
    &lt;div class="meeting-event"&gt;
      &lt;strong&gt;Meeting:&lt;/strong&gt; {{ event.title }}
    &lt;/div&gt;
  &lt;/ng-template&gt;
&lt;/app-calendar&gt;</pre>
      </div>
      
      <div class="controls">
        <button class="control-button" (click)="addRandomEvent()">Add Random Event</button>
        <button class="control-button" (click)="clearEvents()">Clear All Events</button>
        <label>
          <input type="checkbox" [(ngModel)]="showCustomTemplates" />
          Show Custom Templates
        </label>
      </div>
      
      <app-calendar [events]="calendarEvents">
        <!-- Custom templates when showCustomTemplates is true -->
        <ng-container *ngIf="showCustomTemplates">
          <!-- Special day templates -->
          <ng-template calendarDay="1" let-data>
            <span class="month-start-badge">First</span>
          </ng-template>
          
          <ng-template calendarDay="15" let-data>
            <span class="mid-month-badge">Mid</span>
          </ng-template>
          
          <!-- Event type templates -->
          <ng-template calendarEvent="meeting" let-event>
            <div class="meeting-event">
              <span class="event-icon">📅</span>
              <span class="event-title">{{ event.title }}</span>
            </div>
          </ng-template>
          
          <ng-template calendarEvent="deadline" let-event>
            <div class="deadline-event">
              <span class="event-icon">⏰</span>
              <span class="event-title">{{ event.title }}</span>
            </div>
          </ng-template>
          
          <ng-template calendarEvent="birthday" let-event>
            <div class="birthday-event">
              <span class="event-icon">🎂</span>
              <span class="event-title">{{ event.title }}</span>
            </div>
          </ng-template>
          
          <ng-template calendarEvent="holiday" let-event>
            <div class="holiday-event">
              <span class="event-icon">🏖️</span>
              <span class="event-title">{{ event.title }}</span>
            </div>
          </ng-template>
        </ng-container>
      </app-calendar>
      
      <div class="explanation">
        <h3>How Content Projection is Used</h3>
        <p>
          The calendar component uses multiple content projection techniques:
        </p>
        <ul>
          <li>
            <strong>ContentChildren</strong> - Collects all day and event templates
          </li>
          <li>
            <strong>Template Context</strong> - Passes data to projected templates
          </li>
          <li>
            <strong>Dynamic Template Selection</strong> - Shows different templates based on day number or event type
          </li>
          <li>
            <strong>Fallback Content</strong> - Uses default rendering when no custom template is provided
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .code-example {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 20px;
      overflow-x: auto;
    }
    
    pre {
      margin: 0;
      white-space: pre-wrap;
    }
    
    .controls {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .control-button {
      padding: 8px 16px;
      background-color: #3f51b5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .control-button:hover {
      background-color: #303f9f;
    }
    
    .explanation {
      margin-top: 24px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    /* Custom day badges */
    .month-start-badge {
      background-color: #ff9800;
      color: white;
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 4px;
    }
    
    .mid-month-badge {
      background-color: #9c27b0;
      color: white;
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 4px;
    }
    
    /* Custom event styles */
    .meeting-event {
      background-color: #e3f2fd;
      border-left: 3px solid #2196f3;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    
    .deadline-event {
      background-color: #ffebee;
      border-left: 3px solid #f44336;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    
    .birthday-event {
      background-color: #e8f5e9;
      border-left: 3px solid #4caf50;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    
    .holiday-event {
      background-color: #fff8e1;
      border-left: 3px solid #ff9800;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    
    .event-icon {
      margin-right: 4px;
    }
    
    .event-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `]
})
export class BonusExampleComponent {
  // Toggle for showing custom templates
  showCustomTemplates = true;
  
  // Event types
  eventTypes = ['meeting', 'deadline', 'birthday', 'holiday'];
  
  // Sample events
  calendarEvents: Event[] = [
    {
      id: '1',
      title: 'Team Meeting',
      date: this.getRandomDate(),
      type: 'meeting'
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: this.getRandomDate(),
      type: 'deadline'
    },
    {
      id: '3',
      title: 'John\'s Birthday',
      date: this.getRandomDate(),
      type: 'birthday'
    },
    {
      id: '4',
      title: 'Company Holiday',
      date: this.getRandomDate(),
      type: 'holiday'
    }
  ];
  
  // Add a random event to the calendar
  addRandomEvent(): void {
    const eventId = (this.calendarEvents.length + 1).toString();
    const eventType = this.eventTypes[Math.floor(Math.random() * this.eventTypes.length)];
    
    let title = '';
    switch (eventType) {
      case 'meeting':
        title = `Meeting: ${this.getRandomMeetingName()}`;
        break;
      case 'deadline':
        title = `Deadline: ${this.getRandomDeadlineName()}`;
        break;
      case 'birthday':
        title = `${this.getRandomName()}'s Birthday`;
        break;
      case 'holiday':
        title = `${this.getRandomHolidayName()}`;
        break;
    }
    
    this.calendarEvents.push({
      id: eventId,
      title,
      date: this.getRandomDate(),
      type: eventType
    });
  }
  
  // Clear all events
  clearEvents(): void {
    this.calendarEvents = [];
  }
  
  // Helper method to get a random date within the current month
  private getRandomDate(): Date {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = Math.floor(Math.random() * 28) + 1; // Random day between 1-28
    
    return new Date(year, month, day);
  }
  
  // Helper methods for generating random names
  private getRandomMeetingName(): string {
    const meetings = ['Weekly Standup', 'Project Review', 'Planning Session', 'Client Call', 'Design Review'];
    return meetings[Math.floor(Math.random() * meetings.length)];
  }
  
  private getRandomDeadlineName(): string {
    const deadlines = ['Report Submission', 'Feature Implementation', 'Presentation', 'Budget Review', 'Documentation'];
    return deadlines[Math.floor(Math.random() * deadlines.length)];
  }
  
  private getRandomName(): string {
    const names = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Anna', 'Robert', 'Linda'];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  private getRandomHolidayName(): string {
    const holidays = ['Company Holiday', 'Team Building Day', 'Office Party', 'Foundation Day', 'Special Event'];
    return holidays[Math.floor(Math.random() * holidays.length)];
  }
}
