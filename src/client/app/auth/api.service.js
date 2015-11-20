(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('Auth', Auth);

    Auth.$inject = ['$http', '$sessionStorage'];

    function Auth($http, $sessionStorage) {

        return {
            signup: function (data) {
                return $http.post('/api/users', data);
            },
            signin: function (data, success, error) {
                $http.post('/api/auth', data).success(success).error(error);
            },
            logout: function (success) {
                delete $sessionStorage.token;
                success();
            }
        };
    }

})();
