/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsController', EditNeedsController);

    EditNeedsController.$inject = ['$http', '$stateParams', '$location',
        'EditNeedFactory', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditNeedsController($http, $stateParams, $location, EditNeedFactory) {
        var vm = this;
        vm.title = 'EditNeedsController';
        vm.saveEditedNeed = saveEditedNeed;
        vm.currentNeed = {};
        vm.editedNeed = {};
        vm.date = {};
        /*      vm.editedNeed.title = 'Хвора дитина'; will get new values
         vm.editedNeed.needText = 'Влад з Дніпропетровська з народження' +
         'страждає на ДЦП: гідроцефалія, порок розвитку головного мозку.' +
         'Владика мучать сильні болі. Мама хлопчика спробувала вже чимало' +
         'методів лікування, проте досі лікарі не змогли отримати бажаного результату.';
         vm.editedNeed.regions = 'Київська область‎';
         vm.editedNeed.city = 'Київ';
         vm.editedNeed.time = 'Пн-Пт, 10:00 - 19:00';
         vm.editedNeed.address = 'вул. Шевченка 5/15';*/
        vm.editedNeed.address = vm.currentNeed.address;
        vm.editedNeed.status = 0;
        vm.editedNeedStatuses = [{
            value: 1,
            text: 'Так'
        }, {
            value: 0,
            text: 'Ні'
        }];
        vm.currentNeed = function () {
            EditNeedFactory.getConcreteNeed($stateParams.id).then(function (response) {
                console.log(response);
            }).catch(function () {
                console.log('something wrong');
            });
        };

        activate();

        function activate() {
            vm.regions = EditNeedFactory.getRegions();
            console.log(vm.currentNeed.convenientTime);
            vm.currentNeed();
            vm.currentNeed = EditNeedFactory.getRegions();
        }

        vm.setRegion = function (region) {
            //setting region here
            EditNeedFactory.getCities(region.id).then(function (cities) {
                vm.cities = cities;
            });
        };

        function saveEditedNeed(data) {
            vm.editedNeed.date = vm.dt;
            /*return $http.patch('/api/needs/1', {id: vm.currentNeed.id, name: data});*/
            /* $location.path('/needs/createdneed');*/
            console.log(vm.editedNeed.address);
        }

    }
})();

