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
                vm.editedNeed.date = response.data.formattedActualTo;
            }).catch(function () {
                console.log('something wrong');
            });
        };

        vm.getRegion = function () {
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

        function saveEditedNeed() {
            var needId = $stateParams.id;
            vm.editedNeed.date = vm.dt;

            return $http.patch('/api/needs/' + needId, {
                'name': vm.editedNeed.title,
                'description': vm.editedNeed.needText,
                'address': vm.editedNeed.address,
                'convenientTime': vm.editedNeed.convenientTime,
                'pickup': vm.editedNeed.status,
                'formattedActualTo': vm.editedNeed.date

            }).then(function () {
                $state.go('needs.created', {id: needId});
            });
        }

        vm.cancel = function () {
            $state.go($rootScope.previousState);
        };

    }
})();

