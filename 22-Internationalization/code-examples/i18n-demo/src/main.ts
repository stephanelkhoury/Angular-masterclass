import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import localeAr from '@angular/common/locales/ar';

import { AppModule } from './app/app.module';

// Register all locales
registerLocaleData(localeEn, 'en');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeAr, 'ar');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
