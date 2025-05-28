import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightEnabled: boolean = true;
  @Input() highlightColor: string = '#f5f5dc'; // Beige
  @Input() defaultColor: string = '';

  private originalColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
  }

  ngOnInit() {
    this.defaultColor = this.defaultColor || this.originalColor;
    if (this.highlightEnabled) {
      this.renderer.addClass(this.el.nativeElement, 'highlighted-item');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.highlightEnabled) {
      this.highlight(this.highlightColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.highlightEnabled) {
      this.highlight(this.defaultColor);
    }
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}