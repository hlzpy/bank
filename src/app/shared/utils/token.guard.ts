import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, zip } from 'rxjs';
import { catchError, first, map, switchMap, timeout } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Keys } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private userSvc: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userStr = localStorage.getItem(Keys.CurrentLoginUser);
    const user = userStr ? JSON.parse(userStr) : '';
    return of(!!user);
  }
}
