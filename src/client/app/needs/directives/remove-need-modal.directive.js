angular
    .module('app.needs')
    .directive('removeNeedModalDirective', removeNeedModal);

function removeNeedModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/needs/views/remove-need-modal.html',
        bindToController: true
    };
}
