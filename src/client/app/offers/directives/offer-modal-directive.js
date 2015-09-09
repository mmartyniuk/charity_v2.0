angular
    .module('app.offers')
    .directive('offerModal', offerModal);

function offerModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/offers/views/offer-modal.html',
        scope: {
            category: '=category'
        },
        bindToController: true
    }
}
