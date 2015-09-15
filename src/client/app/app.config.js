(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        /*var otherwise = '/404';*/
        routerHelper.configureStates(getStates() /*otherwise*/);
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
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin' - tbd
                     }*/
                }
            },
            {
                state: 'aboutus',
                config: {
                    url: '/aboutus',
                    templateUrl: 'app/main/about_us.html',
                    title: 'aboutus'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin' - tbd
                     }*/
                }
            }
        ];
    }

})();
