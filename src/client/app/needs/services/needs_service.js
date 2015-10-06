/*jshint multistr: true, -W117 */
(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('NeedsFactory', NeedsFactory);

    NeedsFactory.$inject = ['$http', '$q'];

    function NeedsFactory($http, $q) {
        return {
            getNeeds: function(currentPage) {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.needs array to verify if factory is properly working
                /*$http.get("/api/needs").success(function(data) {
                    vm.needs = data;
                })*/
                var needs = [
                    {
                        desc: 'Необхідні зимові туфлі #1 для центру "Джерело".',
                        body: '1 Необхідний набір одягу для волонтерського центру' +
                        'джерело, найбільша потреба в теплих куртках, шкарпетках,' +
                        'зимових штанах, також необхідна їжа і мінеральна вода.',
                        location: 'Львів',
                        date: '2015-02-21',
                        author: 'Микола Мартинюк',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Туфлі',
                        image: '../images/shoes.jpeg'
                    },
                    {
                        desc: 'Необхідні зимові штани #2 для центру "Джерело".',
                        body: '2 Необхідний набір одягу для волонтерського центру' +
                        'джерело, найбільша потреба в теплих куртках, шкарпетках,' +
                        'зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Київ',
                        date: '2015-02-22',
                        author: 'Артур Степанюк',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі штани',
                        image: '../images/trousers.jpg'

                    },
                    {
                        desc: 'Необхідні зимові шкарпетки #3 для центру "Джерело".',
                        body: '3 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-02-23',
                        author: 'Євген Пащенко',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі шкарпетки',
                        image: '../images/socks.jpg'
                    },
                    {
                        desc: 'Необхідні зимові туфлі #4 для центру "Джерело".',
                        body: '4 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-03-25',
                        author: 'Андрій Олексишин',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Туфлі',
                        image: '../images/shoes.jpeg'
                    },
                    {
                        desc: 'Необхідні зимові штани #5 для центру "Джерело".',
                        body: '5 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-04-20',
                        author: 'Андрій Сеник',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі штани',
                        image: '../images/trousers.jpg'
                    },
                    {
                        desc: 'Необхідний зимовий светр #6 для центру "Джерело".',
                        body: '6 Необхідний набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-01-02',
                        author: 'Микола Шевчук',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі светри',
                        image: '../images/sweater.jpg'
                    }
                ];

                currentPage = currentPage > 0 ? currentPage - 1 : 0;
                var itemsPerPage = 4;
                var start = currentPage * itemsPerPage;
                var end = start + itemsPerPage;

                return $q(function(resolve, reject) {
                    resolve({
                        needs: _.slice(needs, start, end),
                        currentPage: currentPage + 1,
                        totalItems: needs.length,
                        itemsPerPage: itemsPerPage
                    });
                });
            },
            getConcreteNeed: function(id, success, error){
                $http.get('/api/needs/' + id).success(success).error(error);
            },
            respondToCurrentNeed: function(data, success, error){
                $http.post('/api/needResponses', data).success(success).error(error);
            },
            checkIfNeedRespondAlreadyExists: function(id, success, error){
                $http.get('/api/needs/'+ id +'/needResponses').success(success).error(error);
            },
            cancelUserResponse: function(link, success, error){
                $http.delete(link).success(success).error(error);
            }
        };
    }

})();
