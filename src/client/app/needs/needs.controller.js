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
        vm.loadPage = loadPage;
        vm.setCategory = setCategory;
        vm.needs = {};
        vm.needs.category = $state.params.prefilled.category;
        vm.needs.location = $state.params.prefilled.location;
        vm.category = vm.needs.category;
        vm.location = vm.needs.location;

        activate();

        function activate() {
            loadPage();
        }

        function loadPage() {
            NeedsFactory.getNeeds(vm.currentPage).then(function(data) {
                vm.needs = data.needs;
                vm.currentPage = data.currentPage;
                vm.totalItems = data.totalItems;
                vm.itemsPerPage = data.itemsPerPage;
            });
        }

        function setSearch(value) {
            vm.search = value;
        }

        function setCategory(value) {
            vm.category = value;
        }
    }
})();
