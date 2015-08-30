(function () {
    'use strict';

    angular
        .module('app.needs')
        .directive('categoryCall', categoryCall);

    function categoryCall(){
        var directive = {
            restrict: 'EA',
            link: link,
            scope: {
                max: '='
            },
            controllerAs: 'vm',
            require: 'ngModel'
        };
        return directive;

        function link(scope, element, attr, ngModel){
            element.bind('click', function(e){
                document.getElementById('sub').classList.remove("hidden");
                var subCategoryIndex = ngModel.$viewValue;
                console.log(subCategoryIndex);
            })
        }
    }

})();
