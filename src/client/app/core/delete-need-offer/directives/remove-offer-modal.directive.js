angular
    .module('app.core')
    .directive('removeOfferModalDirective', removeOfferModal);

function removeOfferModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/delete-need-offer/views/remove-offer-modal.html',
        bindToController: true
    };
}
