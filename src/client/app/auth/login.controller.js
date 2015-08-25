(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$routeParams', 'AuthApi', '_', '$sce', '$document'];

    function LoginController($location, $routeParams, authApi, _, $sce, $document) {
    }
})();
