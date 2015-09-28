(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', 'OffersFactory'];

    function OffersController($location, OffersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';
        vm.setSearch = setSearch;
        vm.loadPage = loadPage;

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
    }
})();
