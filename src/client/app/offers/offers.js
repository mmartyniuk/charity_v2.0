(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', 'OffersFactory'];

    function OffersController($location, OffersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';
        vm.enableEditor = enableEditor;
        vm.disableEditor = disableEditor;
        vm.save = save;
        vm.setFilter = setFilter;
        vm.resetFilter = resetFilter;

        activate();

        function activate() {
          vm.offerText = "";
          vm.editorEnabled = false;
          vm.data = OffersFactory.getOffers();
        };

        function enableEditor() {
            vm.editorEnabled = true;
            vm.editableOffer = vm.offerText;
        };

        function disableEditor() {
            vm.editorEnabled = false;
        };

        function resetFilter() {
            vm.filterLocation = '';
        };

        function setFilter(location){
            vm.filterLocation = location;
        };

        function save() {
            vm.offerText = vm.editableOffer;
            vm.disableEditor();
        };
    };
})();
