/*jshint -W040: false*/
(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('linksCtrl', linksCtrl);

    linksCtrl.$inject = ['$scope', '$element', '$location'];

    /* @ngInject */
    function linksCtrl($scope, $element, $location) {

        var vm = this;

        vm.title = 'linksCtrl';

        activate();

        function activate() {

            vm.isActive = function(viewLocation) {

                var active = false;
                console.log('test');

                if (viewLocation === $location.path()) {
                    active = true;
                }

                return active;

            };
        }

    }
})();

