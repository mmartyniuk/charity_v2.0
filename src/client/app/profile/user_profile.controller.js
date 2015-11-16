(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileUserController', ProfileUserController);

    ProfileUserController.$inject = ['$location', '$rootScope', '$sessionStorage',
        '$state', 'UsersFactory'];

    function ProfileUserController($location, $rootScope, $sessionStorage, $state, UsersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ProfileUserController';
        vm.userID = '/api/users/' + $state.params.id;
        vm.tabs = {
            myNeeds: {},
            myOffers: {},
            supNeeds: {},
            supOffers: {}
        };

        activate();

        function activate() {

            UsersFactory.getProfileData(vm.userID).then(function (data) {
                    vm.user = data;
                    vm.role = data.role;
                    vm.phone = data.phone;
                    vm.address = data.address;
                    vm.username = data.username;
                    vm.email = data.emailAddress;
                    vm.tabs.supOffers = data.offerResponses;
                    vm.tabs.supNeeds = data.needResponses;
                    vm.tabs.myNeeds = data.needs;
                    vm.tabs.myOffers = data.offers;
                }).catch(function() {
                    console.log('Something wrong !!!');
                });
        }
    }
})();
