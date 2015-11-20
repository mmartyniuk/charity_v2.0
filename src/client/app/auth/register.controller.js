(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['Auth', '$state', '$log', '$rootScope', 'SharedFactory'];

    function RegisterController(Auth, $state, $log, $rootScope, SharedFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'RegisterController';
        vm.getRegion = getRegion;
        vm.setRegion = setRegion;
        vm.signup = signup;
        vm.address = {};

        activate();

        function activate() {
            getRegion();
        }

        function getRegion() {
            SharedFactory.getRegions().then(function (regions) {
                vm.regions = regions;
            });
        }

        function setRegion(region) {
            vm.cities = region._embedded.cities;
        }

        function signup(isValid) {
            vm.validationError = null;
            vm.emailError = null;
            if (isValid) {
                vm.address.city = vm.city ? vm.city._links.self.href : null;
                var formData = {
                    name: vm.name,
                    username: vm.username,
                    password: vm.password,
                    address: vm.address // contains description, phone, city
                };

                Auth.signup(formData).then(function(data, status, headers) {
                    $log.debug(data, status, headers);
                    $state.go('login');
                }, function (data) {
                    if (data.status === 409) {
                        vm.emailError = true;
                    }
                });
            } else {
                vm.validationError = true;
            }
        }
    }
})();
