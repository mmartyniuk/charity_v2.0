/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = [
        '$stateParams', 'EditOfferFactory', '$state', '$rootScope'];
    /* @ngInject */
    function EditOffersController($stateParams, EditOfferFactory, $state, $rootScope) {
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

        vm.getRegion = function() {
            EditOfferFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        };

        activate();

        function activate() {
            vm.getRegion();
            vm.currentOffer();
        }

        vm.setRegion = function (region) {
            vm.cities = region._embedded.cities;
        };

        function saveEditedOffer(data) {
            vm.editedOffer.date = vm.dt;

        }

        vm.cancel = function () {
            $state.go($rootScope.previousState);
        };

    }
})();
