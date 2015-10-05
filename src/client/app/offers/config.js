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
                config: {
                    url: '/offers',
                    abstract: true,
                    template: '<ui-view/>',
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
                    url: '',
                    templateUrl: 'app/offers/offers.html',
                    title: 'Offers',
                    params: {prefilled: ''},
                    controller: 'OffersController',
                    controllerAs: 'vm'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'offers.edit',
                config: {
                    url: '/edit/:id',
                    templateUrl: 'app/offers/edit_offer.html',
                    controller: 'EditOffersController',
                    controllerAs: 'vm',
                    title: 'editOffer'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'offers.created',
                config: {
                    url: '/createdoffer',
                    templateUrl: 'app/offers/created_offer.html',
                    controller: 'CreatedOfferController',
                    controllerAs: 'vm',
                    title: 'CreatedOffer'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newoffer',
                config: {
                    url: '/newoffer',
                    abstract: true,
                    template: '<ui-view/>',
                    title: 'NewOffer'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'newoffer.home',
                config: {
                    url: '',
                    templateUrl: 'app/offers/new_offer_step1.html',
                    controller: 'NewOfferBeforeRegisterController',
                    controllerAs: 'vm',
                    title: 'NewOfferBeforeRegisterController'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'newoffer.register',
                config: {
                    url: '/register',
                    templateUrl: 'app/offers/new_offer_register.html',
                    controller: 'NewOfferRegisterController',
                    controllerAs: 'vm',
                    title: 'NewOfferRegister',
                    params: {prefilled: null}
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
        ];
    }

})();
