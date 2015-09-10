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
                state: 'offers',
                config: {
                    url: '/offers',
                    templateUrl: 'app/offers/offers.html',
                    controller: 'OffersController',
                    controllerAs: 'vm',
                    title: 'Offers',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
            /*,
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
<<<<<<< HEAD
            }*/
        ];
    }

})();
