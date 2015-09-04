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
        vm.need.title = 'Куртка в дитячий будинок, інфа - 100%'; // ---> static data for testing
        vm.need.category = 'Дитячі куртки'; // ---> static data for testing
        activate();

        vm.submitNeed = function(){
            vm.need.actualDate = vm.dt.getDate() + '/' + vm.dt.getMonth() + 1 + '/' + vm.dt.getFullYear();
            vm.need.get = canGet();
            vm.need.images = vm.upload;
        };
        vm.setCity = function(id, name){
            vm.need.region = name;
            vm.currentRegion = id;
            vm.cities = CreateNeedFactory.getCities(id);
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
