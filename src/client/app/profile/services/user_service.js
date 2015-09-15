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
                                'Шолом',
                                'Кросівки',
                                'Куртка',
                                'Шапка',
                                'Штани'
                            ],
                        'needs':
                            [
                                'АК-47',
                                'СВД',
                                'Телевізор',
                                'Диван',
                                'Матрас'
                            ],
                        'supportedOffers':
                            [
                                'Гамак',
                                'Таблетки',
                                'Вода',
                                'Фрукти',
                                'Овочі'
                            ]
                    });
                });
            }
        };
    }

})();