/*jshint multistr: true, -W117 */
(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('OffersFactory', OffersFactory);

    OffersFactory.$inject = ['$http', '$q'];

    function OffersFactory($http, $q) {
        return {
            getOffers: function(currentPage) {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.offers array to verify if factory is properly working
                /*$http.get("/api/offers").success(function(data) {
                    vm.offers = data;
                })*/
                var offers = [
                    {
                        desc: 'Зимовий светр #1 для центру "Джерело".',
                        body: '1 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Львів',
                        date: '2015-02-21',
                        author: 'Микола Мартинюк',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі светри',
                        image: '../images/sweater.jpg'
                    },
                    {
                        desc: 'Зимові шкарпетки #2 для центру "Джерело".',
                        body: '2 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Київ',
                        date: '2015-02-22',
                        author: 'Артур Степанюк',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі шкарпетки',
                        image: '../images/socks.jpg'

                    },
                    {
                        desc: 'Зимові туфлі #3 для центру "Джерело".',
                        body: '3 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-02-23',
                        author: 'Євген Пащенко',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Туфлі',
                        image: '../images/shoes.jpeg'
                    },
                    {
                        desc: 'Зимові штани #4 для центру "Джерело".',
                        body: '4 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-03-25',
                        author: 'Андрій Олексишин',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі штани',
                        image: '../images/trousers.jpg'
                    },
                    {
                        desc: 'Зимові кеди #5 для центру "Джерело".',
                        body: '5 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-04-20',
                        author: 'Андрій Сеник',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Кеди',
                        image: '../images/sneakers.jpg'
                    },
                    {
                        desc: 'Зимові штани #6 для центру "Джерело".',
                        body: '6 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '2015-01-02',
                        author: 'Микола Шевчук',
                        project: 'допомога дитячому будинку "Надія"',
                        category: 'Дитячі штани',
                        image: '../images/trousers.jpg'
                    }
                ];

                currentPage = currentPage > 0 ? currentPage - 1 : 0;
                var itemsPerPage = 4;
                var start = currentPage * itemsPerPage;
                var end = start + itemsPerPage;

                return $q(function(resolve, reject) {
                    resolve({
                        offers: _.slice(offers, start, end),
                        currentPage: currentPage + 1,
                        totalItems: offers.length,
                        itemsPerPage: itemsPerPage
                    });
                });
            }
        };
    }

})();
