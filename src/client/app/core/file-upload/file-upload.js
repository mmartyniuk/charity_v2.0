(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['$scope'];

    function FileUploadController($scope) {
        var vm = this;
        vm.images = [];

        vm.addImage = function(image) {
            var fileReader = new FileReader();

            if (image) {
                fileReader.readAsDataURL(image);
            }

            fileReader.onloadend = function () {
                image.preview = fileReader.result;
                vm.images.push(image);
                //reset file input
                document.getElementsByClassName('upload')[0].value = '';
                vm.image = null;
                $scope.$apply();
            };
        };

        vm.removeImage = function(index) {
            vm.images.splice(index, 1);
        };
    }
})();
