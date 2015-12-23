/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = [
        '$http', '$stateParams', 'EditOfferFactory', '$state', '$rootScope', '$translate'];
    /* @ngInject */
    function EditOffersController($http, $stateParams, EditOfferFactory, $state, $rootScope, $translate) {
        var vm = this;
        vm.title = 'EditOffersController';
        vm.saveEditedOffer = saveEditedOffer;
        vm.currentOffer = currentOffer;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;
        vm.cancel = cancel;
        vm.editedOffer = {};
        vm.offerId = $stateParams.id;
        vm.date = {};
        vm.editedOffer.status = 0;
        vm.editedOfferStatuses = [{
            value: 1,
            text: 'Так'
        }, {
            value: 0,
            text: 'Ні'
        }];

        activate();

        function activate() {
            translate();
            $rootScope.$on('$translateChangeSuccess', translate);
            vm.getRegion();
            vm.currentOffer();
        }

        function currentOffer() {
            EditOfferFactory.getConcreteOffer($stateParams.id).then(function (response) {
                //TODO: categories of edited need should be provided be backend
                vm.editedOffer.title = response.data.name;
                vm.editedOffer.offerText = response.data.description;
                vm.editedOffer.region = response.data._embedded.city.region;
                vm.editedOffer.city = response.data._embedded.city;
                vm.editedOffer.address = response.data.address;
                vm.editedOffer.convenientTime = response.data.convenientTime;
                vm.editedOffer.date = response.data.formattedActualTo;
                vm.convenientDate = (JSON.parse(response.data.convenientTime) instanceof Object) ?
                    JSON.parse(response.data.convenientTime) : vm.convenientDate;
            }).catch(function () {
                console.log('something wrong');
            });
        }

        function getRegion() {
            EditOfferFactory.getRegions().then(function (regions) {
                vm.regions = regions;
                if (vm.editedOffer.region) {
                    var cities = _.findWhere(vm.regions, vm.editedOffer.region);
                    vm.cities = cities._embedded.cities;
                }
            });
        }

        function setRegion(region, editOfferForm) {
            vm.cities = region._embedded.cities;
            editOfferForm.city.$invalid = true;
            editOfferForm.$invalid = true;
        }

        function saveEditedOffer() {
            vm.editedOffer.date = vm.dt;
            vm.editedOffer.offerId = vm.offerId;
            vm.editedOffer.cagories = vm.categoryHierarchy;
            vm.editedOffer.convenientTime = JSON.stringify(vm.convenientDate);
            return EditOfferFactory.updateCurrentOffer(vm.editedOffer).then(function () {
                $state.go('offers.created', {id: vm.offerId});
            });
        }

        function cancel() {
            $state.go($rootScope.previousState, {id: vm.offerId});
        }

        function translate() {
            $translate(['core.yesButton', 'core.noButton']).then(function(translations) {
                vm.editedOfferStatuses = [{
                    value: 1,
                    text: translations['core.yesButton']
                }, {
                    value: 0,
                    text: translations['core.noButton']
                }];
            });
        }

    }
})();
