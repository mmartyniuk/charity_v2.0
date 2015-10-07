/*globals _ */
(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('EditNeedFactory', EditNeedFactory);

    EditNeedFactory.$inject = ['$http', '$q'];

    function EditNeedFactory($http, $q) {
        return {

            getConcreteNeed: function(id) {
                return $http.get('/api/needs/' + id);
            },
            getRegions: function() {
                //tbd when there will be api to call, till that time hardcoded the
                // vm.categories array to verify if factory is properly working
                /*$http.get('/api/regions').success(function(data) {
                 vm.regions = data;
                 })*/
                var regions = [
                    {
                        'name': 'Київська обл.',
                        'id': 1
                    },
                    {
                        'name': 'Івано-Франківська обл.',
                        'id': 2
                    }
                ];
                return regions;
            },
            getCities: function(id) {
                //return $http.get('/api/regions/id/cities');
                var cities = [{
                    'name':'Київ',
                    'id': 1,
                    'parentId': 1
                },
                {
                    'name':'Оболонь',
                    'id': 2,
                    'parentId': 1
                },
                {
                    'name':'Івано-Франківськ',
                    'id': 3,
                    'parentId': 2
                },
                {
                    'name':'Калуш',
                    'id': 4,
                    'parentId': 2
                }];

                return $q(function(resolve, reject) {
                    var result = _.where(cities, {parentId: id});
                    resolve(result);
                });
            }
        };
    }

})();
