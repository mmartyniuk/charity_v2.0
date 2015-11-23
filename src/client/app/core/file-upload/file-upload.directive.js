angular
    .module('app.core')
    .directive('fileUploadDirective', fileUploadDirective);

function fileUploadDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/file-upload/view/file-upload.html',
        scope: {
            images: '='
        },
        controller: 'FileUploadController',
        controllerAs: 'vm',
        bindToController: true
    };
}
