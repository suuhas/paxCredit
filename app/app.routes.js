"use strict";
var router_1 = require('@angular/router');
var billingDetails_component_1 = require('./billingDetails.component');
var orderConfirmation_component_1 = require('./orderConfirmation.component');
var routes = [
    {
        path: 'billing',
        component: billingDetails_component_1.BillingDetailsComponent
    },
    {
        path: 'orderConfirmation',
        component: orderConfirmation_component_1.OrderConfirmationComponent
    },
    {
        path: '',
        redirectTo: '/billing',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map