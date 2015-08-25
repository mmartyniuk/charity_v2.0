(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('Offers', AboutController);

    AboutController.$inject = ['$location'];

    function AboutController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Offers';

        activate();

        function activate() { }
    }
})();
