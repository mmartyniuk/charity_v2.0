(function () {
    'use strict';

    angular
        .module('app.offers')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'offers',
                abstract: true,
                config: {
                    template: '<ui-view/>',
                    controller: 'editOffersContoller',
                    controllerAs: 'vm',
                    title: 'Offers'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'offers.home',
                config: {
                    url: '/offers',
                    templateUrl: 'app/offers/offers.html',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'offers.edit',
                config: {
                    url: '/offers/edit/:id',
                    templateUrl: 'app/offers/edit_offer.html',
                    title: 'editOffer',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'acceptedoffers',
                config: {
                    url: '/offers/acceptedoffers',
                    templateUrl: 'app/offers/acceptedOffers.html',
                    controller: 'AcceptedOffersController',
                    controllerAs: 'vm',
                    title: 'AcceptedOffers'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin' - tbd
                    }*/
                }
            },
            {
                state: 'createdoffer',
                config: {
                    url: '/offers/createdoffer',
                    templateUrl: 'app/offers/created_offer.html',
                    controller: 'CreatedOfferController',
                    controllerAs: 'vm',
                    title: 'CreatedOffer',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newofferregister',
                config: {
                    url: '/offers/newofferregister',
                    templateUrl: 'app/offers/new_offer_register.html',
                    controller: 'NewOfferRegisterController',
                    controllerAs: 'vm',
                    title: 'NewOfferRegister',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newofferstep1',
                config: {
                    url: '/offers/newofferstep1',
                    templateUrl: 'app/offers/new_offer_step1.html',
                    controller: 'NewOfferStep1Controller',
                    controllerAs: 'vm',
                    title: 'NewOfferStep1',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
        ];
    }

})();
