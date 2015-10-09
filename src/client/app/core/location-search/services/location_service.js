(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('LocationFactory', LocationFactory);

    LocationFactory.$inject = ['$http'];

    function LocationFactory($http) {
        return {
            getRegions: function(success) {
                $http.get('/api/regions').success(success);
            },

            getCities: function(api, success) {
                $http.get(api).success(success);
            }
        };
    }

})();
