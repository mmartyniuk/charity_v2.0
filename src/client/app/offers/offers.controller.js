(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', 'OffersFactory', '$state'];

    function OffersController($location, OffersFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.contentType = 'Пропозиції';
        vm.title = 'OffersController';
        vm.setSearch = setSearch;
        vm.setCategory = setCategory;
        vm.getSearchData = getSearchData;
        vm.setItemsPerPage = setItemsPerPage;
        vm.offers = {};
        vm.perPageDropdownItems = [{ //list of values that will be shown in itemsPerPage dropdown
            label: '5 пропозицій',
            value: 5
        },{
            label: '10 пропозицій',
            value: 10
        },{
            label: '25 пропозицій',
            value: 25
        },{
            label: '50 пропозицій',
            value: 50
        }];

        vm.itemsPerPage = 5;
        vm.searchLabel = 'Усі пропозиції:';
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
            OffersFactory.getSearchOffers(vm.currentPage, vm.itemsPerPage,
                vm.searchValue, vm.region, vm.location, vm.category).then(function(data) {
                vm.offers = data.offers;
                vm.currentPage = data.currentPage;
                vm.totalItems = data.totalItems;
                vm.itemsPerPage = data.itemsPerPage;
                if ((vm.searchValue || vm.location || vm.category) && data.totalItems > 0) { //assigning appropriate value to search label
                    vm.searchLabel = 'За Вашим запитом знайдено пропозицій: ' + data.totalItems;
                } else if (data.totalItems === 0) {
                    vm.searchLabel = 'На жаль за Вашим запитом нічого не знайдено.';
                } else {
                    vm.searchLabel = 'Усі пропозиції:';
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
