/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = [
        '$location', '$filter', '$http', '$state', 'EditOfferFactory', '$rootScope'
    ];

    /* @ngInject */
    function EditOffersController($location, $filter, $http, $state, EditOfferFactory, $rootScope) {
        var vm = this;
        vm.title = 'EditOffersController';
        vm.saveEditedOffer = saveEditedOffer;
        vm.editedOffer = {};
        vm.date = {};
        vm.editedOffer.title = 'Цуценя';
        vm.editedOffer.offerText = 'Віддам цуценя в хороші руки!!!!' +
            'Безкоштовно!!! Дівчинка, вік 1,5 міс, дуже грайлива' +
            'і розумна собачка, середньої породи. Потрібні хороші люблячі';
        vm.editedOffer.regions = 'Київська область‎';
        vm.editedOffer.city = 'Київ';
        vm.editedOffer.time = 'Пн-Пт, 10:00 - 19:00';
        vm.editedOffer.address = 'вул. Тараса Шевченка 5/15';
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
            vm.regions = EditOfferFactory.getRegions();
        }

        vm.setRegion = function (region) {
            //setting region here
            EditOfferFactory.getCities(region.id).then(function (cities) {
                vm.cities = cities;
            });
        };

        function saveEditedOffer() {
            vm.editedOffer.date = vm.dt;
            $location.path('/offers/createdoffer');
        }

        vm.cancel = function () {
            $state.go($rootScope.previousState);
        };

    }
})();
