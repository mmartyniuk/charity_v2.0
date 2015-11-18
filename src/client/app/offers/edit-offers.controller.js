/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = [
        '$http', '$stateParams', 'EditOfferFactory', '$state', '$rootScope'];
    /* @ngInject */
    function EditOffersController($http, $stateParams, EditOfferFactory, $state, $rootScope) {
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
            vm.getRegion();
            vm.currentOffer();
        }

        function currentOffer() {
            EditOfferFactory.getConcreteOffer($stateParams.id).then(function (response) {
                vm.editedOffer.title = response.data.name;
                vm.editedOffer.offerText = response.data.description;
                vm.editedOffer.address = response.data.address;
                vm.editedOffer.convenientTime = response.data.convenientTime;
                vm.editedOffer.date = response.data.formattedActualTo;
                //TODO: apply valid data to vm.editedOffer.images from backend
                vm.editedOffer.images = [{name: 'offer.jpg', preview: '"data:image/jpeg;base64,mnknknkjnkjn'},
                    {name: 'offer2.jpg', preview: '"data:image/jpeg;base64,mnknknkfyuktyujnkjn'}];

            }).catch(function () {
                console.log('something wrong');
            });

        }

        function getRegion() {
            EditOfferFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        }

        vm.setRegion = function (region) {
            vm.cities = region._embedded.cities;
        }

        function saveEditedOffer() {
            vm.editedOffer.date = vm.dt;
            vm.editedOffer.offerId = vm.offerId;
            //TODO: remove commented code if not needed
            /*return $http.patch('/api/offers/' + vm.offerId, {
                'name': vm.editedOffer.title,
                'description': vm.editedOffer.offerText,
                'address': vm.editedOffer.address,
                'convenientTime': vm.editedOffer.convenientTime,
                'pickup': vm.editedOffer.status,
                'formattedActualTo': vm.editedOffer.date

            }).then(function () {
                $state.go('offers.created', {id: vm.offerId});
            });*/

            return EditOfferFactory.updateCurrentOffer(vm.editedNeed)
                .then($state.go('offers.created', {id: vm.needId}));
        }

        function cancel() {
            $state.go($rootScope.previousState, {id: vm.offerId});
        }

    }
})();
