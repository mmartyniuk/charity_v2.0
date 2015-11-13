(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedBeforeRegisterController', NewNeedBeforeRegisterController);

    NewNeedBeforeRegisterController.$inject = ['$state', '$sessionStorage', '$rootScope'];

    function NewNeedBeforeRegisterController($state, $sessionStorage, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedBeforeRegisterController';
        activate();

        vm.need = {}; //all data from this form will be stored here

        //using state object here to post submitted data to next page
        vm.submitNeed = function() {
            // some ui validation should be applied here, tbd in future
            $state.go('newneed.register', {prefilled: vm.need});
        };
        //getting categories object from service
        function activate() {
            if (!$sessionStorage.token) {
                $rootScope.savePreviousState = $state.$current.name;
                $state.go('login');
            }
        }
    }

})();
