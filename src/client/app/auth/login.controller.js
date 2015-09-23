(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthApi'];

    function LoginController(AuthApi) {
        var vm = this;
        vm.user = {};
        vm.authenticateUser = function(){
            return AuthApi.authentificateUser(vm.user);
        };
    }
})();
