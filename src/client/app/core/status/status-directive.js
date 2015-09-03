angular
    .module('app.core')
    .directive('status', statusDirective);

function statusDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/status/view/status.html',
        scope: true,
        controller: 'statusCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
