/*jshint multistr: true, -W117 */
(function () {
    'use strict';

    angular
        .module('app.needs')
        .factory('NeedsFactory', NeedsFactory);

    NeedsFactory.$inject = ['$http', '$q'];

    function NeedsFactory($http, $q) {
        return {
            getNeeds: function(pageNumber, itemsPerPage) {
                return $q(function (resolve, reject) {
                    $http.get('/api/needs', {
                        params: {
                            page: pageNumber > 0 ? pageNumber - 1 : 0,
                            size: itemsPerPage,
                            projection: 'inLine'
                        }
                    }).success(function (response) {
                        resolve({
                            needs: response._embedded.needs,
                            currentPage: response.page.number + 1,
                            totalItems: response.page.totalElements,
                            itemsPerPage: response.page.size
                        });
                    }).error(reject);
                });
            },
            getSearchNeeds: function(pageNumber, itemsPerPage, query, region, city, categories) {
                query = query || '';
                region = region || '';
                city = city || '';
                categories = (categories && Array.isArray(categories))? categories.join(): '';
                return $q(function (resolve, reject) {
                    $http.get('/api/search/needs', {
                        params: {
                            page: pageNumber > 0 ? pageNumber - 1 : 0,
                            size: itemsPerPage,
                            projection: 'inLine',
                            wildcard: true,
                            query: query,
                            region: region,
                            city: city,
                            category: categories
                        }
                    }).success(function (response) {
                        resolve({
                            needs: response.content,
                            currentPage: response.number + 1,
                            totalItems: response.totalElements,
                            itemsPerPage: response.size
                        });
                    }).error(reject);
                });
            },
            getConcreteNeed: function(id, success, error) {
                return $http.get('/api/needs/' + id, {
                    params: {
                        projection: 'inLine'
                    }
                }).success(success).error(error);
            },
            respondToCurrentNeed: function(data, success, error) {
                $http.post('/api/needResponses', data).success(success).error(error);
            },
            getReponsesForThisNeed: function(id, success, error) {
                $http.get('/api/needs/' + id + '/needResponses').success(success).error(error);
            },
            cancelUserResponse: function(link, success, error) {
                $http.delete(link).success(success).error(error);
            },
            patchResponse: function(id, accept, success, error) {
                $http.patch('/api/needResponses/' + id,
                    {'status': accept}).success(success).error(error);
            },
            getUserToContactWith: function(id, success, error) {
                return $http.get('api/needResponses/' +
                    id + '/user').success(success).error(error);
            },
            deleteNeed: function(id, success, error) {
                $http.delete('/api/needs/' + id).success(success).error(error);
            }
        };
    }

})();
