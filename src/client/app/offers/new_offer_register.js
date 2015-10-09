(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferRegisterController', NewOfferRegisterController);

    NewOfferRegisterController.$inject = ['$state','CreateOfferFactory','$http',
        '$rootScope', 'CreateOfferAddressFactory', '$sessionStorage'];

    function NewOfferRegisterController($state,CreateOfferFactory,$http,
                                        $rootScope, CreateOfferAddressFactory, $sessionStorage) {

        var vm = this;
        vm.title = 'NewOfferRegisterController';
        vm.offer = {};
        //offer data from form will be stored here
        vm.offer.title = $state.params.prefilled.title;  //---> comment for testing
        vm.offer.category = $state.params.prefilled.category;  //---> comment for testing
        //vm.offer.title = 'Куртка в дитячий будинок, інфа - 100%'; // ---> static data for testing
        //vm.offer.category = 'Дитячі куртки'; // ---> static data for testing
        vm.getChecked = false;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;

        activate();

        function getRegion() {
            CreateOfferFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        };

        function setRegion(region) {
            vm.cities = region._embedded.cities;
        };

        vm.submitOffer = function () {
            vm.offer.actualDate = vm.dt.getDate() + '/' +
                parseInt(vm.dt.getMonth() + 1) + '/' + vm.dt.getFullYear();
            vm.offer.get = vm.getChecked;
            vm.offer.images = vm.upload;
            //this will be shown when there will be entries on server to post this data
            /*$http({
             url: 'send-offer-url',
             method: "POST",
             data: { 'message' : vm.offer }
             })
             .then(function(response) {
             // success
             },
             function(response) { // optional
             // failed
             });*/
        };

        function activate() {
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                getRegion();
                CreateOfferAddressFactory.getAddress().then(function (address) {
                    vm.address = address;
                });
            }

        }

    }
})();
