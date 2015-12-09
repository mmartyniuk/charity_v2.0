(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['OffersFactory', '$state', '$rootScope', '$translate'];

    function OffersController(OffersFactory, $state, $rootScope, $translate) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';
        vm.setSearch = setSearch;
        vm.setCategory = setCategory;
        vm.getSearchData = getSearchData;
        vm.setItemsPerPage = setItemsPerPage;
        vm.offers = {};

        vm.itemsPerPage = 5;
        vm.searchLabel = 'Усі пропозиції:';
        vm.searchValue = $state.params.prefilled.searchValue;
        vm.category = $state.params.prefilled.category;
        vm.location = $state.params.prefilled.location;
        vm.searchResultState = 'initial';
        vm.perPageDropdownItems = [];

        activate();

        function activate() {
            translate();
            $rootScope.$on('$translateChangeSuccess', translate);
            setSearch();
        }

        function setSearch() {
            vm.currentPage = 0;
            getSearchData();
        }

        function getSearchData() {
            OffersFactory.getSearchOffers(vm.currentPage, vm.itemsPerPage,
                vm.searchValue, vm.region, vm.location, vm.categoryHierarchy).then(function(data) {
                vm.offers = data.offers;
                vm.currentPage = data.currentPage;
                vm.totalItems = data.totalItems;
                vm.itemsPerPage = data.itemsPerPage;
                if ((vm.searchValue || vm.location || vm.category) &&
                    data.totalItems > 0) { //assigning appropriate value to search label
                    vm.searchResultState = 'found';
                } else if (data.totalItems === 0) {
                    vm.searchResultState = 'nothing';
                } else {
                    vm.searchResultState = 'initial';
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

        function translate() {
            $translate(['offers.offersPaginationLabel']).then(function(translations) {
                vm.perPageDropdownItems = [{
                    //list of values that will be shown in itemsPerPage dropdown
                    label: '5 ' + translations['offers.offersPaginationLabel'],
                    value: 5
                },{
                    label: '10 ' + translations['offers.offersPaginationLabel'],
                    value: 10
                },{
                    label: '25 ' + translations['offers.offersPaginationLabel'],
                    value: 25
                },{
                    label: '50 ' + translations['offers.offersPaginationLabel'],
                    value: 50
                }];
            });
        }
    }
})();
