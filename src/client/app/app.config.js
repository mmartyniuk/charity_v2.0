(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    config.$inject = ['$httpProvider', '$translateProvider'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function config($httpProvider, $translateProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $translateProvider.translations('ua', {
            contacts : 'Контакти',
            confidential: 'Конфіденційність'
        });
        $translateProvider.translations('ru', {
            contacts : 'Контакти',
            confidential: 'Конфиденциальность'
        });
        $translateProvider.preferredLanguage('ua');
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
