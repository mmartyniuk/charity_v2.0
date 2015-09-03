(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController)

    NewNeedRegisterController.$inject = ['$state','CreateNeedFactory'];

    function NewNeedRegisterController($state,CreateNeedFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        //vm.need.title = $state.params.prefilled.title;  //---> commented for testing
        //vm.need.category = $state.params.prefilled.category;  //---> commented for testing
        vm.need.title = 'наdsfsзва';
        vm.need.category = 'категорія';
        vm.need.images = {};
        activate();

        vm.InsertItems = function(e) {
            e.upload();
        };
        vm.submitNeed = function(){
            vm.need.actualDate = vm.dt.getDate() + '/' + vm.dt.getMonth() + 1 + '/' + vm.dt.getFullYear();
            vm.need.get = canGet();
            console.log(vm.need.images);
        };
        vm.setCity = function(id, name){
            vm.need.region = name;
            vm.currentRegion = id;
            vm.cities = CreateNeedFactory.getCities(id);
            document.getElementById('cities').removeAttribute("disabled");
        };
        function canGet(){
            if (document.getElementById('getByYourselfYes').checked) {
                return true;
            }else{
                return false;
            }
        }

        function activate() {
            vm.regions = CreateNeedFactory.getRegions();
        }
    }
})();
