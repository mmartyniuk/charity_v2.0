(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('statusCtrl', statusCtrl);

    statusCtrl.$inject = ['$location', '$filter', '$http'];

    /* @ngInject */
    function statusCtrl($location, $filter, $http) {
        var vm = this;
        vm.title = 'statusCtrl';
        vm.showStatus = showStatus;

        /*console.log('status in directive', vm.status, vm.statuses);*/

        activate();

        function activate() {};

        function showStatus() {
            var selected = $filter('filter')(vm.statuses, {
                value: vm.status
            });
            return (vm.status && selected.length) ? selected[0].text : 'Невідомо';
        };
    }
})();
