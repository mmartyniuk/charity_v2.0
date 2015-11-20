(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$rootScope', '$sessionStorage',
        '$state', 'UsersFactory'];

    function ProfileController($rootScope, $sessionStorage, $state, UsersFactory) {
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
            //checking if the user is logged in
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            } else {
                setUserData();
            }
        }

        function setUserData() {
            //setting API link for concrete user
            UsersFactory.getUserID($sessionStorage.token).then(function(user) {
                vm.userID = '/api/users/' + user.id;
                //getting user data
                UsersFactory.getProfileData(vm.userID).then(function(data) {
                    vm.user = data;
                    vm.role = data.role;
                    vm.phone = data.phone;
                    vm.address = data.address;
                    vm.username = data.username;
                    vm.email = data.emailAddress;
                    vm.supOffers = data.offerResponses;
                    vm.supNeeds = data.needResponses;
                    vm.myNeeds = data.needs;
                    vm.myOffers = data.offers;

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
