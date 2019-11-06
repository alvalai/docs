import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptor } from './interceptors/example.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // we need to import HttpClientModule in order to be able to use HttpClient within our application
    HttpClientModule
  ],
  providers: [
    /* This is how we set up interceptors for our application.
    The order for requests are A -> B -> C and for responses C -> B -> A */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleInterceptor,
      multi: true
    },
    /*
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AnotherExampleInterceptor
       multi: true
     }
    */
  ],
  exports: [
    HttpClientModule
  ]
})
export class HttpModule { }
