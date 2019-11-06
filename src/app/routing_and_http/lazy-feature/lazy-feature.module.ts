import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFeatureComponent } from './lazy-feature.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FeatureRoutingModule } from './routing/feature-routing.module';

@NgModule({
  declarations: [LazyFeatureComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
})
export class LazyFeatureModule { }
