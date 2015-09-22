(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$window'];

    function LoginController($http, $window) {
        var vm = this;
        vm.user = {};
        vm.token = [];
        vm.authenticateUser = function () {
            $http.post('/api/auth', {username: vm.user.login, password: vm.user.password})
                .success(function (response, headers, config, data) {
                    console.log(data);
                    console.log(response);
                    console.log(headers);
                    console.log(config);
                    $http.get('/api/users/current', data)
                        .success(function (response) {
                            //console.log(response);
                        });
                });
        }
    }
})();
