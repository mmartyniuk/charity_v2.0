angular
    .module('app.core')
    .directive('datePicker', datepickerDirective);

function datepickerDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/datepicker/view/datepicker.html',
        scope: {
            date: '=date'
        },
        controller: 'datePickerCtrl',
        controllerAs: 'vm',
        bindToController: true
    }
}
