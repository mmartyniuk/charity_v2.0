angular
    .module('app.core')
    .directive('categorySearch', categorySearch);

function categorySearch() {
    return {
        restrict: 'EA',
        templateUrl: '/app/core/category-search/view/category-search.html',
        scope: {
            mainCategory: '=',
            subcategory: '=',
            category: '='
        },
        controller: 'CategorySearchController',
        controllerAs: 'vm',
        bindToController: true
    };
}
