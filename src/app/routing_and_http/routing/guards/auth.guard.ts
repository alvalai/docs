import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

/* Since the canActivate and canActivateChild are essentially similar,
the only difference being that canActivateChild runs before any child route
is activated, it often makes sense to implement them wihtin the same class
to reuse the logic */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate(
    // good read about ActivatedRouteSnapshot and RouterStateSnapshot:
    // https://vsavkin.com/angular-router-understanding-router-state-7b5b95a12eab
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*
      Usually we only care about returning either true or false (either wrapped in an observable or as a primitive),
      but there can be cases where we would want to not only cancel the navigation, but redirect user. In such cases
      we would need to return an UrlTree (which we can easily parse from an url using router.parseUrl method).
      A good read about this is here: https://blog.angularindepth.com/new-in-angular-v7-1-updates-to-the-router-fd67d526ad05
    */
    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
