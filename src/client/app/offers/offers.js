(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location'];

    function OffersController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';
        vm.enableEditor = enableEditor;
        vm.disableEditor = disableEditor;
        vm.save = save;

        activate();

        function activate() {
          vm.offerText = "";
          vm.editorEnabled = true;
          
        };
        function enableEditor() { 
            vm.editorEnabled = true;
            vm.editableOffer = vm.offerText;
            vm.editableOfferTittle = vm.offerTittle;
            vm.editableOfferSize = vm.offerSize;
            vm.editableRegion = vm.offerRegion;
            vm.editableOfferCity = vm.offerCity;
            vm.editableOfferAdress = vm.offerAdress;
            vm.editableTopicality = vm.offerTopicality;
            vm.editableOfferTime = vm.offerTime;
            vm.editableOfferDelivery = vm.offerDelivery;
        };

        function disableEditor() {
            vm.editorEnabled = false;
        };
          
        function save() {
            vm.offerText = vm.editableOffer;
            vm.offerTittle =  vm.editableOfferTittle;
            vm.offerSize = vm.editableOfferSize;
            vm.offerRegion = vm.editableRegion;
            vm.offerCity = vm.editableOfferCity;
            vm.offerAdress = vm.editableOfferAdress;
            vm.offerTopicality = vm.editableTopicality;
            vm.offerTime = vm.editableOfferTime;
            vm.offerDelivery = vm.editableOfferDelivery;

            vm.disableEditor();
        };
    };
})();
