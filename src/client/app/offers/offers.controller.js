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
        vm.loadPage = loadPage;
        vm.setCategory = setCategory;
        vm.offers = {};
        vm.offers.category = $state.params.prefilled.category;
        vm.offers.location = $state.params.prefilled.location;
        vm.category = vm.offers.category;
        vm.location = vm.offers.location;
        vm.categoryValue = vm.category;

        activate();

        function activate() {
            loadPage();
        }

        function loadPage() {
            OffersFactory.getOffers(vm.currentPage).then(function(data) {
                vm.offers = data.offers;
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
