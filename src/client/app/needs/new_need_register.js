(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController);

    NewNeedRegisterController.$inject = ['$location'];

    function NewNeedRegisterController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedRegisterController';

        activate();

        function activate() { }
    }
})();
