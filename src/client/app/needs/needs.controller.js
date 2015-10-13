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
        vm.getSearchData = getSearchData;
        vm.needs = {};
        vm.itemsPerPage = 3;
        vm.preSearch = $state.params.prefilled.preSearch;
        vm.category = $state.params.prefilled.category;
        vm.location = $state.params.prefilled.location;

        activate();

        function activate() {
            setSearch(vm.preSearch);
        }

        function setSearch(value) {
            vm.search = value;
            vm.currentPage = 0;
            getSearchData(vm.search);
        }

        function getSearchData(search) {
            NeedsFactory.getSearchNeeds(vm.currentPage, vm.itemsPerPage, search)
                .then(function(data) {
                vm.needs = data.needs;
                vm.currentPage = data.currentPage;
                vm.totalItems = data.totalItems;
                vm.itemsPerPage = data.itemsPerPage;
            });
        }

        function setCategory(value) {
            vm.category = value;
        }
    }
})();
