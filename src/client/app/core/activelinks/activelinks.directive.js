angular
    .module('app.core')
    .directive('activeSref', activeLinksDirective);

function activeLinksDirective() {
    return {
        restrict: 'A',
        scope: {
            state: '@activeSref'
        },
        controller: 'ActiveLinksController',
        controllerAs: 'vm',
        bindToController: true
    };
}
