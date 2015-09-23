(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('AuthApi', AuthApi);

    AuthApi.$inject = ['$http'];

    function AuthApi($http) {
        return {
            authentificateUser: function(credentials) {
                $http.post('/api/auth', credentials)
                    .success(function (data, status, headers) {
                        var token = headers(["x-auth-token"]);
                        $http.get('/api/users/current', {
                            headers: {
                                'x-auth-token': token
                            }
                        });
                    });
            }
        };
    }
})();
