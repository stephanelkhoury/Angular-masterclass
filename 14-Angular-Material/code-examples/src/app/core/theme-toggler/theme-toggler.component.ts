import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent {
  @Input() isDarkTheme: boolean = false;
  @Output() themeChange = new EventEmitter<boolean>();
  
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChange.emit(this.isDarkTheme);
  }
}
