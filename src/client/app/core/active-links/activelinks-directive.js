angular
    .module('app.core')
    .directive('compModal',CompModalDirective);

function CompModalDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            compModal: '=compModal'
        },
        templateUrl:'/app/core/active-links/view/activelinks.html',
        controller: 'linksCtrl',
        controllerAs: 'vm',
        bindToController: true
    };
}
