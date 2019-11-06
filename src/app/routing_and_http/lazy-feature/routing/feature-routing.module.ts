import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './feature-routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(featureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureRoutingModule { }
