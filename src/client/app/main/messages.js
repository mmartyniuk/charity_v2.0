(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$location'];

    function MessagesController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'MessagesController';

        activate();

        function activate() { }
    }
})();
