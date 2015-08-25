(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'GlobalConfig'];

    function config($routeProvider, $locationProvider, GlobalConfig) {
        $routeProvider
            .when('/login', { templateUrl: GlobalConfig.appPath + '/auth/login.html', controller: 'LoginController', controllerAs: 'vm' })
            .when('/register', { templateUrl: GlobalConfig.appPath + '/auth/register.html', controller: 'RegisterController', controllerAs: 'vm' })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();
