(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
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
                state: 'needs',
                config: {
                    url: '/needs',
                    templateUrl: 'app/needs/needs.html',
                    controller: 'NeedsController',
                    controllerAs: 'vm',
                    title: 'Needs',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
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
            },
            {
                state: 'editOffer',
                config: {
                    url: '/editOffer',
                    templateUrl: 'app/offers/edit_Offer.html',
                    controller: 'OffersController',
                    controllerAs: 'vm',
                    title: 'editOffer',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
    
        ];
    }
    
})();