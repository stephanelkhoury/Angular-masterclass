import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[calendarEvent]'
})
export class CalendarEventDirective {
  @Input('calendarEvent') eventType!: string;
  
  constructor(public template: TemplateRef<any>) {}
}
