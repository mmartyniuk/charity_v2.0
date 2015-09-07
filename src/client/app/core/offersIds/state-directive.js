angular
    .module('app.core')
    .directive('state', stateDirective);

function stateDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/offersIds/view/state.html',
        scope: false,
        controller: 'stateCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
