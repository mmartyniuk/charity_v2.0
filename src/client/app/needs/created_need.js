(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('CreatedNeedController', CreatedNeedController);

    CreatedNeedController.$inject = ['$location'];

    function CreatedNeedController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CreatedNeedController';

        activate();

        function activate() { }
    }
})();
