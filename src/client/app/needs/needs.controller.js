(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['NeedsFactory'];

    function NeedsController(NeedsFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';

        activate();

        function activate() {
            vm.data = NeedsFactory.getNeeds();
        }
    }
})();
