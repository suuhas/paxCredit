"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(router) {
        this.router = router;
        this.IsBackClickEnabled = true; //this is always true because going back has no validations
        //OR if we want to add validations then this changes
        this.IsSubmitClickEnabled = false; //change the value if all the fields are filled in the billing
        //OR try putting those under form and make it as a button
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.selectedDoorPickup = true;
    };
    OrderConfirmationComponent.prototype.onSelectDoor = function () {
        this.selectedDoorPickup = true;
        this.selectedStorePickup = false;
    };
    OrderConfirmationComponent.prototype.onSelectDrop = function () {
        this.selectedDoorPickup = false;
        this.selectedStorePickup = true;
    };
    OrderConfirmationComponent.prototype.onBack = function () {
        var link = ['/billing'];
        if (this.IsBackClickEnabled) {
            this.router.navigate(link);
        }
    };
    OrderConfirmationComponent.prototype.onSubmit = function () {
        var link = ['/todo'];
        if (this.IsSubmitClickEnabled) {
            this.router.navigate(link);
        }
    };
    OrderConfirmationComponent = __decorate([
        core_1.Component({
            selector: 'order-confirmaiton',
            templateUrl: 'app/order-confirmaiton.component.html',
            styleUrls: ['app/order-confirmaiton.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());
exports.OrderConfirmationComponent = OrderConfirmationComponent;
//# sourceMappingURL=orderConfirmation.component.js.map