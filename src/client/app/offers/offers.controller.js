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

        activate();

        function activate() {
            vm.data = OffersFactory.getOffers();
        }
    }
})();
