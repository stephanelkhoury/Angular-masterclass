import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  template: `
    <div class="card mb-4">
      <div class="card-header">
        {{ data.title }}
      </div>
      <img [src]="data.data.imageUrl" class="card-img-top" [alt]="data.data.caption">
      <div class="card-body">
        <p class="card-text">{{ data.data.caption }}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-outline-secondary" (click)="refresh()">Refresh Image</button>
      </div>
    </div>
  `,
  styles: [`
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
  `]
})
export class ImageCardComponent {
  @Input() data: any;
  
  refresh(): void {
    // Update the image URL with a cache-busting parameter
    this.data.data.imageUrl = `https://picsum.photos/400/200?random=${Date.now()}`;
  }
}
