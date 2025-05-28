import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <ng-template>
      <div class="tab-content" [class.active]="active">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `
})
export class TabComponent {
  @Input() title: string = '';
  @Input() icon?: string;
  @Input() active: boolean = false;
  
  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<any>;
}
