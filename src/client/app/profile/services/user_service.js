(function () {
    'use strict';

    angular
        .module('app.profile')
        .factory('Users', Users);

    Users.$inject = ['$http', '$q'];

    function Users($http, $q){
        return {
            getUsers: function() {
                //return $http.get('/api/users');

                return $q(function(resolve, reject) {
                    resolve({
                        'name': 'Ігор Петрів',
                        'phone': '0989898989',
                        'email': 'mail@mail.com',
                        'status': 'Користувач',
                        'supportedNeeds':
                            [
                            ],
                        'offers':
                            [
                                {id: 1, title:'Шолом'},
                                {id: 2, title:'Кросівки'},
                                {id: 3, title:'Куртка'},
                                {id: 4, title:'Шапка'},
                                {id: 5, title:'Штани'}
                            ],
                        'needs':
                            [
                                {customId: 1, customTitle:'АК-47'},
                                {customId: 2, customTitle:'СВД'},
                                {customId: 3, customTitle:'Телевізор'},
                                {customId: 4, customTitle:'Диван'},
                                {customId: 5, customTitle:'Матрас'}
                            ],
                        'supportedOffers':
                            [
                                {id: 1, title:'Гамак'},
                                {id: 2, title:'Таблетки'},
                                {id: 3, title:'Вода'},
                                {id: 4, title:'Фрукти'},
                                {id: 5, title:'Овочі'}
                            ]
                    });
                });
            }
        }
    }

})();
