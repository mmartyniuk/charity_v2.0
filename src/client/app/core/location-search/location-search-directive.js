angular
    .module('app.core')
    .directive('locationSearch', locationSearch);

function locationSearch() {
    return {
        restrict: 'EA',
        templateUrl: '/app/core/location-search/view/location-search.html',
        scope: {
            locations: '=locations'
        },
        controller: 'LocationSearchController',
        controllerAs: 'vm',
        bindToController: true
    };
}
