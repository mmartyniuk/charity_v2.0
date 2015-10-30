﻿(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController);

    NewNeedRegisterController.$inject = ['$state','CreateNeedFactory','$http',
        '$sessionStorage', '$rootScope', 'CreateNeedAddressFactory', 'SharedFactory'];

    function NewNeedRegisterController($state,CreateNeedFactory, $http,
                                       $sessionStorage, $rootScope,
                                       CreateNeedAddressFactory, SharedFactory) {

        /* jshint validthis:true */

        var vm = this;
        activate();
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        vm.need.categories = [];
        vm.need.title = $state.params.prefilled.title;
        vm.need.categories[0] = $state.params.prefilled.mainCategory;
        vm.need.categories[1] = $state.params.prefilled.subcategory;
        vm.need.categories[2] = $state.params.prefilled.category;
        vm.images = [];
        vm.getChecked = false;
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;

        function getRegion() {
            SharedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        }

        function setRegion(region) {
            vm.cities = region._embedded.cities;
        }

        vm.submitNeed = function() {
            vm.need.actualDate = vm.dt.getDate() + '/' +
            parseInt(vm.dt.getMonth() + 1) + '/' + vm.dt.getFullYear();
            vm.need.get = vm.getChecked;
            vm.uploadUrl = '/api/createNeed';
            // data that is going to be sent to backend
            vm.data = {
                'name': vm.need.title,
                'categories': vm.need.categories,
                'description': vm.need.description,
                'image1': vm.images[0],
                'image2': vm.images[1],
                'image3': vm.images[2],
                'image4': vm.images[3],
                'city': JSON.stringify(vm.need.city),
                'address': vm.address.location,
                'topicality': vm.need.actualDate, // Date format: dd/mm/yyyy
                'convenientTime': vm.need.suitableTime,
                'pickup': vm.getChecked
            }
            SharedFactory.postItem(vm.uploadUrl, vm.data);
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
             });*/

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
