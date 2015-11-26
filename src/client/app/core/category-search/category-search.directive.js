angular
    .module('app.core')
    .directive('categorySearch', categorySearch);

function categorySearch() {
    return {
        restrict: 'EA',
        templateUrl: '/app/core/category-search/view/category-search.html',
        scope: {
            category: '='
        },
        controller: 'CategorySearchController',
        controllerAs: 'vm',
        bindToController: true
    };
}
