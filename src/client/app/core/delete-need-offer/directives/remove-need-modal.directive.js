angular
    .module('app.core')
    .directive('removeNeedModalDirective', removeNeedModal);

function removeNeedModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/delete-need-offer/views/remove-need-modal.html',
        bindToController: true
    };
}
