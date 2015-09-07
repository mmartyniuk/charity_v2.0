(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('NeedsController', NeedsController);

    NeedsController.$inject = ['$location'];

    function NeedsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'NeedsController';

/*        
testing
            vm.test = {
            status: 1,
            statuses: [{
                value: "Зможу забрати",
                text: 'Так'
            }, {
                value: "Не зможу забрати",
                text: 'Ні'
            }]
        };
*/
        activate();

        function activate() {}
    }
})();
