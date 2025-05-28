import { Component, OnInit } from '@angular/core';
import { PwaService } from '../../services/pwa.service';

@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.scss']
})
export class UpdateNotificationComponent implements OnInit {
  updateAvailable = false;

  constructor(private pwaService: PwaService) { }

  ngOnInit(): void {
    this.pwaService.updateAvailable$.subscribe(available => {
      this.updateAvailable = available;
    });
  }

  updateApp(): void {
    this.pwaService.updateApplication().then(() => {
      console.log('Application updated successfully');
    }).catch(err => {
      console.error('Error updating application:', err);
    });
  }
}
