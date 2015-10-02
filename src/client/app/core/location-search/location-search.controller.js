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
        vm.locationPopover = {
            templateUrl: 'locationPopoverTemplate.html',
            opened: false

        };

        activate();

        function activate() {
            vm.regions = LocationFactory.getRegions();
            vm.cities = LocationFactory.getCities();
        }

        function enableShowCities(id) {
            vm.setRegionId = id;
            vm.showRegions = false;
            vm.showCities = true;
            vm.locationPopover.opened = true;
        }

        function enableShowRegions() {
            vm.showRegions = true;
        }

        function setLocation(city) {
            vm.location = city;
            vm.showCities = false;
            vm.locationPopover.opened = false;
            setTimeout(vm.enableShowRegions, 50);
        }
    }
})();
