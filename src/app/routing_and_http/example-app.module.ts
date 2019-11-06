import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAppComponent } from './example-app.component';
import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from './http/http.module';
import { LoginComponent } from './components/login.component';
import { NotFoundComponent } from './components/not-found.component';
import { NotAuthorizedComponent } from './components/not-authorized.component';

@NgModule({
  declarations: [ExampleAppComponent, LoginComponent, NotFoundComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  // if you wish to run this, then simply replace AppModule with ExampleAppModule in main.ts
  bootstrap: [ExampleAppComponent]
})
export class ExampleAppModule { }
