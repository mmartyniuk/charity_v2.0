(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['$location','NeedsFactory', '$state'];

    function NeedsController($location,NeedsFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';
        vm.setSearch = setSearch;
        vm.setCategory = setCategory;
        vm.needs = {};
        vm.needs.category = $state.params.prefilled.category;
        vm.needs.location = $state.params.prefilled.location;
        vm.category = vm.needs.category;
        vm.location = vm.needs.location;
        vm.categoryValue = vm.category;

        activate();

        function activate() {
            vm.data = NeedsFactory.getNeeds();
        }

        function setSearch(value) {
            vm.search = value;
        }

        function setCategory(value) {
            vm.category = value;
        }
    }
})();
