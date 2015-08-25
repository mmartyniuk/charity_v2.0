(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferRegisterController', NewOfferRegisterController);

    NewOfferRegisterController.$inject = ['$location'];

    function NewOfferRegisterController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewOfferRegisterController';

        activate();

        function activate() { }
    }
})();
