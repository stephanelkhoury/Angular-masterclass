import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-date-examples',
  template: `
    <div class="container">
      <h2 i18n="@@datesTitle">{{ 'DATES.TITLE' | translate }}</h2>
      <p i18n="@@datesDescription">{{ 'DATES.DESCRIPTION' | translate }}</p>
      
      <div class="card mb-4">
        <div class="card-header" i18n="@@currentDateTime">{{ 'DATES.CURRENT_DATETIME' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@shortDate">{{ 'DATES.SHORT_DATE' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'shortDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@mediumDate">{{ 'DATES.MEDIUM_DATE' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'mediumDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@longDate">{{ 'DATES.LONG_DATE' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'longDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@fullDate">{{ 'DATES.FULL_DATE' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'fullDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@shortTime">{{ 'DATES.SHORT_TIME' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'shortTime' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@mediumTime">{{ 'DATES.MEDIUM_TIME' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'mediumTime' }}</div>
          </div>
          <div class="row">
            <div class="col-md-4"><strong i18n="@@fullDateTime">{{ 'DATES.FULL_DATETIME' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'full' }}</div>
          </div>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header" i18n="@@customFormats">{{ 'DATES.CUSTOM_FORMATS' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@dayMonth">{{ 'DATES.DAY_MONTH' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'dd MMMM' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@monthYear">{{ 'DATES.MONTH_YEAR' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'MMMM yyyy' }}</div>
          </div>
          <div class="row">
            <div class="col-md-4"><strong i18n="@@weekday">{{ 'DATES.WEEKDAY' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'EEEE' }}</div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header" i18n="@@relativeDates">{{ 'DATES.RELATIVE_DATES' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@yesterday">{{ 'DATES.YESTERDAY' | translate }}:</strong></div>
            <div class="col-md-8">{{ yesterday | date:'fullDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4"><strong i18n="@@today">{{ 'DATES.TODAY' | translate }}:</strong></div>
            <div class="col-md-8">{{ today | date:'fullDate' }}</div>
          </div>
          <div class="row">
            <div class="col-md-4"><strong i18n="@@tomorrow">{{ 'DATES.TOMORROW' | translate }}:</strong></div>
            <div class="col-md-8">{{ tomorrow | date:'fullDate' }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 20px;
    }
  `]
})
export class DateExamplesComponent {
  today = new Date();
  yesterday = new Date(this.today);
  tomorrow = new Date(this.today);
  
  constructor(private translate: TranslateService) {
    this.yesterday.setDate(this.yesterday.getDate() - 1);
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }
}
