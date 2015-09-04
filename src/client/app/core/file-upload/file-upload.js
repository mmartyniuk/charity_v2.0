(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('fileUploadCtrl', fileUploadCtrl)

    function fileUploadCtrl() {
        var vm = this;
        vm.upload = {};
        vm.InsertItems = function(e) {
            e.upload();
            vm.upload = e;
            return vm.upload;
        };

    }
})();
