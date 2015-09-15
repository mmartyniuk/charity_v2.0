(function () {
    'use strict';

    angular.module('app.profile').directive('userEntities', [
        function () {
            return {
                restrict: 'E',
                templateUrl: '/app/profile/views/user-entities.html',
                scope: {
                    list: '=',
                    limit: '=?'
                },
                controller: function () {
                    if (!this.limit) {
                        this.limit = 1;
                    }

                    var limit = this.limit;

                    this.toggleList = function () {
                        if (this.limit < this.list.length) {
                            this.limit = this.list.length;
                        } else {
                            this.limit = limit;
                        }
                    };
                },
                controllerAs: 'vm',
                bindToController: true
            };
        }
    ]);

})();
