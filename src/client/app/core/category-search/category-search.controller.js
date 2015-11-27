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
        vm.showSubcategory = showSubcategory;
        vm.categories = [];
        vm.selectedCategories = [];
        vm.categoryButton = vm.category || 'Виберіть категорію';
        vm.dropdown = {
            isOpened: false
        };

        activate();

        function activate() {
            CategoryFactory.getCategories().then(function (data) {
                vm.categories = data.categories;
            });
        }

        function showSubcategory(category) {
            if (!category.children.length) {
                setCategory(category.name);
                vm.selectedCategories.push(category.name);
                vm.categoryHierarchy = vm.selectedCategories;
                vm.selectedCategories = [];
                vm.selectedCategory = null;
                return;
            }
            vm.selectedCategory = category.children;
            setCategory(category.name);
            vm.selectedCategories.push(category.name);
            vm.categoryHierarchy = vm.selectedCategories;
            vm.dropdown.isOpened = true;

        }

        function setCategory(category) {
            vm.category = category;
            vm.categoryButton = vm.category;
            vm.dropdown.isOpened = false;
        }
    }
})();
