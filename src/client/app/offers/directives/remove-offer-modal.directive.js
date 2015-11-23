angular
    .module('app.offers')
    .directive('removeOfferModalDirective', removeOfferModal);

function removeOfferModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/offers/views/remove-offer-modal.html',
        bindToController: true
    };
}
