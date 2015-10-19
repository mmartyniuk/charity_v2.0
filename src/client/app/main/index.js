(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location', 'NeedsFactory', 'OffersFactory', '$state'];

    function IndexController($location, NeedsFactory, OffersFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'IndexController';
        vm.submitCategorySearch = submitCategorySearch;
        vm.filterCategoryNeeds = filterCategoryNeeds;
        vm.filterCategoryOffers = filterCategoryOffers;
        vm.contentType = 'Потреби';
        vm.setContentType = setContentType;
        vm.offers = {};
        vm.needs = {};

        activate();

        function activate() {
            NeedsFactory.getNeeds().then(function(data) {
                vm.needsData = data.needs;
            });
            OffersFactory.getOffers().then(function(data) {
                vm.offersData = data.offers;
            });
        }

        function setContentType(value) {
            vm.contentType = value;
        }

        function submitCategorySearch(searchValue, category, location) {
            vm.searchValue = searchValue;
            vm.category = category;
            vm.location = location;
            // some ui validation should be applied here, tbd in future
            if (vm.contentType === 'Потреби') {
                vm.needs.searchValue = vm.searchValue;
                vm.needs.category = vm.category;
                vm.needs.location = vm.location;
                $state.go('needs.home', {prefilled: vm.needs});
            } else if (vm.contentType === 'Пропозиції') {
                vm.offers.searchValue = vm.searchValue;
                vm.offers.category = vm.category;
                vm.offers.location = vm.location;
                $state.go('offers.home', {prefilled: vm.offers});
            }
        }

        function filterCategoryNeeds(category) {
            vm.category = category;
            vm.needs.category = vm.category;
            $state.go('needs.home', {prefilled: vm.needs});
        }

        function filterCategoryOffers(category) {
            vm.category = category;
            vm.offers.category = vm.category;
            $state.go('offers.home', {prefilled: vm.offers});
        }
    }
})();
