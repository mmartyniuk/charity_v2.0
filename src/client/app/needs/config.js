(function () {
    'use strict';

    angular
        .module('app.needs')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'GlobalConfig'];

    function config($routeProvider, $locationProvider, GlobalConfig) {
        $routeProvider
            .when('/needs/acceptedneed', { templateUrl: GlobalConfig.appPath + '/needs/acceptedNeed.html', controller: 'AcceptedNeedController', controllerAs: 'vm' })
            .when('/needs/createdneed', { templateUrl: GlobalConfig.appPath + '/needs/created_need.html', controller: 'CreatedNeedController', controllerAs: 'vm' })
            .when('/needs/createdproject', { templateUrl: GlobalConfig.appPath + '/needs/created_project.html', controller: 'CreatedProjectController', controllerAs: 'vm' })
            .when('/needs/newneedregister', { templateUrl: GlobalConfig.appPath + '/needs/new_need_register.html', controller: 'NewNeedRegisterController', controllerAs: 'vm' })
            .when('/needs/newneedstep1', { templateUrl: GlobalConfig.appPath + '/needs/new_need_step1.html', controller: 'NewNeedStep1Controller', controllerAs: 'vm' })
            .when('/needs/newproject', { templateUrl: GlobalConfig.appPath + '/needs/new_project.html', controller: 'NewProjectController', controllerAs: 'vm' })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();
