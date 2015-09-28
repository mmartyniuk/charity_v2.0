(function () {
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', 'Users', '$sessionStorage', '$state'];

    function ProfileController($location, Users, $sessionStorage, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ProfileController';

        activate();

        function activate() {
            if(!$sessionStorage.token){
                $state.go('login');
            }else{
                Users.getUsers().then(function(data) {
                    vm.users = data;
                }).catch(function() {
                    console.log('Something wrong !!!');
                });
            }
        }

    }
})();
