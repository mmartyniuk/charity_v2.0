(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('CreatedProjectController', CreatedProjectController);

    CreatedProjectController.$inject = ['$location'];

    function CreatedProjectController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CreatedProjectController';

        activate();

        function activate() { }
    }
})();
