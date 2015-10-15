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
        vm.setItemsPerPage = setItemsPerPage;
        vm.needs = {};
        vm.perPageDropdownItems = [{ //list of values that will be shown in itemsPerPage dropdown
            label: '5 потреб',
            value: 5
        },{
            label: '10 потреб',
            value: 10
        },{
            label: '25 потреб',
            value: 25
        },{
            label: '50 потреб',
            value: 50
        }];

        vm.itemsPerPage = 5;
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

        //setting itemsPerPage to value that was selected by user in the dropdown menu
        function setItemsPerPage(index) {
            vm.currentPage = 0;
            vm.itemsPerPage = vm.perPageDropdownItems[index].value;
            getSearchData(vm.search);
        }
    }
})();
