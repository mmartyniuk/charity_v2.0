(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('RemoveOfferModalInstanceController', RemoveOfferModalInstanceController);

    RemoveOfferModalInstanceController.$inject = ['$modalInstance', 'data'];

    function RemoveOfferModalInstanceController($modalInstance, data) {

        //return selected value to correct parent scope
        data.ok = function () {
            $modalInstance.close();
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();
