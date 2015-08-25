(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('CreatedOfferController', CreatedOfferController);

    CreatedOfferController.$inject = ['$location'];

    function CreatedOfferController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CreatedOfferController';

        activate();

        function activate() { }
    }
})();
