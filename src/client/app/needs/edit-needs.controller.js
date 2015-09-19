/*jshint -W100: false, multistr: true*/
(function() {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsContoller', EditNeedsContoller);

    EditNeedsContoller.$inject = ['$location', 'EditNeedFactory', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditNeedsContoller($location, EditNeedFactory, $filter, $http, $state) {
        var vm = this;
        vm.title = 'EditNeedsContoller';
        vm.saveUser = saveUser;
        vm.user = {};
        vm.user.date = {};
        vm.need = {};
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
            text: 'Так'
        }, {
            value: 0,
            text: 'Ні'
        }];

        activate();

        function activate() {
            vm.regions = EditNeedFactory.getRegions();
        }

        vm.setRegion = function(region) {
            //setting region here
            EditNeedFactory.getCities(region.id).then(function(cities) {
                vm.cities = cities;
            });
        };

        function saveUser() {
            vm.user.date = vm.dt;
            $location.path('/needs/createdneed');
        }

    }
})();

