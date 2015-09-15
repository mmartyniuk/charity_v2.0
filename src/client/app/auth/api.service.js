(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('AuthApi', AuthApi);

    AuthApi.$inject = ['$http'];

    function AuthApi($http) {
        var service = {
            login: buildPostRequest('/api/auth/login'),
            //logoff: buildPostRequest('/api/auth/logoff') tbd
        };

        function buildPostRequest(path) {
            return function (req, onSuccess, onError) {
                var promise = $http.post(path, req);
                if (onSuccess) {
                    promise.success(onSuccess);
                }
                if (onError) {
                    promise.error(onError);
                }
            };
        }

        return service;
    }
})();