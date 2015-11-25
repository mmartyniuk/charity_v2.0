(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('CategoryFactory', CategoryFactory);

    CategoryFactory.$inject = ['$http', '$q'];

    function CategoryFactory($http, $q) {
        return {
            getCategories: function() {
                return $q(function (resolve, reject) {
                    $http.get('/api/category/root').success(function (response) {
                        resolve({
                            categories: response.children
                        });
                    }).error(reject);
                });
            }
        };
    }

})();
