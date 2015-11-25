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
                            allUserData: response,
                            role: response.roles[0].description,
                            phone: response.address.phone,
                            address: response.address.description,
                            username: response.username,
                            emailAddress: response.email,
                            offerResponses: response.offerResponses,
                            offers: response.offers,
                            needResponses: response.needResponses,
                            needs: response.needs

                        });
                    }).error(reject);
                });
            },
            deleteOffer: function(id, success, error) {
                $http.delete('/api/offers/' + id).success(success).error(error);
            },
            deleteNeed: function(id, success, error) {
                $http.delete('/api/needs/' + id).success(success).error(error);
            }
        };
    }

})();
