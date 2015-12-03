angular
    .module('app.core')
    .directive('dayAndTime', dayAndTimeDirective);

function dayAndTimeDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/day-and-time/view/day-and-time.html',
        scope: {
            convenientTime: '='
        },
        controller: 'DayAndTimeController',
        controllerAs: 'vm',
        bindToController: true
    };

}
