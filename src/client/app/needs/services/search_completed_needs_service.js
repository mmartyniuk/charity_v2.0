(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('SearchCompletedNeedsFactory', SearchCompletedNeedsFactory);

    function SearchCompletedNeedsFactory() {
        return {
            getCompletedNeeds: function() {
                //tbd when there will be api to call, till that time hardcoded the
                //vm.completedNeeds array to verify if factory is properly working
                /*$http.get("/api/completedNeeds").success(function(data) {
                    vm.completedNeeds = data;
                })*/
                var completedNeeds = [
                    {
                        desc: 'Необхідні зимові штани #1 для центру "Джерело".',
                        body: '1 Необхідний набір одягу для волонтерського центру джерело, найбільша потреба в теплих куртках, шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Львів',
                        date: '21-02-2015',
                        author: 'Микола Мартинюк',
                        project: 'допомога дитячому будинку "Надія"'
                    },
                    {
                        desc: 'Необхідні зимові штани #2 для центру "Джерело".',
                        body: '2 Необхідний набір одягу для волонтерського центру джерело, найбільша потреба в теплих куртках, шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Київ',
                        date: '22-02-2015',
                        author: 'Артур Степанюк',
                        project: 'допомога дитячому будинку "Надія"'

                    },
                    {
                        desc: 'Необхідні зимові штани #3 для центру "Джерело".',
                        body: '3 Необхідний набір одягу для волонтерського центру джерело, найбільша потреба в теплих куртках, шкарпетках, зимових штанах, також необхідна їжа і мінеральна вода. ',
                        location: 'Івано-Франківськ',
                        date: '23-02-2015',
                        author: 'Євген Пащенко',
                        project: 'допомога дитячому будинку "Надія"'
                    }
                ];
                return completedNeeds;
            }
        }
    }

})();
