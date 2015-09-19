(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('FileUploadController', FileUploadController);

    function FileUploadController() {
        var vm = this;
        vm.upload = {};
        vm.message = false;
        vm.InsertItems = function(e) {
            e.upload();
            vm.upload = e;
            if (e.files.length !== 0) {
                vm.message = true;
                return vm.upload;
            }
        };
    }
})();
