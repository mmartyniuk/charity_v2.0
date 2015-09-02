(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('AboutUSController', AboutUSController);

    AboutUSController.$inject = ['$location'];

    function AboutUSController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AboutUSController';

        activate();

        function activate() { }
    }
})();
