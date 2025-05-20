import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    // Components
    CardComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    
    // Pipes
    DateFormatPipe,
    
    // Directives
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    // Components
    CardComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    
    // Pipes
    DateFormatPipe,
    
    // Directives
    HighlightDirective
  ]
})
export class SharedModule { }
