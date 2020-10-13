import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {
    loadChildren: () => import('./../modules/basics/interpolation/interpolation.module').then(m => m.InterpolationModule),
    path: 'interpolation',
  },
  {
    path: '**', component: HomeComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
