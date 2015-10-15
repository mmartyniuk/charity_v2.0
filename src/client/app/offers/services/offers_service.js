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
            getSearchOffers: function(pageNumber, itemsPerPage, query) {
                query = query || '';
                return $q(function (resolve, reject) {
                    $http.get('/api/search/offers', {
                        params: {
                            page: pageNumber > 0 ? pageNumber - 1 : 0,
                            size: itemsPerPage,
                            projection: 'inLine',
                            query: query
                        }
                    }).success(function (response) {
                        resolve({
                            offers: response.content,
                            currentPage: response.number + 1,
                            totalItems: response.totalElements,
                            itemsPerPage: response.size
                        });
                    }).error(reject);
                });
            },
            getConcreteOffer: function(id, success, error) {
                return $http.get('/api/offers/' + id).success(success).error(error);
            },
            respondToCurrentOffer: function(data, success, error) {
                $http.post('/api/offerResponses', data).success(success).error(error);
            },
            getReponsesForThisOffer: function(id, success, error) {
                $http.get('/api/offers/' + id + '/offerResponses').success(success).error(error);
            },
            cancelUserResponse: function(link, success, error) {
                $http.delete(link).success(success).error(error);
            },
            patchResponse: function(id, accept, success, error) {
                $http.patch('/api/offerResponses/' + id,
                    {'status': accept}).success(success).error(error);
            },
            getUserToContactWith: function(id, success, error) {
                return $http.get('api/offerResponses/' +
                    id + '/user').success(success).error(error);
            }
        };
    }

})();
