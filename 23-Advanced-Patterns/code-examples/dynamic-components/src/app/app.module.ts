import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ModalHostDirective } from './directives/modal-host.directive';
import { ComponentHostDirective } from './directives/component-host.directive';
import { TextCardComponent } from './components/text-card/text-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentComponent,
    DynamicModalComponent,
    DynamicFormComponent,
    ModalHostDirective,
    ComponentHostDirective,
    TextCardComponent,
    ImageCardComponent,
    ChartCardComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
