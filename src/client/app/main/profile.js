(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location'];

    function ProfileController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ProfileController';

        activate();

        function activate() { }
    }
})();
