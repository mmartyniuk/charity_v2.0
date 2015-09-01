(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ['$scope','$modalInstance', 'data'];

    function ModalInstanceCtrl($scope,$modalInstance, data) {

        data.ok = function (value) {
            $modalInstance.close();
            data.selected = value;
        };

        data.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }
})();
