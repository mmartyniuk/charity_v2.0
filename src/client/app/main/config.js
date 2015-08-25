(function () {
    'use strict';

    angular
        .module('app.main')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'GlobalConfig'];

    function config($routeProvider, $locationProvider, GlobalConfig) {
        $routeProvider
            .when('/index/messages', { templateUrl: GlobalConfig.appPath + '/main/messages.html', controller: 'MessagesController', controllerAs: 'vm' })
            .when('/index/profile', { templateUrl: GlobalConfig.appPath + '/main/profile.html', controller: 'PublishAppController', controllerAs: 'vm' })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();
