(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$q', '$sessionStorage', '$location'];

    function AuthInterceptor($q, $sessionStorage, $location) {

        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $sessionStorage.token;
                }
                return config;
            },
            'responseError': function (response) {
                if (response.status === 401 || response.status === 403) {
                    $location.path('login');
                }
                return $q.reject(response);
            }
        };

    }

})();
