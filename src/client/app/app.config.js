(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'GlobalConfig'];

    function config($routeProvider, $locationProvider, GlobalConfig) {
        $routeProvider
            .when('/', { templateUrl: GlobalConfig.appPath + '/main/index.html', controller: 'IndexController', controllerAs: 'vm' })
            .when('/needs', { templateUrl: GlobalConfig.appPath + '/needs/needs.html', controller: 'NeedsController', controllerAs: 'vm' })
            .when('/offers', { templateUrl: GlobalConfig.appPath + '/offers/offers.html', controller: 'OffersController', controllerAs: 'vm' })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();
