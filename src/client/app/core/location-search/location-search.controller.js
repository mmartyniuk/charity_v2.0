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
        vm.setLocation = setLocation;
        vm.setRegionId = null;
        vm.locationPopover = {
            content: 'Test',
            title: 'Title',
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
            vm.showCities = true;
            vm.locationPopover.opened = true;
        }

        function setLocation(city){
            vm.locationValue = city;
            vm.showCities = false;
            vm.location = vm.locationValue;
            vm.locationPopover.opened = false;
        }
    }
})();
