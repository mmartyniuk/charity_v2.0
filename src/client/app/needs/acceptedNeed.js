(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('AcceptedNeedController', AcceptedNeedController);

    AcceptedNeedController.$inject = ['$location'];

    function AcceptedNeedController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AcceptedNeedController';

        activate();

        function activate() { }
    }
})();
