(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$scope', '$location'];

    function OffersController($scope, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'OffersController';

        activate();

        function activate() {
          $scope.offerText = "";
          $scope.editorEnabled = false;
          
          $scope.enableEditor = function() {
            $scope.editorEnabled = true;
            $scope.editableOffer = $scope.offerText;
          };
          
          $scope.disableEditor = function() {
            $scope.editorEnabled = false;
          };
          
          $scope.save = function() {
            $scope.offerText = $scope.editableOffer;
            $scope.disableEditor();
          };
        };
    };
})();


 