(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$state', 'UsersFactory'];

    function UserProfileController($state, UsersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'UserProfileController';
        vm.userID = '/api/users/' + $state.params.id;
        vm.tabs = {
            myNeeds: {},
            myOffers: {},
            supNeeds: {},
            supOffers: {},
            profile: {}
        };
        //will be changed during pagination implementation
        vm.limit = 4;

        activate();

        function activate() {
            getUserData();
        }

        function getUserData() {

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
            }).catch(function () {
                console.log('Something wrong !!!');
            });
        }
    }
})();
