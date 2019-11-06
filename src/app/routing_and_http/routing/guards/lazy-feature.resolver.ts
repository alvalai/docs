import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { catchError, take, tap, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LazyFeatureResolver implements Resolve<string> {

  constructor(private httpService: HttpService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
    return this.httpService.getRequestExample().pipe(
      /* first allows us to only take the first value passed through
       the stream and then automatically unsubscribe */
      take(1),
      mergeMap(data => {
        if (data) {
          return data.hello;
        } else {
          // if we don't redirect here (or in error case) the navigation will not be cancelled
          this.router.navigate(['/']);
          return EMPTY;
        }
      }),
      catchError(err => {
        this.router.navigate(['/']);
        return EMPTY;
      }),
    );
  }
}
