/*jshint -W040: false*/
(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('statusCtrl', statusCtrl);

    statusCtrl.$inject = ['$filter', '$translate', '$rootScope'];

    /* @ngInject */
    function statusCtrl($filter, $translate, $rootScope) {

        var vm = this;
        var unknownStatus;

        vm.title = 'statusCtrl';
        vm.showStatus = showStatus;

        /*console.log('status in directive', vm.status, vm.statuses);*/

        activate();

        function activate() {
            translate();
            $rootScope.$on('$translateChangeSuccess', translate);
        }

        function showStatus() {
            var selected = $filter('filter')(vm.statuses, {
                value: vm.status
            });
            return (vm.status && selected.length) ? selected[0].text : unknownStatus;
        }

        function translate() {
            $translate('core.unknown').then(function(value) {
                unknownStatus = value;
            });
        }
    }
})();
