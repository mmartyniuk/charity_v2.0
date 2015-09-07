(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('SearchCompletedNeedsController', SearchCompletedNeedsController);

    SearchCompletedNeedsController.$inject = ['SearchCompletedNeedsFactory'];

    function SearchCompletedNeedsController(SearchCompletedNeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.resetFilter = resetFilter;
        vm.setFilter = setFilter;
        vm.title = 'SearchCompletedNeedsController';

        activate();

        function activate() {
            vm.data = SearchCompletedNeedsFactory.getCompletedNeeds();
        };

        function resetFilter() {
            vm.filterLocation = '';
        };

        function setFilter(location){
            vm.filterLocation = location;
        };
    }
})();
