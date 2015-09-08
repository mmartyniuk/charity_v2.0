(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('LocationFilterController', LocationFilterController);

    function LocationFilterController() {
        var vm = this;
        vm.resetFilter = resetFilter;
        vm.setFilter = setFilter;

        function resetFilter() {
            vm.setlocation = '';
        };

        function setFilter(location) {
            vm.setlocation = location;
        };
    }
})();
