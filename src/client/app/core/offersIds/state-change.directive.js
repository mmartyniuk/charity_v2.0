angular
    .module('app.core')
    .directive('stateChange', stateChangeDirective);

function stateChangeDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/offersIds/view/stateChange.html',
        scope: {
            state: '='
        },
        controller: 'stateChangeCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
