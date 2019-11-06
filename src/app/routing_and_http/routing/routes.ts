import { Route } from '@angular/router';
import { LoginComponent } from '../components/login.component';
import { NotAuthorizedComponent } from '../components/not-authorized.component';
import { AuthGuard } from './guards/auth.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { LazyFeatureResolver } from './guards/lazy-feature.resolver';

export const routes: Route[] = [
  /* Here we specify what component should be loaded when user lands on this path. You can specify a custom
  matcher function under matcher property, if this is not enough. */
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'not-authorized',
    /* CanActivate is a router guard (essentially middleware that runs during navigation) that we can use
    to determine if the user can access the component. If it returns true, the user can navigate to the component,
    if it returns false, the navigation is cancelled. */
    canActivate: [
      AuthGuard
    ],
    component: NotAuthorizedComponent
  },
  {
    path: 'lazy-feature',
    /* This is how we load a module lazily. It gets built as a separate bundle that will be loaded
    only when user is trying to navigate to /feature and all the registerd router guards pass. */
    loadChildren: () => import('../lazy-feature/lazy-feature.module').then(mod => mod.LazyFeatureModule),
    /* CanLoad is a router guard (essentially middleware that runs during navigation) with which we can determine
    if the user can load the feature module. We could use CanActivate here, but there is one important benefit why
    we should use CanLoad when it comes to lazily loaded modules: when CanLoad returns false, the feature module files
    will not be loaded over the wire; with CanActivate, the user is not allowed to route to the feature module,
    but the files are still fetched. Since the user can't access the feature module anyways, then there is little
    point in fetching the actual bundle for it. */
    canLoad: [CanLoadGuard],
    resolve: [LazyFeatureResolver]
  },
  /* we use the wildcard (**) to catch all other URLs that do not match a path. We could show a NotFoundComponent,
  but we instead will redirect user.*/
  {
    path: '**',
    redirectTo: ''
  }
];
