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
        
        vm.user = {
            status: 0
        };

        vm.statuses = [{
            value: 1,
            text: 'Так'
        }, {
            value: 2,
            text: 'Ні'
        }];
    

        activate();

        function activate() {};

        function showStatus() {
            var selected = $filter('filter')(vm.statuses, {
                value: vm.user.status
            });
            return (vm.user.status && selected.length) ? selected[0].text : 'Невідомо';
        };
    }
})();
