(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', '$filter'];

    /* @ngInject */
    function OffersController($location, $filter) {
        var vm = this;
        vm.title = 'OffersController';
        vm.showStatus = showStatus;
/*        vm.saveUpdatedOffer = saveUpdatedOffer;*/
        vm.offer = {
            name: 'Test Offer'
          };
        vm.regions = [
         {value: "test11", text: 'test1111111'},
         {value: "test", text: 'test'},
         {value: "test", text: 'test'},
         {value: "test", text: 'test'},
        ];

        vm.city = [
         {value: "test11", text: 'test1111111'},
         {value: "test", text: 'test'},
         {value: "test", text: 'test'},
         {value: "test", text: 'test'},
        ];
        vm.size = [
         {value: "S", text: 'S'},
         {value: "M", text: 'M'},
         {value: "L", text: 'L'},
         {value: "XL", text: 'XL'},
        ];
        vm.user = {
        status: 2
      }; 

      vm.statuses = [
        {value: 1, text: 'Так'},
        {value: 2, text: 'Ні'}
      ]; 
       vm.user = {
    dob: new Date(1984, 4, 15)
  };
  vm.updatedOffer = {
/*
to be done here should be http response from server to prefill fields inputs*/
  name: "test213213"
 }
       activate();

        function activate() {
        };
      function showStatus() {
        var selected = $filter('filter')(vm.statuses, {value: vm.user.status});
        return (vm.user.status && selected.length) ? selected[0].text : 'Not set';
      };
    }
})();