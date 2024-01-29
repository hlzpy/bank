import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { Keys } from './shared/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem(Keys.CurrentLoginUser);
    const user = userStr ? JSON.parse(userStr) : '';
    if (user) {
      this.userSvc.setCurrentUser(user);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
