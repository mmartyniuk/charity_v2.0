(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('CreateOfferFactory', CreateOfferFactory);

    CreateOfferFactory.$inject = ['$http'];

    function CreateOfferFactory($http){
        return {
            getCategories: function() {
                //tbd when there will be api to call, till that time hardcoded the
                // vm.categories array to verify if factory is properly working
                /*$http.get('/api/categories').success(function(data) {
                    vm.categories = data;
                })*/
                var categories = [
                    {
                        'name':'Одяг',
                        'id': 1,
                        'parentId': 0
                    },
                    {
                        'name':'Взуття',
                        'id': 2,
                        'parentId': 0
                    },
                    {
                        'name':'Дитячий одяг',
                        'id': 4,
                        'parentId': 1
                    },
                    {
                        'name':'Чоловічий одяг',
                        'id': 5,
                        'parentId': 1
                    },
                    {
                        'name':'Кеди',
                        'id': 6,
                        'parentId': 2
                    },
                    {
                        'name':'Туфлі',
                        'id': 7,
                        'parentId': 2
                    },
                    {
                        'name':'Дитячі шкарпетки',
                        'id': 8,
                        'parentId': 4
                    },
                    {
                        'name':'Дитячі светри',
                        'id': 9,
                        'parentId': 4
                    },
                    {
                        'name':'Дитячі штани',
                        'id': 10,
                        'parentId': 4
                    }
                ];
                return categories;
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
                        'name':'Калуш',
                        'id': 4,
                        'parentId': 2
                    }
                ];
                return cities;
            }
        };
    }

})();
