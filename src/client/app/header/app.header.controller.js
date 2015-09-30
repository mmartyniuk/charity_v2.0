(function () {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$sessionStorage', '$rootScope', '$state'];

    function HeaderController($sessionStorage, $rootScope, $state) {
        var vm = this;

        vm.loggedIn = !!$sessionStorage.token || false; // this value is impacting view, if user is logged in some
        // elements from nav menu will be displayed
        $rootScope.$on('$stateChangeStart',
            function() {
                if ($sessionStorage.token) {
                    vm.loggedIn = true;
                }
            });
        vm.logOut = function() {
            $sessionStorage.$reset();
            $state.go($state.current, {}, {reload: true});
            vm.loggedIn = false;
        };
    }
})();
