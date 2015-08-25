(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('AcceptedOffersController', AcceptedOffersController);

    AcceptedOffersController.$inject = ['$location'];

    function AcceptedOffersController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AcceptedOffersController';

        activate();

        function activate() { }
    }
})();
