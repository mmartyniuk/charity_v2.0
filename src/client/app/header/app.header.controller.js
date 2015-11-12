(function () {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$sessionStorage', '$rootScope', '$state', 'SharedFactory'];

    function HeaderController($sessionStorage, $rootScope, $state, SharedFactory) {
        var vm = this;

        vm.loggedIn = !!$sessionStorage.token || false; // this value is impacting view, if user is logged in some
        // elements from nav menu will be displayed
        $rootScope.$on('$stateChangeStart',
            function() {
                if ($sessionStorage.token) {
                    vm.loggedIn = true;
                    SharedFactory.getAuthorizedUserInfo($sessionStorage.token,
                        setUserID, function() {
                            console.log('something wrong');
                        });
                }
            });
        vm.logOut = function() {
            $sessionStorage.$reset();
            $state.go($state.current, {}, {reload: true});
            vm.loggedIn = false;
        };

        function setUserID(data) {
            vm.userID = data.id;
        }

    }
})();
