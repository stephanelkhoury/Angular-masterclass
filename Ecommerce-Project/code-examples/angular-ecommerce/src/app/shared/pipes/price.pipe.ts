import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: number | undefined, currency: string = '$'): string {
    if (value === undefined || value === null) {
      return '';
    }
    
    return `${currency}${value.toFixed(2)}`;
  }
}