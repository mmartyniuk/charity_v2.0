(function () {
    'use strict';

    angular
        .module('app.offers')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'GlobalConfig'];

    function config($routeProvider, $locationProvider, GlobalConfig) {
        $routeProvider
            .when('/offers/acceptedoffers', { templateUrl: GlobalConfig.appPath + '/offers/acceptedOffers.html', controller: 'AcceptedOffersController', controllerAs: 'vm' })
            .when('/offers/createdoffer', { templateUrl: GlobalConfig.appPath + '/offers/created_offer.html', controller: 'CreatedOfferController', controllerAs: 'vm' })
            .when('/offers/newofferregister', { templateUrl: GlobalConfig.appPath + '/offers/new_offer_register.html', controller: 'NewOfferRegisterController', controllerAs: 'vm' })
            .when('/offers/newofferstep1', { templateUrl: GlobalConfig.appPath + '/offers/new_offer_step1.html', controller: 'NewOfferStep1Controller', controllerAs: 'vm' })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();
