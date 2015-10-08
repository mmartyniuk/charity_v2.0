/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsController', EditNeedsController);

    EditNeedsController.$inject = [
        '$location', 'EditNeedFactory', '$filter', '$http', '$state', '$rootScope'
    ];

    /* @ngInject */
    function EditNeedsController($location, EditNeedFactory, $filter, $http, $state, $rootScope) {
        var vm = this;
        vm.title = 'EditNeedsController';
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
        vm.editedNeed.time = 'Пн-Пт, 10:00 - 19:00';
        vm.editedNeed.address = 'вул. Шевченка 5/15';
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

        vm.setRegion = function (region) {
            //setting region here
            EditNeedFactory.getCities(region.id).then(function (cities) {
                vm.cities = cities;
            });
        };

        function saveEditedNeed() {
            vm.editedNeed.date = vm.dt;
            $location.path('/needs/createdneed');
        }

        vm.cancel = function () {
            $state.go($rootScope.previousState);
        };

    }
})();

