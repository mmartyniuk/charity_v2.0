(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController)

    NewNeedRegisterController.$inject = ['$state'];

    function NewNeedRegisterController($state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        //vm.need.title = $state.params.prefilled.title;  ---> commented for testing
        //vm.need.category = $state.params.prefilled.category;  ---> commented for testing
        vm.need.title = 'назва';
        vm.need.category = 'категорія';
        activate();
        vm.InsertItems = function(e) {
        console.log(e.files);
            e.upload();
        }
        vm.submitNeed = function(){
            console.log(vm.need);

        };
        function activate() {}
    }
})();
