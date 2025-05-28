// modules/user/components/user-profile/user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | null = null;
  
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }
}
