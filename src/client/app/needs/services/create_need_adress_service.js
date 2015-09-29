(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('CreateNeedAddressFactory', CreateNeedAddressFactory);

    CreateNeedAddressFactory.$inject = ['$http', '$q'];

    function CreateNeedAddressFactory($http, $q) {
        return {
            getAddress: function () {
                //tbd when there will be api to call, till that time hardcoded the
                /*$http.get('/api/adress').success(function(data) {
                 vm.adress = data;
                 })*/
                var address = {
                    'street': 'Мазепи',
                    'house': 'Дім 3',
                    'flat': 'Квартира 2'
                };

                return $q(function(resolve, reject) {
                    var result = address;
                    resolve(result);
                });
            }
        };
    }
})();
