/*globals _ */
(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('EditNeedFactory', EditNeedFactory);

    EditNeedFactory.$inject = ['$http', '$q'];

    function EditNeedFactory($http, $q) {
        return {

            getConcreteNeed: function(id) {
                return $http.get('/api/needs/' + id);
            },

            getRegions: function() {
                return $q(function(resolve, reject) {
                    $http.get('/api/regions').success(function (data) {
                        resolve(data._embedded.regions);
                    }).error(reject);
                });
            }
        };
    }

})();
