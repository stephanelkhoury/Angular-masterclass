import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-card',
  template: `
    <div class="card mb-4">
      <div class="card-header">
        {{ data.title }}
      </div>
      <div class="card-body">
        <p>{{ data.data.content }}</p>
        <div class="text-muted">
          <small>By: {{ data.data.author }} | {{ data.data.date | date:'medium' }}</small>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-outline-secondary" (click)="refresh()">Refresh Content</button>
        <button class="btn btn-sm btn-outline-primary ms-2" (click)="toggleFootnote()">
          {{ showFootnote ? 'Hide' : 'Show' }} Footnote
        </button>
      </div>
      <div *ngIf="showFootnote" class="card-footer text-muted">
        <small>{{ footnote }}</small>
      </div>
    </div>
  `,
  styles: []
})
export class TextCardComponent {
  @Input() data: any;
  showFootnote = false;
  footnote = 'This is additional information about the text content that can be shown or hidden.';
  
  private quotes = [
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'In the middle of every difficulty lies opportunity.',
    'The only way to do great work is to love what you do.',
    'Believe you can and you're halfway there.'
  ];
  
  refresh(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.data.data.content = this.quotes[randomIndex];
    this.data.data.date = new Date();
  }
  
  toggleFootnote(): void {
    this.showFootnote = !this.showFootnote;
  }
}
