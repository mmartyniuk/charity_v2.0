(function () {
    'use strict';

    angular
        .module('app.auth')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/login',
                    templateUrl: 'app/auth/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    title: 'Login'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin' - tbd
                    }*/
                }
            },
            {
                state: 'register',
                config: {
                    url: '/register',
                    templateUrl: 'app/auth/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm',
                    title: 'Register',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
        ];
    }
})();
