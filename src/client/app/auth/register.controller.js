(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['Auth', '$state', '$log', '$rootScope'];

    function RegisterController(Auth, $state, $log, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'RegisterController';

        vm.signup = function () {
            var formData = {
                username: vm.username,
                password: vm.password
            };

            Auth.signup(formData).then(function(data, status, headers) {
                $log.debug(data, status, headers);
                $state.go('login');
            }, function () {
                $rootScope.error = 'Failed to signup';
            });
        };

        activate();

        function activate() { }
    }
})();
