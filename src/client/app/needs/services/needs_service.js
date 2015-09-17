/*jshint multistr: true */
(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('NeedsFactory', NeedsFactory);

    function NeedsFactory() {
        return {
            getNeeds: function() {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.needs array to verify if factory is properly working
                /*$http.get("/api/needs").success(function(data) {
                    vm.needs = data;
                })*/
                var needs = [
                    {
                        desc: 'Необхідні зимові штани #1 для центру "Джерело".',
                        body: '1 Необхідний набір одягу для волонтерського центру' +
                        'джерело, найбільша потреба в теплих куртках, шкарпетках,' +
                        'зимових штанах, також необхідна їжа і мінеральна вода.',
                        location: 'Львів',
                        date: '2015-02-21',
                        author: 'Микола Мартинюк',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Необхідні зимові штани #2 для центру "Джерело".',
                        body: '2 Необхідний набір одягу для волонтерського центру' +
                        'джерело, найбільша потреба в теплих куртках, шкарпетках,' +
                        'зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Київ',
                        date: '2015-02-22',
                        author: 'Артур Степанюк',
                        project: 'допомога дитячому будинку "Надія"'

                    },
                    {
                        desc: 'Необхідні зимові штани #3 для центру "Джерело".',
                        body: '3 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-02-23',
                        author: 'Євген Пащенко',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Необхідні зимові штани #4 для центру "Джерело".',
                        body: '4 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-03-25',
                        author: 'Андрій Олексишин',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Необхідні зимові штани #5 для центру "Джерело".',
                        body: '5 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-04-20',
                        author: 'Андрій Сеник',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Необхідні зимові штани #6 для центру "Джерело".',
                        body: '6 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-01-02',
                        author: 'Микола Шевчук',
                        project: 'допомога дитячому будинку "Надія"'
                    }
                ];
                return needs;
            },

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
