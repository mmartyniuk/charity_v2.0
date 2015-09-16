/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersContoller', EditOffersContoller);

    EditOffersContoller.$inject = ['$location', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditOffersContoller($location, $filter, $http, $state) {
        var vm = this;
        vm.title = 'editOffersContoller';
        vm.saveUser = saveUser;
        vm.user = {};
        vm.user.date = {};
        /*Memo: Cities with Regions are hardcoded we will get them from backend in future */
        vm.regions = [{
            value: 'Івано-Франківська область',
            text: 'Івано-Франківська область'
        }, {
            value: 'Київська область‎',
            text: 'Київська область‎'
        },];

        vm.city = [{
            value: 'Івано-Франківськ',
            text: 'Івано-Франківськ'
        }, {
            value: 'Київ',
            text: 'Київ'
        },];
        /* End of Memo*/

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
            text: 'Зможу забрати'
        }, {
            value: 0,
            text: 'Не зможу забрати'
        }];

        activate();

        function activate() {}

        function saveUser() {
            vm.user.date = vm.dt;
        }
    }
})();
