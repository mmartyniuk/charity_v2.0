(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http'];

    function LoginController($http) {
        var vm = this;
        vm.user = {};
        vm.authenticateUser = function () {
            $http.post('/api/auth', {username: vm.user.login, password: vm.user.password})
                .success(function (response) {
                    console.log(response);
                });
        };
    }
})();
