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
        vm.animationsEnabled = true;

        vm.open = function () {
            var init = $modal.open({
                animation: vm.animationsEnabled,
                templateUrl: 'needs-modal.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope,
                resolve: {
                    data: function () {
                        return vm; // deep copy
                    }
                }
            });
            init.result.then(function () {
                vm.need.category = vm.selected;
            });
        };
        vm.toggleAnimation = function () {
            vm.animationsEnabled = !vm.animationsEnabled;
        };
        vm.setCurrentCategory = function(id){
            vm.currentCategory = id;
            vm.checkChild = function(){
                if(vm.subExist){
                    return !vm.subExist;
                }
            }
            //document.getElementById('sub').classList.remove("hidden");
            //if (!(document.getElementById('subchild').classList.contains("hidden"))){
             //document.getElementById('subchild').classList.add("hidden");
            //}
        };
        vm.setCurrentSubCategory = function(id, name){
            vm.currentSubCategory = id;
            var temp = [];
            angular.forEach(vm.categories, function(value, key) {
                if (value.parent_id === vm.currentSubCategory) {
                    this.push(key + ': ' + value);
                }
            }, temp);
            if(temp.length !== 0) {
                vm.setTemp = true;
            }else{
                vm.ok(name);
            }
        };
        vm.setCurrentSubSubCategory = function(name){
            vm.ok(name);
        };
        vm.submitNeed = function(title, category){
            // some ui validation should be applied here, tbd in future
            vm.need.title = title;
            vm.need.category = category;
            $state.go('newneedregister', {prefilled: vm.need});
        };
        function activate() {
            vm.categories = CreateNeedFactory.getCategories();
        }
    }

})();
