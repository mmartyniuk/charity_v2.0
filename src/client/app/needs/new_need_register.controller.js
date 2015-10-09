(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController);

    NewNeedRegisterController.$inject = ['$state','CreateNeedFactory','$http',
        '$sessionStorage', '$rootScope', 'CreateNeedAddressFactory', 'SharedFactory'];

    function NewNeedRegisterController($state,CreateNeedFactory, $http,
                                       $sessionStorage, $rootScope, CreateNeedAddressFactory, SharedFactory) {

        /* jshint validthis:true */

        var vm = this;
        activate();
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        vm.need.title = $state.params.prefilled.title;  //---> commented for testing
        vm.need.category = $state.params.prefilled.category;  //---> commented for testing
        //vm.need.title = 'Куртка в дитячий будинок, інфа - 100%'; // ---> static data for testing
        //vm.need.category = 'Дитячі куртки'; // ---> static data for testing
        vm.getChecked = false;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;

        function getRegion() {
            SharedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        };

         function setRegion(region) {
            vm.cities = region._embedded.cities;
        };

        vm.submitNeed = function() {
            vm.need.actualDate = vm.dt.getDate() + '/' +
            parseInt(vm.dt.getMonth() + 1) + '/' + vm.dt.getFullYear();
            vm.need.get = vm.getChecked;
            vm.need.images = vm.upload;
            //this will be shown when there will be entries on server to post this data
            /*$http({
             url: '/api/new_need',
             method: "GET",
             data: { 'message' : vm.need }
             })
             .then(function(response) {
             // success
             },
             function(response) { // optional
             // failed
             });
             };*/

            //here will be additional ajax call to server to get only needed cities by id
        };

        function activate() {

            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                getRegion();
                CreateNeedAddressFactory.getAddress().then(function(address) {
                    vm.address = address;
                });
            }

        }
    }
})();
