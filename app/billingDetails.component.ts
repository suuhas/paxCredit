import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'billing-details',
  templateUrl: 'app/billing-details.component.html',
  styleUrls:  ['app/billing-details.component.css']
})

export class BillingDetailsComponent {

  IsClickEnabled: boolean
  constructor(
      private router: Router) {
        this.IsClickEnabled = false; //change the value if all the fields are filled in the billing
                                    //OR without this variable - try putting fields under form and make CONTINUE as a button
      }
      
    
    onContinue() {
      let link = ['/orderConfirmation'];
      this.IsClickEnabled = true; //making it true just for testing
      if(this.IsClickEnabled){
        this.router.navigate(link);
      }
    }
}
