import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (request.url === 'data') {
      return of(new HttpResponse({body: {hello: 'world'}}));
    }

    /* since HttpRequest and HttpResponse are read-only, we need to create a new object if we want to modify them.
    HttpRequest.clone method will copy the request and provides a simple way to make changes during copying. */
    const newRequest = request.clone({
      setHeaders: {'x-ample': 'hello'}
    });
    /* next.handle will hand the new request off to the next interceptor. Should we want to modifify the response, we can
    pipe the .next call and apply rxjs operators to the values that gets passed through. */
    return next.handle(newRequest);
  }
}

/* Read more about interceptors here:
 - https://angular.io/api/common/http/HttpInterceptor
 - https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
*/
