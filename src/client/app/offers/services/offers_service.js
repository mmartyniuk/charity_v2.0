/*jshint multistr: true, -W117 */
(function () {
    'use strict';

    angular
        .module('app.offers')
        .factory('OffersFactory', OffersFactory);

    OffersFactory.$inject = ['$http', '$q'];

    function OffersFactory($http, $q) {
        return {
            getOffers: function(pageNumber, itemsPerPage) {
                return $q(function(resolve, reject) {
                    $http.get('/api/offers', {
                        params: {
                            page: pageNumber > 0 ? pageNumber - 1 : 0,
                            size: itemsPerPage,
                            projection: 'inLine'
                        }
                    }).success(function(response) {
                        resolve({
                            offers: response._embedded.offers,
                            currentPage: response.page.number + 1,
                            totalItems: response.page.totalElements,
                            itemsPerPage: response.page.size
                        });
                    }).error(reject);
                });
            },
            getConcreteOffer: function(id) {
                return $http.get('/api/offers/' + id);
            }
        };
    }

})();
