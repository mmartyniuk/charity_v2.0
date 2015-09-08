(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', 'Users'];

    function ProfileController($location,Users) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ProfileController';

        activate();

        function activate() {
            Users.getUsers().then(function(data) {
                vm.users = data;
            }).catch(function() {
                console.log('Something wrong !!!');
            });
        }

    }
})();
