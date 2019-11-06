import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    /* We use RouterModule.forRoot to configure the top level navigation for our application. We should
    use forRoot only once in our application. Take a look at feature.module.ts to see how we set up
    routing for feature modules. Enable tracing will log all navigation events into the console, enable for debugging */
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
