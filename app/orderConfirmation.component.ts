import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-confirmaiton',
  templateUrl: 'app/order-confirmaiton.component.html',
  styleUrls:  ['app/order-confirmaiton.component.css']
})

export class OrderConfirmationComponent {
  selectedDoorPickup: boolean;
  selectedStorePickup:boolean;
  IsBackClickEnabled: boolean;
  IsSubmitClickEnabled: boolean;

  constructor(
      private router: Router) {
        this.IsBackClickEnabled = true; //this is always true because going back has no validations
                                        //OR if we want to add validations then this changes
        this.IsSubmitClickEnabled = false; //change the value if all the fields are filled in the billing
                                    //OR try putting those under form and make it as a button
      }
      
  
  ngOnInit() {
    this.selectedDoorPickup = true;
  }

  onSelectDoor() {
    this.selectedDoorPickup = true;
    this.selectedStorePickup = false;
  }

  onSelectDrop(){
    this.selectedDoorPickup = false;
    this.selectedStorePickup = true;
  }
    
    onBack() {
      let link = ['/billing'];
      if(this.IsBackClickEnabled){
        this.router.navigate(link);
      }
    }
    onSubmit() { //this function should be changed to update database and send values to bmf dashboard
      let link = ['/todo'];
      if(this.IsSubmitClickEnabled){
        this.router.navigate(link);
      }
    }
}