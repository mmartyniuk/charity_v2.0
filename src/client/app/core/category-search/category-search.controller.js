(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('CategorySearchController', CategorySearchController);

    CategorySearchController.$inject = ['CategoryFactory', 'SharedFactory'];

    function CategorySearchController(CategoryFactory, SharedFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CategorySearchController';
        vm.setCategory = setCategory;
        vm.showSubCategories = showSubCategories;
        vm.showSubSubCategories = showSubSubCategories;
        vm.showCategory = true;
        vm.showSubCategory = false;
        vm.showSubSubCategory = false;
        vm.categoryButton = vm.category || 'Виберіть категорію';
        vm.dropdown = {
            isopen: false
        };

        activate();

        function activate() {
            CategoryFactory.getCategories().then(function(data) {
                vm.categories = data.categories;
                angular.forEach(vm.categories, function(value) {
                    value._links.children.href = SharedFactory
                        .sliceLink(value._links.children.href);
                }, vm.categories);
            });
        }

        //function to identify current category and set child category
        function showSubCategories(api, name) {
            // reset assigned category values if user tries to re-choose category
            vm.mainCategory = null;
            vm.subcategory = null;
            vm.category = null;
            CategoryFactory.getSubCategories(api).then(function(data) {
                vm.subcategories = data.subcategories;
                angular.forEach(vm.subcategories, function(value) {
                    value._links.children.href = SharedFactory
                        .sliceLink(value._links.children.href);
                }, vm.subcategories);
                if (!vm.subcategories) {
                    setCategory(name);
                    return false;
                } else {
                    vm.mainCategory = name;
                }
            });
            vm.showCategory = false;
            vm.showSubCategory = true;
        }

        //function to identify current category and set child category
        function showSubSubCategories(api, name) {
            CategoryFactory.getSubSubCategories(api).then(function(data) {
                vm.subsubcategories = data.subsubcategories;
                if (!vm.subsubcategories) {
                    setCategory(name);
                    return false;
                } else {
                    vm.subcategory = name;
                }
            });
            vm.showSubCategory = false;
            vm.showSubSubCategory = true;
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
