(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferBeforeRegisterController', NewOfferBeforeRegisterController);

    NewOfferBeforeRegisterController.$inject = ['CreateOfferFactory',
        '$state', '$sessionStorage', '$rootScope'];

    function NewOfferBeforeRegisterController(CreateOfferFactory,
                                              $state, $sessionStorage, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewOfferBeforeRegisterController';
        activate();

        vm.offer = {}; //all data from this form will be stored here

        //using state object here to post submitted data to next page
        vm.submitOffer = function(title, category) {
            // some ui validation should be applied here, tbd in future
            $state.go('newoffer.register', {prefilled: vm.offer});
        };
        //getting categories object from service
        function activate() {
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                vm.categories = CreateOfferFactory.getCategories();
            }
        }
    }
})();
