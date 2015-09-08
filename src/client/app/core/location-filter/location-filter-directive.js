angular
    .module('app.core')
    .directive('locationFilterDirective', locationFilterDirective);

function locationFilterDirective() {
    return {
        restrict: 'E',
        templateUrl: '/app/core/location-filter/view/location-filter.html',
        scope: {
            locations: '=locations',
            setlocation: '=setlocation'
        },
        controller: 'LocationFilterController',
        controllerAs: 'vm',
        bindToController: true
    }
}
