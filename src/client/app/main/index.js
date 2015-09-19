(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location', 'NeedsFactory', 'OffersFactory'];

    function IndexController($location, NeedsFactory, OffersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'IndexController';

        activate();

        function activate() {
            vm.needsData = NeedsFactory.getNeeds();
            vm.offersData = OffersFactory.getOffers();
        }
    }
})();
