(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedStep1Controller', NewNeedStep1Controller);

    NewNeedStep1Controller.$inject = ['$location'];

    function NewNeedStep1Controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedStep1Controller';

        activate();

        function activate() { }
    }
})();
