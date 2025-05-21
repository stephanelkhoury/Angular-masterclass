import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="jumbotron">
      <h1 class="display-4" i18n="@@welcomeTitle">{{ 'WELCOME.TITLE' | translate }}</h1>
      <p class="lead" i18n="@@welcomeSubtitle">{{ 'WELCOME.SUBTITLE' | translate }}</p>
      <hr class="my-4">
      <p i18n="@@welcomeDescription">
        {{ 'WELCOME.DESCRIPTION' | translate }}
      </p>
      <div class="mt-4">
        <h3 i18n="@@featuresTitle">{{ 'WELCOME.FEATURES.TITLE' | translate }}</h3>
        <ul class="list-group">
          <li class="list-group-item" i18n="@@featureAngularI18n">
            {{ 'WELCOME.FEATURES.ANGULAR_I18N' | translate }}
          </li>
          <li class="list-group-item" i18n="@@featureNgxTranslate">
            {{ 'WELCOME.FEATURES.NGX_TRANSLATE' | translate }}
          </li>
          <li class="list-group-item" i18n="@@featureLocalization">
            {{ 'WELCOME.FEATURES.LOCALIZATION' | translate }}
          </li>
          <li class="list-group-item" i18n="@@featureFormats">
            {{ 'WELCOME.FEATURES.FORMATS' | translate }}
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <a class="btn btn-primary" routerLink="/products" i18n="@@browseProducts">
          {{ 'WELCOME.BROWSE_PRODUCTS' | translate }}
        </a>
      </div>
    </div>
  `,
  styles: [`
    .jumbotron {
      padding: 2rem;
      background-color: #f8f9fa;
      border-radius: 0.3rem;
      margin-bottom: 2rem;
    }
  `]
})
export class WelcomeComponent {
  constructor(private translate: TranslateService) {}
}
