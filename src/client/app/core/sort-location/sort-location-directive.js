angular
    .module('app.core')
    .directive('sortLocation', sortLocation);

function sortLocation() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/sort-location/view/sort-location.html',
        scope: {
            locations: '=locations',
            setlocation: '=setlocation'
        },
        controller: 'SortLocationController',
        controllerAs: 'vm',
        bindToController: true
    }
}
