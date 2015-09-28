(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['$location','NeedsFactory'];

    function NeedsController($location,NeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';
        vm.setSearch = setSearch;
        vm.loadPage = loadPage;

        activate();

        function activate() {
            loadPage();
        }

        function loadPage() {
            NeedsFactory.getNeeds(vm.currentPage).then(function(data) {
                vm.needs = data.needs;
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
