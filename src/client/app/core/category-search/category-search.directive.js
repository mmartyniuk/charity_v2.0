angular
    .module('app.core')
    .directive('categorySearch', categorySearch);

function categorySearch() {
    return {
        restrict: 'EA',
        templateUrl: '/app/core/category-search/view/category-search.html',
        scope: {
            category: '=',
            categoryHierarchy: '=?'
        },
        controller: 'CategorySearchController',
        controllerAs: 'vm',
        bindToController: true
    };
}
