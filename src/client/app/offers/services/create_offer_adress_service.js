(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('CreateOfferAddressFactory', CreateOfferAddressFactory);

    CreateOfferAddressFactory.$inject = ['$http', '$q'];

    function CreateOfferAddressFactory($http, $q) {
        return {
            getAddress: function () {
                //tbd when there will be api to call, till that time hardcoded the
                /*$http.get('/api/adress').success(function(data) {
                 vm.adress = data;
                 })*/
                var address = {
                    'location': 'вул Стуса Дім 3/122'
                };

                return $q(function (resolve, reject) {
                    var result = address;
                    resolve(result);
                });
            }
        };
    }
})();
