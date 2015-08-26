(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location'];

    function OffersController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';

        activate();

        function activate() { }
    }
})();
