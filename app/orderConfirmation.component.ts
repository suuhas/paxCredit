import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'order-confirmaiton',
  templateUrl: 'app/order-confirmaiton.component.html',
  styleUrls:  ['app/order-confirmaiton.component.css']
})

export class OrderConfirmationComponent {
  selectedDoorPickup: boolean;
  selectedStorePickup:boolean;
  
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
}