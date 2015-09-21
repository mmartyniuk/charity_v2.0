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
        vm.saveEditedNeed = saveEditedNeed;
        vm.editedNeed = {};
        vm.date = {};
        vm.editedNeed.title = 'Хвора дитина';
        vm.editedNeed.needText = 'Влад з Дніпропетровська з народження' +
            'страждає на ДЦП: гідроцефалія, порок розвитку головного мозку.' +
            'Владика мучать сильні болі. Мама хлопчика спробувала вже чимало' +
            'методів лікування, проте досі лікарі не змогли отримати бажаного результату.';
        vm.editedNeed.regions = 'Київська область‎';
        vm.editedNeed.city = 'Київ';
        vm.editedNeed.flat = 'Номер квартири';
        vm.editedNeed.time = 'Пн-Пт, 10:00 - 19:00';
        vm.editedNeed.street = 'вул. Тараса Шевченка';
        vm.editedNeed.house = 'Номер будинку';
        vm.editedNeed.status = 0;
        vm.editedNeedStatuses = [{
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

        function saveEditedNeed() {
            vm.editedNeed.date = vm.dt;
            $location.path('/needs/createdneed');
        }

    }
})();

