/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('GlobalConfig', {
            // application-wide config
            appPath: '/Content/app'
        });
})();
