(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('stateCtrl', stateCtrl);

    stateCtrl.$inject = ['$location', '$filter', '$http'];

    /* @ngInject */
    function stateCtrl($location, $filter, $http) {
        var vm = this;
        vm.title = 'stateCtrl';
        vm.offers = {
            name: "test name"
        };
        
        activate();

        function activate() {};

    }
})();
