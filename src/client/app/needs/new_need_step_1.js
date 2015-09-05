(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NewNeedStep1Controller', NewNeedStep1Controller);

    NewNeedStep1Controller.$inject = ['$scope','CreateNeedFactory','$modal', '$state'];

    function NewNeedStep1Controller($scope, CreateNeedFactory, $modal, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NewNeedStep1Controller';
        activate();

        vm.need = {}; //all data from this form will be stored here

        //set option for modal animation
        vm.animationsEnabled = true;

        //open function for modal
        vm.open = function () {
            var init = $modal.open({
                animation: vm.animationsEnabled,
                templateUrl: 'needs-modal.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope,
                resolve: {
                    data: function () {
                        return vm; // post scope to modal window
                    }
                }
            });
            //setting category when modal is closed
            init.result.then(function () {
                vm.need.category = vm.selected;
                vm.currentCategory = null, vm.currentSubCategory = null;
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
                if (value.parent_id === vm.currentSubCategory) {
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
        vm.submitNeed = function(title, category){
            // some ui validation should be applied here, tbd in future
            vm.need.title = title;
            vm.need.category = category;
            $state.go('newneedregister', {prefilled: vm.need});
        };
        //getting categories object from service
        function activate() {
            vm.categories = CreateNeedFactory.getCategories();
        }
    }

})();
