(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location'];

    function IndexController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'IndexController';

        activate();

        function activate() { }
    }
})();
