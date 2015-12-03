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
        bindToController: true,
        link: function (scope, elem, attrs) {
            console.log('link', scope, elem, attrs);
            scope.$watch('scope.vm.convenientTime.timeFrom', function () {
                console.log('dfasffs')
            })



        }
    };

}
