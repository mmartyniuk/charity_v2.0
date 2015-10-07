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
        vm.showCategory = true;
        vm.showSubCategory = false;
        vm.showSubSubCategory = false;
        vm.categoryButton = vm.category || 'Виберіть категорію';
        vm.dropdown = {
            isopen: false
        };

        activate();

        //function to identify current category and set child category
        function setCurrentCategory(id) {
            vm.currentCategory = id;
            vm.showCategory = false;
            vm.showSubCategory = true;
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
            }
            vm.showSubCategory = false;
            vm.showSubSubCategory = true;
        }

        function activate() {
            vm.categories = CategoryFactory.getCategories();
        }

        function setCategory(category) {
            vm.category = category;
            vm.categoryButton = vm.category;
            vm.dropdown.isopen = false;
            vm.showSubSubCategory = false;
            vm.showCategory = true;
        }
    }
})();
