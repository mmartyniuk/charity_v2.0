(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('ModalInstanceController', ModalInstanceController);

    ModalInstanceController.$inject = ['$scope','$modalInstance', 'data'];

    function ModalInstanceController($scope, $modalInstance, data) {

        //return selected value to correct parrent scope
        data.ok = function (value) {
            $modalInstance.close();
            data.selected = value;
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }
})();
