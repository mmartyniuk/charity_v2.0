(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferRegisterController', NewOfferRegisterController);

    NewOfferRegisterController.$inject = ['$location', '$scope'];

    function NewOfferRegisterController($location, $scope) {

        var vm = this;
//        vm.title = 'NewOfferRegisterController';

        activate();

        vm.offer = {};
        vm.saveData = function(){
            console.log(vm.address);
        };

        function activate() {};
    };
})();
