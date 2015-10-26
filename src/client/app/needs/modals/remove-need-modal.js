(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('RemoveNeedModalInstanceController', RemoveNeedModalInstanceController);

    RemoveNeedModalInstanceController.$inject = ['$modalInstance', 'data'];

    function RemoveNeedModalInstanceController($modalInstance, data) {

        //return selected value to correct parent scope
        data.ok = function () {
            $modalInstance.close();
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();
