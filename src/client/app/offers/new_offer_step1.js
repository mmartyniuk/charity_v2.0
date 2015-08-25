(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferStep1Controller', NewOfferStep1Controller);

    NewOfferStep1Controller.$inject = ['$location'];

    function NewOfferStep1Controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewOfferStep1Controller';

        activate();

        function activate() { }
    }
})();
