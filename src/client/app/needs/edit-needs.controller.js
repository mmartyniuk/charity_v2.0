/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsController', EditNeedsController);

    EditNeedsController.$inject = [
        '$http', '$stateParams', 'EditNeedFactory', '$state', '$rootScope'
    ];

    /* @ngInject */
    function EditNeedsController($http, $stateParams, EditNeedFactory, $state, $rootScope) {
        var vm = this;
        vm.title = 'EditNeedsController';
        vm.saveEditedNeed = saveEditedNeed;
        vm.cancel = cancel;
        vm.currentNeed = currentNeed;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;
        vm.editedNeed = {};
        vm.needId = $stateParams.id;
        vm.date = {};
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
            vm.getRegion();
            vm.currentNeed();
        }

        function currentNeed() {
            EditNeedFactory.getConcreteNeed($stateParams.id).then(function (response) {
                vm.editedNeed.title = response.data.name;
                vm.editedNeed.needText = response.data.description;
                vm.editedNeed.address = response.data.address;
                vm.editedNeed.convenientTime = response.data.convenientTime;
                vm.editedNeed.date = response.data.formattedActualTo;
            }).catch(function () {
                console.log('something wrong');
            });
        }

        function getRegion() {
            EditNeedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        }

        function setRegion(region) {
            vm.cities = region._embedded.cities;
        }

        function saveEditedNeed() {
            vm.editedNeed.date = vm.dt;
            vm.editedNeed.needId = vm.needId;

            return EditNeedFactory.updateCurrentNeed(vm.editedNeed).then(function () {
                $state.go('needs.created', {id: vm.needId});
            });
        }

        function cancel() {
            $state.go($rootScope.previousState, {id: vm.needId});
        }

    }
})();

