/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = ['$http', '$stateParams', '$location',
        'EditOfferFactory', '$filter', '$http', '$state'];
    /* @ngInject */
    function EditOffersController($http, $stateParams, $location, EditOfferFactory) {
        var vm = this;
        vm.title = 'EditOffersController';
        vm.saveEditedOffer = saveEditedOffer;
        vm.currentOffer = {};
        vm.editedOffer = {};
        vm.date = {};
        vm.editedOffer.status = 0;
        vm.editedOfferStatuses = [{
            value: 1,
            text: 'Так'
        }, {
            value: 0,
            text: 'Ні'
        }];

        vm.currentOffer = function () {
            EditOfferFactory.getConcreteOffer($stateParams.id).then(function (response) {
                vm.editedOffer.title = response.data.name;
                vm.editedOffer.offerText = response.data.description;
                vm.editedOffer.address = response.data.address;
                vm.editedOffer.convenientTime = response.data.convenientTime;
            }).catch(function () {
                console.log('something wrong');
            });
        };

        activate();

        function activate() {
            vm.regions = EditOfferFactory.getRegions();
            vm.currentOffer();
        }

        vm.setRegion = function(region) {
            //setting region here
            EditOfferFactory.getCities(region.id).then(function(cities) {
                vm.cities = cities;
            });
        };

        function saveEditedOffer(data) {
            vm.editedOffer.date = vm.dt;
            $location.path('/offers/createdoffer');

        }

    }
})();
