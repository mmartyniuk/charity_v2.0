(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewProjectController', NewProjectController);

    NewProjectController.$inject = ['$location'];

    function NewProjectController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewProjectController';

        activate();

        function activate() { }
    }
})();
