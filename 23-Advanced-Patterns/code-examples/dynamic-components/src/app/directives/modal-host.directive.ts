import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Directive that provides a container reference for dynamic modal insertion
 */
@Directive({
  selector: '[modalHost]'
})
export class ModalHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
