/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersContoller', EditOffersContoller);

    EditOffersContoller.$inject = ['$location', 'CreateOfferFactory', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditOffersContoller($location, CreateOfferFactory, $filter, $http, $state) {
        var vm = this;
        vm.title = 'editOffersContoller';
        vm.saveUser = saveUser;
        vm.user = {};
        vm.user.date = {};
        vm.offer = {};
        vm.user.offer = 'test title';
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
            vm.regions = CreateOfferFactory.getRegions();
        }

        vm.setCity = function (id, name) {
            //setting region here
            vm.offer.region = name;
            vm.currentRegion = id;
            vm.cities = CreateOfferFactory.getCities(id);
        };

        function saveUser() {
            vm.user.date = vm.dt;
            $location.path('/offers/createdoffer');
        }

    }
})();
