(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$rootScope', '$sessionStorage',
        '$state', 'UsersFactory'];

    function ProfileController($location, $rootScope, $sessionStorage, $state, UsersFactory) {
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
            authCheck();
        }

        function authCheck() {
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                setUserData();
            }
        }

        function setUserData() {
            UsersFactory.getUserID($sessionStorage.token).then(function(user) {
                vm.userID = '/api/users/' + user.id;
                UsersFactory.getProfileData(vm.userID).then(function (data) {
                    vm.user = data;
                    console.log(vm.user);
                }).catch(function() {
                    console.log('Something wrong !!!');
                });
            });
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
