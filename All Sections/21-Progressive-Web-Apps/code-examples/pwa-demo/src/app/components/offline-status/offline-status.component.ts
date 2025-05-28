import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-status',
  templateUrl: './offline-status.component.html',
  styleUrls: ['./offline-status.component.scss']
})
export class OfflineStatusComponent implements OnInit {
  isOnline: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkOnlineStatus();
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  checkOnlineStatus(): void {
    this.isOnline = navigator.onLine;
  }

  updateOnlineStatus(): void {
    this.checkOnlineStatus();
  }

  ngOnDestroy(): void {
    window.removeEventListener('online', this.updateOnlineStatus.bind(this));
    window.removeEventListener('offline', this.updateOnlineStatus.bind(this));
  }
}
