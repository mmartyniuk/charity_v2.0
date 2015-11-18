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
                //TODO: apply valid data to vm.editedNeed.images from backend
                vm.editedNeed.images = [{name: 'needs.jpg', preview: '"data:image/jpeg;base64,mnknknkjnkjn'},
                    {name: 'needs2.jpg', preview: '"data:image/jpeg;base64,mnknknkfyuktyujnkjn'}];
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
            //TODO: remove commented code if not needed
            /*return $http.patch('/api/needs/' + vm.needId, {
                'name': vm.editedNeed.title,
                'description': vm.editedNeed.needText,
                'address': vm.editedNeed.address,
                'convenientTime': vm.editedNeed.convenientTime,
                'pickup': vm.editedNeed.status,
                'formattedActualTo': vm.editedNeed.date

            }).then(function () {
                $state.go('needs.created', {id: vm.needId});
            });*/

            return EditNeedFactory.updateCurrentNeed(vm.editedNeed)
                .then($state.go('needs.created', {id: vm.needId}));
        }

        function cancel() {
            $state.go($rootScope.previousState, {id: vm.needId});
        }

    }
})();

