(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedRegisterController', NewNeedRegisterController)

    NewNeedRegisterController.$inject = ['$state','CreateNeedFactory','$http'];

    function NewNeedRegisterController($state,CreateNeedFactory,$http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedRegisterController';
        vm.need = {}; //need data from form will be stored here
        vm.need.title = $state.params.prefilled.title;  //---> commented for testing
        vm.need.category = $state.params.prefilled.category;  //---> commented for testing
        //vm.need.title = 'Куртка в дитячий будинок, інфа - 100%'; // ---> static data for testing
        //vm.need.category = 'Дитячі куртки'; // ---> static data for testing
        vm.getChecked = false;
        activate();

        vm.submitNeed = function(){
            vm.need.actualDate = vm.dt.getDate() + '/' + parseInt(vm.dt.getMonth() + 1) + '/' + vm.dt.getFullYear();
            vm.need.get = vm.getChecked;
            vm.need.images = vm.upload;
            //this will be shown when there will be entries on server to post this data
            /*$http({
                url: 'send-need-url',
                method: "POST",
                data: { 'message' : vm.need }
            })
                .then(function(response) {
                    // success
                },
                function(response) { // optional
                    // failed
                });*/
        };
        //here will be additional ajax call to server to get only needed cities by id
        vm.setCity = function(id, name){
            //setting region here
            vm.need.region = name;
            vm.currentRegion = id;
            vm.cities = CreateNeedFactory.getCities(id);
        };

        function activate() {
            vm.regions = CreateNeedFactory.getRegions();
        }
    }
})();
