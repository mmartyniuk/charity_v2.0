(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('LocationSearchController', LocationSearchController);

    LocationSearchController.$inject = ['NeedsFactory'];

    function LocationSearchController(NeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'LocationSearchController';
        vm.showCities = false;
        vm.showRegions = false;
        vm.enableShowCities = enableShowCities;
        vm.enableShowRegions = enableShowRegions;
        vm.setLocation = setLocation;
        vm.setRegionId = null;


        activate();

        function activate() {
            vm.regions = NeedsFactory.getRegions();
            vm.cities = NeedsFactory.getCities();
        }

        function enableShowCities(id) {
            vm.setRegionId = id;
            vm.showCities = true;
            vm.showRegions = false;
        }

        function enableShowRegions() {
            vm.showRegions = true;
        }

        function setLocation(city){
            vm.locationValue = city;
            console.log(vm.locationValue);
            vm.showRegions = false;
            vm.showCities = false;
            return vm.locationValue;
        }
    }
})();
