(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('ActiveLinksController', ActiveLinksController);

    ActiveLinksController.$inject = ['$element', '$state', '$scope'];

    function ActiveLinksController ($element, $state, $scope) {
        var vm = this;

        $scope.$watch (function() {
            return $state.includes(vm.state) || false;
        }, function (isActive) {
            $element.toggleClass ('active', isActive);

        });

    }
})();
