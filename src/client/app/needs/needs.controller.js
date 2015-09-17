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

        activate();

        function activate() {
            vm.data = NeedsFactory.getNeeds();
        }

        function setSearch(value) {
            vm.search = value;
        }
    }
})();
