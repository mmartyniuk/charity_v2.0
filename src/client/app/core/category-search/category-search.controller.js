(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('CategorySearchController', CategorySearchController);

    CategorySearchController.$inject = ['CategoryFactory'];

    function CategorySearchController(CategoryFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CategorySearchController';
        vm.setCategory = setCategory;
        vm.setCurrentCategory = setCurrentCategory;
        vm.setCurrentSubCategory = setCurrentSubCategory;
        vm.setCurrentSubSubCategory = setCurrentSubSubCategory;
        vm.currentCategory = null;
        vm.currentSubCategory = null;
        vm.showCategory = true;
        vm.showSubCategory = false;
        vm.showSubSubCategory = false;

        vm.categoryPopover = {
            templateUrl: 'categoryPopoverTemplate.html',
            opened: false
        };

        activate();

        //function to identify current category and set child category
        function setCurrentCategory(id) {
            vm.currentCategory = id;
            vm.checkChild = false;
            vm.showCategory = false;
            vm.showSubCategory = true;
            vm.categoryPopover.opened = true;
        }

        //function to identify current category and set child category
        function setCurrentSubCategory(id, name) {
            vm.currentSubCategory = id;
            var temp = [];
            angular.forEach(vm.categories, function(value, key) {
                if (value.parentId === vm.currentSubCategory) {
                    this.push(key + ': ' + value);
                }
            }, temp);
            if (!temp.length) {
                vm.setCategory(name);
            } else {
                vm.checkChild = true;
                vm.categoryPopover.opened = true;
            }
            vm.showSubCategory = false;
            vm.showSubSubCategory = true;
        }

        function setCurrentSubSubCategory(name) {
            vm.setCategory(name);
        }


        function activate() {
            vm.categories = CategoryFactory.getCategories();
        }

        function setCategory(category) {
            vm.category = category;
            vm.showSubSubCategory = false;
            vm.categoryPopover.opened = false;
            vm.showCategory = true;
        }
    }
})();
