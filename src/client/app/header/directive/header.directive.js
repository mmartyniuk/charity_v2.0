angular
    .module('app.header')
    .directive('appHeader', headerDirective);

function headerDirective() {
    return {
        restrict: 'EA',
        templateUrl: 'app/header/view/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };
}
