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
            NeedsFactory.getNeeds().then(function(data) {
                vm.needsData = data.needs;
            });
            OffersFactory.getOffers().then(function(data) {
                vm.offersData = data.offers;
            });
        }
    }
})();
