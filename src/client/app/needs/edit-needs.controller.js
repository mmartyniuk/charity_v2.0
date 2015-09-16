/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsContoller', EditNeedsContoller);

    EditNeedsContoller.$inject = ['$location', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditNeedsContoller($location, $filter, $http, $state) {
        var vm = this;
        vm.title = 'EditNeedsContoller';
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

        vm.user.need = 'Хвора дитина';
        vm.user.needText = 'Влад з Дніпропетровська з народження' +
            'страждає на ДЦП: гідроцефалія, порок розвитку головного мозку.' +
            'Владика мучать сильні болі. Мама хлопчика спробувала вже чимало' +
            'методів лікування, проте досі лікарі не змогли отримати бажаного результату.';
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
            console.log(vm.user);
        }
    }
})();
