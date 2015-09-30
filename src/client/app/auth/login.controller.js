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
            //$state.go('index');
            /*$rootScope.$on('$stateChangeStart', function (ev, to, toParams, from) {
                console.log(from);
            });*/
            if ($rootScope.savePreviousState) {
                $state.go($rootScope.savePreviousState);
            }
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

        vm.logout = function () {
            Auth.logout(function () {
                $state.go('index');
            });
        };

        vm.token = $sessionStorage.token;
    }
})();
