(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('LocationFactory', LocationFactory);

    function LocationFactory() {
        return {
            getRegions: function() {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.needs array to verify if factory is properly working
                /*$http.get("/api/regions").success(function(data) {
                 vm.regions = data;
                 })*/
                var regions = [
                    {
                        'name': 'Київська область',
                        'id': '1'
                    },
                    {
                        'name': 'Івано-Франківська область',
                        'id': '2'
                    },
                    {
                        'name': 'Львівська область',
                        'id': '3'
                    },
                    {
                        'name': 'Тернопільська область',
                        'id': '4'
                    },
                    {
                        'name': 'Волинська область',
                        'id': '5'
                    },
                    {
                        'name': 'Чернівецька область',
                        'id': '6'
                    }
                ];
                return regions;
            },

            getCities: function(id) {
                //tbd when there will be api to call, till that time hardcoded the
                // vm.categories array to verify if factory is properly working
                /*$http.get('/api/regions/id/cities').success(function(data) {
                 vm.cities = data;
                 })*/
                var cities = [
                    {
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
                        'name':'Львів',
                        'id': 4,
                        'parentId': 3
                    },
                    {
                        'name':'Тернопіль',
                        'id': 5,
                        'parentId': 4
                    },
                    {
                        'name':'Рівне',
                        'id': 6,
                        'parentId': 5
                    },
                    {
                        'name':'Чернівці',
                        'id': 7,
                        'parentId': 6
                    }
                ];
                return cities;
            }
        };
    }

})();
