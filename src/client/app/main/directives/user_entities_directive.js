(function() {
    'use strict';

    angular.module('app.main').directive('userEntities', [
        function() {
            return {
                restrict: 'E',
                template: '<ul><li ng-repeat="entiti in vm.list | limitTo: vm.limit">{{entiti}}</li><li ng-click="vm.toggleList()"><span ng-show="vm.list.length > vm.limit">[show more]</span><span ng-show="vm.list.length == vm.limit">[hide more]</span></ul>',
                scope: {
                    list: '=',
                    limit: '=?'
                },
                controller: function() {
                    if(!this.limit) {
                        this.limit = 1;
                    }

                    var limit = this.limit;

                    this.toggleList = function() {
                        if(this.limit < this.list.length) {
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
