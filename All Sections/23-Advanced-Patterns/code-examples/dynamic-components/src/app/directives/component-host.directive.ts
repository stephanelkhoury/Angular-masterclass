import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Directive that provides a container reference for dynamic component insertion
 */
@Directive({
  selector: '[componentHost]'
})
export class ComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
