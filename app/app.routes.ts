import { provideRouter, RouterConfig }  from '@angular/router';
import {BillingDetailsComponent} from './billingDetails.component';
import {OrderConfirmationComponent} from './orderConfirmation.component';

const routes: RouterConfig = [
  {
    path: 'billing',
    component: BillingDetailsComponent
  },
  {
    path: 'orderConfirmation',
    component: OrderConfirmationComponent
  },
  {
    path: '',
    redirectTo: '/billing',
    pathMatch: 'full'
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];

