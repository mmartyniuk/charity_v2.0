(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['$location'];

    function NeedsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';

        activate();

        function activate() { }
    }
})();
