(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['NeedsFactory'];

    function NeedsController(NeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';
        vm.setSearch = setSearch;
        vm.l = vm.locationValue;

        activate();

        function activate() {
            vm.data = NeedsFactory.getNeeds();
            //console.log(vm.locationValue);
            //console.log(vm.locationsEntered);
        }

        function setSearch(value) {
            vm.search = value;
        }
    }
})();
