(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('RemoveOfferModalInstanceController', RemoveOfferModalInstanceController);

    RemoveOfferModalInstanceController.$inject = ['$modalInstance', 'data'];

    function RemoveOfferModalInstanceController($modalInstance, data) {

        data.ok = function () {
            $modalInstance.close();
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();
