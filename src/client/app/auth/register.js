(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location'];

    function RegisterController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'RegisterController';

        activate();

        function activate() { }
    }
})();
