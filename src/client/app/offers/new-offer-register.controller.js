(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferRegisterController', NewOfferRegisterController);

    NewOfferRegisterController.$inject = ['$state', 'CreateOfferFactory', '$http',
        '$rootScope', 'CreateOfferAddressFactory', '$sessionStorage', 'SharedFactory'];

    function NewOfferRegisterController($state, CreateOfferFactory, $http,
                                        $rootScope, CreateOfferAddressFactory,
                                        $sessionStorage, SharedFactory) {

        var vm = this;
        vm.title = 'NewOfferRegisterController';
        vm.offer = {}; //offer data from form will be stored here
        vm.offer.title = $state.params.prefilled ?
            $state.params.prefilled.title : '';  //---> comment for testing
        vm.offer.categories = $state.params.prefilled ?
            $state.params.prefilled.categoryHierarchy : []; //---> comment for testing
        vm.images = [];
        vm.getChecked = false;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;
        vm.submitOffer = submitOffer;

        if (!vm.offer.title && $state.$current.includes.newoffer) {
            $state.go('newoffer.home');
            return;
        }

        activate();

        function getRegion() {
            SharedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        }

        function setRegion(region) {
            vm.cities = region._embedded.cities;
        }

        function submitOffer() {
            vm.offer.actualDate = vm.dt.getDate() + '/' +
                parseInt(vm.dt.getMonth() + 1) + '/' + vm.dt.getFullYear();
            vm.offer.get = vm.getChecked;
            vm.postUrl = '/api/createOffer';
            // data that is going to be sent to backend
            vm.data = {
                'name': vm.offer.title,
                'categories': vm.offer.categories,
                'description': vm.offer.description,
                'images[0]': vm.images[0],
                'images[1]': vm.images[1],
                'images[2]': vm.images[2],
                'images[3]': vm.images[3],
                'images[4]': vm.images[4],
                'images[5]': vm.images[5],
                'city': JSON.stringify(vm.offer.city),
                'address': vm.address.location,
                'topicality': vm.offer.actualDate, // Date format: dd/mm/yyyy
                'convenientTime': vm.offer.suitableTime,
                'pickup': vm.getChecked
            };
            SharedFactory.postItem(vm.postUrl, vm.data, $sessionStorage.token,
                successSubmitOffer, errorSubmitOffer);
        }

        function successSubmitOffer() {
            $state.go('offers.home');
        }

        function errorSubmitOffer() {
            console.log('Something went wrong :(');
        }

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
