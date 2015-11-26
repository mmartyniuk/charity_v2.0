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
            vm.selectedCategory = category.children;
            setCategory(category.name);
            vm.dropdown.isOpened = true;
            if (!category.children.length) {
                setCategory(category.name);
                vm.selectedCategory = null;
            }
        }

        function setCategory(category) {
            vm.category = category;
            vm.categoryButton = vm.category;
            vm.dropdown.isOpened = false;
        }
    }
})();
