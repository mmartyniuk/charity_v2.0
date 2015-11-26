(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['$location', 'NeedsFactory', '$state'];

    function NeedsController($location,NeedsFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.contentType = 'Потреби';
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
        vm.searchLabel = 'Усі потреби:';
        vm.searchValue = $state.params.prefilled.searchValue;
        vm.category = $state.params.prefilled.category;
        vm.location = $state.params.prefilled.location;

        activate();

        function activate() {
            setSearch();
        }

        function setSearch() {
            vm.currentPage = 0;
            getSearchData();
        }

        function getSearchData() {
            NeedsFactory.getSearchNeeds(vm.currentPage, vm.itemsPerPage,
                vm.searchValue, vm.region, vm.location, vm.categoryHierarchy).then(function(data) {
                vm.needs = data.needs;
                vm.currentPage = data.currentPage;
                vm.totalItems = data.totalItems;
                vm.itemsPerPage = data.itemsPerPage;
                if ((vm.searchValue || vm.location || vm.category) &&
                    data.totalItems > 0) { //assigning appropriate value to search label
                    vm.searchLabel = 'За Вашим запитом знайдено потреб: ' + data.totalItems;
                } else if (data.totalItems === 0) {
                    vm.searchLabel = 'На жаль за Вашим запитом нічого не знайдено.';
                } else {
                    vm.searchLabel = 'Усі потреби:';
                }
            });
        }

        function setCategory(value) {
            vm.category = value;
            vm.searchValue = '';
            vm.location = '';
            setSearch();
        }

        //setting itemsPerPage to value that was selected by user in the dropdown menu
        function setItemsPerPage(index) {
            vm.currentPage = 0;
            vm.itemsPerPage = vm.perPageDropdownItems[index].value;
            getSearchData();
        }
    }
})();
