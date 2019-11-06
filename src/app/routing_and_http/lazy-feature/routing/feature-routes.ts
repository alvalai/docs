import { Route } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { LazyFeatureComponent } from '../lazy-feature.component';
import { UserComponent } from '../components/user/user.component';
import { AuthGuard } from '../../routing/guards/auth.guard';

export const featureRoutes: Route[] = [
  /* this is how we would set up child routes for a feature module,
  the paths get compounded */
  {
    path: '', // this will navigate to /lazy-feature
    component: LazyFeatureComponent,
    children: [
      {
        path: 'users', // this will navigate to /lazy-feature/users
        component: UsersComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            /*
              this will navigate to /lazy-feature/users/.
              :id is how we declare a parameter. Essentially this means that
              when user lands on /lazy-feature/users/1 or /lazy-feature/users/2 etc.
              the UserComponent will be displayed and we will have access to the parameter.
              See how we access the parameter in UserComponent
            */
            path: ':id',
            component: UserComponent,
          }
        ]
      },
    ]
  },
];
