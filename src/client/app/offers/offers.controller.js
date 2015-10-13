(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', 'OffersFactory', '$state'];

    function OffersController($location, OffersFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';
        vm.setSearch = setSearch;
        vm.setCategory = setCategory;
        vm.getSearchData = getSearchData;
        vm.offers = {};
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
            OffersFactory.getSearchOffers(vm.currentPage, vm.itemsPerPage, search)
                .then(function(data) {
                vm.offers = data.offers;
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
