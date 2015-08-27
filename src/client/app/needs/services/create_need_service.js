(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('CreateNeedFactory', CreateNeedFactory);

    CreateNeedFactory.$inject = ['$http'];

    function CreateNeedFactory($http){ 
        return {
            getCategories: function() {
                $http.get("/api/categories").success(function(data) {
                    vm.categories = data;
                })
            }
        }
    }

})();