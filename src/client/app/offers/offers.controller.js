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

        activate();

        function activate() {
            vm.data = OffersFactory.getOffers();
        }

        function setSearch(value) {
            vm.search = value;
        }
    }
})();
