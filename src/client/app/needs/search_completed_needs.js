(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('SearchCompletedNeedsController', SearchCompletedNeedsController);

    SearchCompletedNeedsController.$inject = ['SearchCompletedNeedsFactory'];

    function SearchCompletedNeedsController(SearchCompletedNeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'SearchCompletedNeedsController';

        activate();

        function activate() {
            vm.data = SearchCompletedNeedsFactory.getCompletedNeeds();
        }
    }
})();
