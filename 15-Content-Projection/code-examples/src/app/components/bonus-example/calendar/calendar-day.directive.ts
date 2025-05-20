import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[calendarDay]'
})
export class CalendarDayDirective {
  @Input('calendarDay') day!: number;
  
  constructor(public template: TemplateRef<any>) {}
}
