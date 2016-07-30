import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {BillingDetailsComponent} from './billingDetails.component';
import {OrderConfirmationComponent} from './orderConfirmation.component';
import {TransferDetailsComponent} from './transferDetails.component'

@Component({
  selector: 'my-app',
  template: `
  <div class="paxcreditContainer">
  <nav>
    <a [routerLink]="['/billing']" routerLinkActive="active">Billing</a>
    <a [routerLink]="['/orderConfirmation']" routerLinkActive="active">orderConfirmation</a>
  </nav>
  <router-outlet></router-outlet>
  <trasfer-details></trasfer-details>
  </div>
`,
styleUrls:  ['app/app.component.css'],

  directives: [ROUTER_DIRECTIVES,TransferDetailsComponent],
  precompile: [BillingDetailsComponent,OrderConfirmationComponent]
})

export class AppComponent { 

}
