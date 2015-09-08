angular
    .module('app.core')
    .directive('status', statusDirective);

function statusDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/status/view/status.html',
        scope: {
          status: '=',   /*default value*/
          statuses: '='  /*possible values*/
        },
        controller: 'statusCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
