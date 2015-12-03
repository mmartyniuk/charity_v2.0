/*jshint -W100: false, multistr: true*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('EditNeedsController', EditNeedsController);

    EditNeedsController.$inject = [
        '$http', '$stateParams', 'EditNeedFactory', '$state', '$rootScope', '$scope'
    ];

    /* @ngInject */
    function EditNeedsController($http, $stateParams, EditNeedFactory, $state, $rootScope, $scope) {
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
                //TODO: categories of edited need should be provided be backend
                vm.editedNeed.title = response.data.name;
                vm.editedNeed.needText = response.data.description;
                vm.editedNeed.region = response.data._embedded.city.region;
                vm.editedNeed.city = response.data._embedded.city;
                vm.editedNeed.address = response.data.address;
                vm.convenientDate = (JSON.parse(response.data.convenientTime) instanceof Object) ?
                    JSON.parse(response.data.convenientTime) : vm.convenientDate;
            }).catch(function () {
                console.log('something wrong');
            });
        }

        function getRegion() {
            EditNeedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
                if (vm.editedNeed.region) {
                    var cities = _.findWhere(vm.regions, vm.editedNeed.region);
                    vm.cities = cities._embedded.cities;
                }
            });
        }

        function setRegion(region, editNeedForm) {
            vm.cities = region._embedded.cities;
            editNeedForm.city.$invalid = true;
        }

        function saveEditedNeed() {
            vm.editedNeed.date = vm.dt;
            vm.editedNeed.needId = vm.needId;
            vm.editedNeed.cagories = vm.categoryHierarchy;
            vm.editedNeed.convenientTime = JSON.stringify(vm.convenientDate);
            return EditNeedFactory.updateCurrentNeed(vm.editedNeed).then(function () {
                $state.go('needs.created', {id: vm.needId});
            });
        }

        function cancel() {
            $state.go($rootScope.previousState, {id: vm.needId});
        }


    }
})();

