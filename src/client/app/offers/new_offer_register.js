(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferRegisterController', NewOfferRegisterController);

    NewOfferRegisterController.$inject = ['$state','CreateOfferFactory','$http'];

    function NewOfferRegisterController($state,CreateOfferFactory,$http) {

        var vm = this;
        vm.title = 'NewNeedRegisterController';
        vm.offer = {}; //offer data from form will be stored here
        vm.offer.title = $state.params.prefilled.title;  //---> commented for testing
        vm.offer.category = $state.params.prefilled.category;  //---> commented for testing
//        vm.offer.title = 'Куртка в дитячий будинок, інфа - 100%'; // ---> static data for testing
//        vm.offer.category = 'Дитячі куртки'; // ---> static data for testing
        vm.getChecked = false;
        activate();

        vm.submitOffer = function(){
            vm.month = vm.dt.getMonth() + 1;
            vm.offer.actualDate = vm.dt.getDate() + '/' + vm.month + '/' + vm.dt.getFullYear();
            vm.offer.get = vm.getChecked;
            vm.offer.images = vm.upload;
            console.log(vm.offer);
            //this will be shown when there will be entries on server to post this data
            /*$http({
                url: 'send-offer-url',
                method: "POST",
                data: { 'message' : vm.offer }
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
            vm.offer.region = name;
            vm.currentRegion = id;
            vm.cities = CreateOfferFactory.getCities(id);
        };

        function activate() {
            vm.regions = CreateOfferFactory.getRegions();
        }
    };
})();
