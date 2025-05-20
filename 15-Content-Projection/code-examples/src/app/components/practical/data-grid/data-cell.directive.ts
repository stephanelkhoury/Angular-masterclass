import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDataCell]'
})
export class DataCellDirective {
  @Input() appDataCell!: string;
  
  constructor(public template: TemplateRef<any>) {}
}
