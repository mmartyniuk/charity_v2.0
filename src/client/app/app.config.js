(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    config.$inject = ['$httpProvider'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function config($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }

    function getStates() {
        return [
            {
                state: 'index',
                config: {
                    url: '/',
                    templateUrl: 'app/main/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm',
                    title: 'Index'
                }
            },
            {
                state: 'about',
                config: {
                    url: '/about',
                    templateUrl: 'app/main/about_us.html',
                    title: 'about'
                }
            }
        ];
    }

})();
