(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$sessionStorage', 'Auth', '$state'];

    function LoginController($rootScope, $sessionStorage, Auth, $state) {
        var vm = this;
        function successAuth(data, status, headers) {
            $sessionStorage.token = headers(['x-auth-token']);
            console.log($sessionStorage.token);
            $state.go('index');
        }

        vm.signIn = function () {
            var formData = {
                username: vm.username,
                password: vm.password
            };

            Auth.signin(formData, successAuth, function () {
                $rootScope.error = 'Invalid credentials.';
            });
        };

        /*vm.signup = function () {
            var formData = {
                username: vm.username,
                password: vm.password
            };

            Auth.signup(formData, successAuth, function () {
                $rootScope.error = 'Failed to signup';
            });
        };

        vm.logout = function () {
            Auth.logout(function () {
                $state.go('index');
            });
        };*/

        vm.token = $sessionStorage.token;
    }
})();
