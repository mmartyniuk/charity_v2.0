(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController);

    NewNeedRegisterController.$inject = ['$state','CreateNeedFactory'];

    function NewNeedRegisterController($state,CreateNeedFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        vm.need.title = $state.params.prefilled.title;  //---> commented for testing
        vm.need.category = $state.params.prefilled.category;  //---> commented for testing
        //vm.need.title = 'наdsfsзва';
        //vm.need.category = 'категорія';
        activate();

        vm.InsertItems = function(e) {
        console.log(e.files);
            e.upload();
        };
        vm.submitNeed = function(){
            console.log(vm.dt);
        };

        function activate() {
            //vm.need.regions = CreateNeedFactory.getCategories();
        }
    }
})();
