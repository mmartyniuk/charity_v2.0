(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedStep1Controller', NewNeedStep1Controller)

    NewNeedStep1Controller.$inject = ['$location','$http','$scope', 'CreateNeedFactory', 'subCategoryCall'];

    function NewNeedStep1Controller($location, $http, $scope, CreateNeedFactory, subCategoryCall) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedStep1Controller';

        activate();

        function activate() {
            CreateNeedFactory.getCategories();
        }
    }

})();