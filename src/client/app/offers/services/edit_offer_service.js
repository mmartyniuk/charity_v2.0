/*globals _ */
(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('EditOfferFactory', EditOfferFactory);

    EditOfferFactory.$inject = ['$http', '$q'];

    function EditOfferFactory($http, $q) {
        return {

            getConcreteOffer: function(id) {
                return $http.get('/api/offers/' + id);
            },

            getRegions: function() {
                return $q(function(resolve, reject) {
                    $http.get('/api/regions').success(function (data) {
                        resolve(data._embedded.regions);
                    }).error(reject);
                });
            },
            updateCurrentOffer: function (offer) {
                return $http.patch('/api/offers/' + offer.offerId, {
                    'name': offer.title,
                    'description': offer.offerText,
                    'address': offer.address,
                    'convenientTime': offer.convenientTime,
                    'pickup': offer.status,
                    'formattedActualTo': offer.date
                })
            }
        };
    }

})();
