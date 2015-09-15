/*jshint multistr: true */
(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('OffersFactory', OffersFactory);

    function OffersFactory() {
        return {
            getOffers: function() {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.offers array to verify if factory is properly working
                /*$http.get("/api/offers").success(function(data) {
                    vm.offers = data;
                })*/
                var offers = [
                    {
                        desc: 'Зимові штани #1 для центру "Джерело".',
                        body: '1 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Львів',
                        date: '21-02-2015',
                        author: 'Микола Мартинюк',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Зимові штани #2 для центру "Джерело".',
                        body: '2 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Київ',
                        date: '22-02-2015',
                        author: 'Артур Степанюк',
                        project: 'допомога дитячому будинку "Надія"'

                    },
                    {
                        desc: 'Зимові штани #3 для центру "Джерело".',
                        body: '3 Є у наявності набір одягу для волонтерського' +
                        'центру джерело, найбільша потреба в теплих куртках,' +
                        'шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '23-02-2015',
                        author: 'Євген Пащенко',
                        project: 'допомога дитячому будинку "Надія"'
                    }
                ];
                return offers;
            }
        };
    }

})();
