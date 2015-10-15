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
                    $http.get('/api/categories/1/children').success(function (response) {
                        resolve({
                            categories: response._embedded.categories
                        });
                    }).error(reject);
                });
            },
            getSubCategories: function(api) {
                return $q(function (resolve, reject) {
                    $http.get(api).success(function (response) {
                        resolve({
                            subcategories: response._embedded.categories
                        });
                    }).error(reject);
                });
            },
            getSubSubCategories: function(api) {
                return $q(function (resolve, reject) {
                    $http.get(api).success(function (response) {
                        resolve({
                            subsubcategories: response._embedded.categories
                        });
                    }).error(reject);
                });
            }
        };
    }

})();
