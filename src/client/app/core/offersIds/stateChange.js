(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('stateChangeCtrl', stateChangeCtrl);

    stateChangeCtrl.$inject = [];

    /* @ngInject */
    function stateChangeCtrl() {
        var vm = this;
        vm.title = 'stateChangeCtrl';
        vm.offers = {
            name: "test name"
        };

        activate();

        function activate() {};

    }
})();
