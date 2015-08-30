(function () {
    'use strict';

   angular
        .module('app.needs')
        .filter('subFilter', subFilter);

    function subFilter(e) {
        return function() {
        var filt  = [];
        angular.forEach(categories, function(value, key) {
            if(e === value)
            this.push(key + ': ' + value);
        }, filt);
        return filt;
        }
    }
})();
