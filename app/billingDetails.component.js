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
var BillingDetailsComponent = (function () {
    function BillingDetailsComponent(router) {
        this.router = router;
        this.IsClickEnabled = false; //change the value if all the fields are filled in the billing
        //OR without this variable - try putting fields under form and make CONTINUE as a button
    }
    BillingDetailsComponent.prototype.onContinue = function () {
        var link = ['/orderConfirmation'];
        this.IsClickEnabled = true; //making it true just for testing
        if (this.IsClickEnabled) {
            this.router.navigate(link);
        }
    };
    BillingDetailsComponent = __decorate([
        core_1.Component({
            selector: 'billing-details',
            templateUrl: 'app/billing-details.component.html',
            styleUrls: ['app/billing-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BillingDetailsComponent);
    return BillingDetailsComponent;
}());
exports.BillingDetailsComponent = BillingDetailsComponent;
//# sourceMappingURL=billingDetails.component.js.map