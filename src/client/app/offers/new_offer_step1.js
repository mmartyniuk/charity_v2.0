(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('NewOfferBeforeRegisterController', NewOfferBeforeRegisterController);

    NewOfferBeforeRegisterController.$inject = ['$scope','CreateOfferFactory','$modal', '$state'];

    function NewOfferBeforeRegisterController($scope, CreateOfferFactory, $modal, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewOfferBeforeRegisterController';
        activate();

        vm.offer = {}; //all data from this form will be stored here

        //set option for modal animation
        vm.animationsEnabled = true;

        //open function for modal
        vm.open = function () {
            var init = $modal.open({
                animation: vm.animationsEnabled,
                templateUrl: 'offers-modal.html',
                controller: 'ModalInstanceController',
                scope: $scope,
                resolve: {
                    data: function () {
                        return vm; // post scope to modal window
                    }
                }
            });
            //setting category when modal is closed
            init.result.then(function () {
                vm.offer.category = vm.selected;
                vm.currentCategory = null;
                vm.currentSubCategory = null;
            });
        };
        vm.toggleAnimation = function () {
            vm.animationsEnabled = !vm.animationsEnabled;
        };
        //function to identify current category and set child category
        vm.setCurrentCategory = function(id){
            vm.currentCategory = id;
            vm.checkChild = false;
        };
        //function to identify current category and set child category
        vm.setCurrentSubCategory = function(id, name){
            vm.currentSubCategory = id;
            var temp = [];
            angular.forEach(vm.categories, function(value, key) {
                if (value.parentId === vm.currentSubCategory) {
                    this.push(key + ': ' + value);
                }
            }, temp);
            if(!temp.length) {
                vm.ok(name);
            }else{
                vm.checkChild = true;
            }
        };
        vm.setCurrentSubSubCategory = function(name){
            vm.ok(name);
        };
        //using state object here to post submitted data to next page
        vm.submitOffer = function(title, category){
            // some ui validation should be applied here, tbd in future
            $state.go('newofferregister', {prefilled: vm.offer});
        };
        //getting categories object from service
        function activate() {
            vm.categories = CreateOfferFactory.getCategories();
        }
    }
})();
