(function () {
    'use strict';

    angular.module('app.profile').directive('userEntities', [
        '$interpolate',
        function ($interpolate) {
            return {
                restrict: 'E',
                templateUrl: '/app/profile/views/user-entities.html',
                scope: {
                    list: '=',
                    title: '@',
                    url: '=?',
                    limit: '=?'
                },
                controller: function () {
                    if (!this.title) {
                        this.title = 'title';
                    }

                    var url;
                    if (this.url) {
                        url = $interpolate(this.url);
                    }

                    if (!this.limit) {
                        this.limit = 1;
                    }

                    var limit = this.limit;

                    this.getTitle = function (entity) {
                        return entity.name;
                    };

                    this.getCreatedDate = function(entity) {
                        return entity.created;

                    };

                    this.getFinalDate = function(entity) {
                        return entity.formattedActualTo;
                    };

                    this.getHref = function (entity) {
                        return angular.isFunction(url) ? url(entity) : '';
                    };

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
