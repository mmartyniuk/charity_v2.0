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
        vm.showSubcategories = false;
        vm.enableShowSubcategories = enableShowSubcategories;
        vm.setCategory = setCategory;
        vm.setCategoryId = null;
        vm.categoryPopover = {
            content: 'Test',
            title: 'Title',
            templateUrl: 'categoryPopoverTemplate.html',
            opened: false

        };

        activate();

        function activate() {
            vm.categories = CategoryFactory.getCategories();
            vm.subcategories = CategoryFactory.getSubcategories();
        }

        function enableShowSubcategories(id) {
            vm.setCategoryId = id;
            vm.showSubcategories = true;
            vm.categoryPopover.opened = true;
        }

        function setCategory(category) {
            vm.categoryValue = category;
            vm.showSubcategories = false;
            vm.category = vm.categoryValue;
            vm.categoryPopover.opened = false;
        }
    }
})();
