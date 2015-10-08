/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsController', EditNeedsController);

    EditNeedsController.$inject = [
        '$stateParams', 'EditNeedFactory', '$state', '$rootScope'
    ];

    /* @ngInject */
    function EditNeedsController($stateParams, EditNeedFactory, $state, $rootScope) {
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

        vm.getRegion = function() {
            EditNeedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        };

        activate();

        function activate() {
            vm.getRegion();
            vm.currentNeed();
        }

        vm.setRegion = function (region) {
            vm.cities = region._embedded.cities;
        };

        function saveEditedNeed(data) {
            vm.editedNeed.date = vm.dt;
        }

        vm.cancel = function () {
            $state.go($rootScope.previousState);
        };

    }
})();

