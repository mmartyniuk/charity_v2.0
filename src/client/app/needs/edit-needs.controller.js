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
                vm.editedNeed.title = response.data.name;
                vm.editedNeed.needText = response.data.description;
                vm.editedNeed.address = response.data.address;
                vm.editedNeed.convenientTime = response.data.convenientTime;
            }).catch(function () {
                console.log('something wrong');
            });
        };

        activate();

        function activate() {
            vm.regions = EditNeedFactory.getRegions();
            vm.currentNeed();
        }

        vm.setRegion = function (region) {
            //setting region here
            EditNeedFactory.getCities(region.id).then(function (cities) {
                vm.cities = cities;
            });
        };

        function saveEditedNeed(data) {
            vm.editedNeed.date = vm.dt;
            $location.path('/needs/createdneed');

        }

    }
})();

