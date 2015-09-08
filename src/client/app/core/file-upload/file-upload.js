(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('FileUploadController', FileUploadController)

    function FileUploadController() {
        var vm = this;
        vm.upload = {};
        vm.InsertItems = function(e) {
            e.upload();
            vm.upload = e;
            return vm.upload;
        };

    }
})();
