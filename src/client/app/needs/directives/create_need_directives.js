(function () {
    'use strict';

    angular
        .module('app.needs')
        .directive('subCategoryCall', subCategoryCall);

    function subCategoryCall(){
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link(scope, el, attr){
            el.bind('click', function(e){
                console.log('test');
            })
        }
    }

})();