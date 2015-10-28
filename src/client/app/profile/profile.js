(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$rootScope', 'Users', '$sessionStorage', '$state'];

    function ProfileController($location, $rootScope, Users, $sessionStorage, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ProfileController';
        vm.saveUser = saveUser;
        vm.tabs = {
            myNeeds: {},
            myOffers: {},
            supNeeds: {},
            supOffers: {},
            messages: {},
            profile: {}
        };

        activate();

        function activate() {
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                Users.getUsers().then(function (data) {
                    vm.users = data;
                }).catch(function () {
                    console.log('Something wrong !!!');
                });
            }
        }

        function saveUser() {
            //Needs current user api implementation
            /*            return $http.patch('/api/currentUser/' + vm.profileId, {
             'name': vm.users.name,
             'phone': vm.users.phone,
             'email': vm.users.email,
             'status': vm.user.status
             })*/
        }

    }
})();
