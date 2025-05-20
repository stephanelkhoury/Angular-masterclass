import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDataHeader]'
})
export class DataHeaderDirective {
  @Input() appDataHeader!: string;
  
  constructor(public template: TemplateRef<any>) {}
}
