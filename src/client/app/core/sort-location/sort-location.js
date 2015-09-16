(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('SortLocationController', SortLocationController);

    function SortLocationController() {
        var vm = this;
        vm.resetFilter = resetFilter;
        vm.setFilter = setFilter;
        vm.setlocation = '';
        vm.title = 'SortLocationController';

        function resetFilter() {
            vm.setlocation = '';
        }

        function setFilter(location) {
            vm.setlocation = location;
        }
    }
})();
