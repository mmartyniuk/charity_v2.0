angular
    .module('app.core')
    .directive('stateChange', stateChangeDirective);

function stateChangeDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/offersIds/view/stateChange.html',
        scope: {
            stateName: '=',
            id: '='
        },
        controller: 'StateChangeCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
