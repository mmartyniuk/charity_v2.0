/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersController', EditOffersController);

    EditOffersController.$inject = ['$location', '$filter', '$http', '$state', 'EditOfferFactory'];

    /* @ngInject */
    function EditOffersController($location, $filter, $http, $state, EditOfferFactory) {
        var vm = this;
        vm.title = 'EditOffersController';
        vm.saveUser = saveUser;
        vm.user = {};
        vm.user.date = {};
        vm.offer = {};
        vm.user.offer = 'Цуценя';
        vm.user.offerText = 'Віддам цуценя в хороші руки!!!!' +
            'Безкоштовно!!! Дівчинка, вік 1,5 міс, дуже грайлива' +
            'і розумна собачка, середньої породи. Потрібні хороші люблячі';
        vm.user.regions = 'Київська область‎';
        vm.user.city = 'Київ';
        vm.user.flat = 'Номер квартири';
        vm.user.time = 'Пн-Пт, 10:00 - 19:00';
        vm.user.street = 'вул. Тараса Шевченка';
        vm.user.house = 'Номер будинку';
        vm.user.status = 0;
        vm.userStatuses = [{
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

        vm.setRegion = function(region) {
            //setting region here
            EditOfferFactory.getCities(region.id).then(function(cities) {
                vm.cities = cities;
            });
        };

        function saveUser() {
            vm.user.date = vm.dt;
            $location.path('/offers/createdoffer');
        }

    }
})();
