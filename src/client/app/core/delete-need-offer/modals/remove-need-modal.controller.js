(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('RemoveNeedModalInstanceController', RemoveNeedModalInstanceController);

    RemoveNeedModalInstanceController.$inject = ['$modalInstance', 'data'];

    function RemoveNeedModalInstanceController($modalInstance, data) {

        data.ok = function () {
            $modalInstance.close();
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();
