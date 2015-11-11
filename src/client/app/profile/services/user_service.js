(function () {
    'use strict';

    angular
        .module('app.profile')
        .factory('UsersFactory', UsersFactory);

    UsersFactory.$inject = ['$http', '$q'];

    function UsersFactory($http, $q) {
        return {
            getUserID: function(token) {
                return $q(function(resolve, reject) {
                    $http.get('api/users/current', {
                        headers: {
                            'x-auth-token': token
                        }
                    }).success(function(response) {
                        resolve({
                            id: response.id
                        });
                    }).error(reject);
                });
            },
            getProfileData: function(apiLink) {
                return $q(function(resolve, reject) {
                    $http.get(apiLink, {
                        params: {
                            projection: 'inLine'
                        }
                    }).success(function (response) {
                        resolve({
                            allUserData: response
                        });
                    }).error(reject);
                });
            }
        };
    }

})();
