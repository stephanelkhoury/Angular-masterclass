import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DateExamplesComponent } from './components/date-examples/date-examples.component';
import { NumberExamplesComponent } from './components/number-examples/number-examples.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguageSelectorComponent,
    WelcomeComponent,
    ProductsComponent,
    ContactFormComponent,
    DateExamplesComponent,
    NumberExamplesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'contact', component: ContactFormComponent },
      { path: 'dates', component: DateExamplesComponent },
      { path: 'numbers', component: NumberExamplesComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: '**', redirectTo: '' }
    ]),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
