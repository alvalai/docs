import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  Angular provides us with HttpClient that we can use
*/
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRequestExample(): Observable<{hello: string}> {
    /* this is how we make and type a simple get request.
    HttpClient will automatically unwrap the response body for us if we do not specify
    {observe: 'response'} in the options object.
    Since we are not utilizing a backend, we actually catch /data in our interceptor
    and return the result from there */
    return this.http.get<{hello: string}>('data');
  }

  postFullRequestExample(uname: string): Observable<HttpResponse<any>> {
    /* this is how we make a simple post request, attach a body and observe the full response,
    meaning that we have also access to headers here. */
    return this.http
      .post(
        'anotherUrl',
        { body: uname },
        {
          observe: 'response',
          responseType: 'text',
          params: new HttpParams({fromObject: {
            hello: 'world',
            this: 'is dog'
          }})
        }
      );
  }

  // read more: https://angular.io/guide/http
}
