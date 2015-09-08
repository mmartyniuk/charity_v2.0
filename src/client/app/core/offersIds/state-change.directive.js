angular
    .module('app.core')
    .directive('stateChange', stateChangeDirective);

function stateChangeDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/offersIds/view/stateChange.html',
        scope: true,
        controller: 'stateChangeCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
