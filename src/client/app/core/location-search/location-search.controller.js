(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('LocationSearchController', LocationSearchController);

    LocationSearchController.$inject = ['LocationFactory'];

    function LocationSearchController(LocationFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'LocationSearchController';
        vm.showCities = false;
        vm.enableShowCities = enableShowCities;
        vm.enableShowRegions = enableShowRegions;
        vm.setLocation = setLocation;
        vm.showRegions = true;
        vm.locationButton = vm.location || 'Вкажіть місто';
        vm.dropdown = {
            isopen: false
        };

        activate();

        function activate() {
            LocationFactory.getRegions(successGetRegions);
        }

        function enableShowCities(api) {
            LocationFactory.getCities(api, successGetCities);
            vm.showRegions = false;
            vm.showCities = true;
        }

        function enableShowRegions() {
            vm.showRegions = true;
        }

        function setLocation(city) {
            vm.location = city;
            vm.locationButton = vm.location;
            vm.dropdown.isopen = false;
            vm.showCities = false;
            vm.showRegions = true;
        }

        function successGetRegions(data) {
            vm.regions = data._embedded.regions;
            angular.forEach(vm.regions, function(value) {
                value._links.cities.href = value._links.cities.href.slice(21);
            }, vm.regions);
        }

        function successGetCities(data) {
            vm.cities = data._embedded.cities;
        }
    }
})();
