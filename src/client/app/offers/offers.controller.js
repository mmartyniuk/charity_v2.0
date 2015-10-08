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
        vm.itemsPerPage = 3;
        vm.category = $state.params.prefilled.category;
        vm.location = $state.params.prefilled.location;

        activate();

        function activate() {
            loadPage();
        }

        function loadPage() {
            OffersFactory.getOffers(vm.currentPage, vm.itemsPerPage).then(function(data) {
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
