(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('StateChangeCtrl', StateChangeCtrl);

    StateChangeCtrl.$inject = [];

    /* @ngInject */
    function StateChangeCtrl() {
        var vm = this;
        vm.title = 'StateChangeCtrl';
        vm.indeficator = [{
            value: 'offerID'
        }, {
            value: 'offerID'
        }];
        activate();

        function activate() {};

    }
})();
