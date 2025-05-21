import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-number-examples',
  template: `
    <div class="container">
      <h2 i18n="@@numbersTitle">{{ 'NUMBERS.TITLE' | translate }}</h2>
      <p i18n="@@numbersDescription">{{ 'NUMBERS.DESCRIPTION' | translate }}</p>
      
      <div class="card mb-4">
        <div class="card-header" i18n="@@basicFormatting">{{ 'NUMBERS.BASIC_FORMATTING' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-6"><strong i18n="@@integerNumber">{{ 'NUMBERS.INTEGER' | translate }}:</strong></div>
            <div class="col-md-6">{{ 1234 | number }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6"><strong i18n="@@decimalNumber">{{ 'NUMBERS.DECIMAL' | translate }}:</strong></div>
            <div class="col-md-6">{{ 1234.5678 | number:'1.2-4' }}</div>
          </div>
          <div class="row">
            <div class="col-md-6"><strong i18n="@@percentNumber">{{ 'NUMBERS.PERCENT' | translate }}:</strong></div>
            <div class="col-md-6">{{ 0.7654 | percent }}</div>
          </div>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header" i18n="@@currencyFormatting">{{ 'NUMBERS.CURRENCY_FORMATTING' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-5"><strong>USD:</strong></div>
            <div class="col-md-7">{{ 1234.56 | currency:'USD':'symbol' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-5"><strong>EUR:</strong></div>
            <div class="col-md-7">{{ 1234.56 | currency:'EUR':'symbol' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-5"><strong>GBP:</strong></div>
            <div class="col-md-7">{{ 1234.56 | currency:'GBP':'symbol' }}</div>
          </div>
          <div class="row">
            <div class="col-md-5"><strong>JPY:</strong></div>
            <div class="col-md-7">{{ 1234.56 | currency:'JPY':'symbol' }}</div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header" i18n="@@customNumberFormats">{{ 'NUMBERS.CUSTOM_FORMATS' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-6"><strong i18n="@@noDecimal">{{ 'NUMBERS.NO_DECIMAL' | translate }}:</strong></div>
            <div class="col-md-6">{{ 1234.5678 | number:'1.0-0' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6"><strong i18n="@@twoDecimals">{{ 'NUMBERS.TWO_DECIMALS' | translate }}:</strong></div>
            <div class="col-md-6">{{ 1234.5678 | number:'1.2-2' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6"><strong i18n="@@fourDecimals">{{ 'NUMBERS.FOUR_DECIMALS' | translate }}:</strong></div>
            <div class="col-md-6">{{ 1234.5678 | number:'1.4-4' }}</div>
          </div>
          <div class="row">
            <div class="col-md-6"><strong i18n="@@customPercent">{{ 'NUMBERS.CUSTOM_PERCENT' | translate }}:</strong></div>
            <div class="col-md-6">{{ 0.7654 | percent:'2.2-2' }}</div>
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
export class NumberExamplesComponent {
  constructor(private translate: TranslateService) {}
}
